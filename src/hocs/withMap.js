import Error from 'next/error'
import useTranslation from 'next-translate/useTranslation'
import { useState, useEffect } from 'react'
import { useData } from 'src/lib/websocket'
import Layout from 'src/components/Layout'
import Widget from 'src/components/Widget'
// map
import Level from 'src/components/map/Level'
import Occupancy from 'src/components/map/PieChart'
import View from 'src/components/map/View'
// material-ui
import Grid from '@material-ui/core/Grid'

const withMap = WrappedComponent => {
  const Wrapper = props => {
    const { t } = useTranslation('map')

    const { definitions, json, user } = props
    const { apsName, websockUrl, stallStatus, userRole } = definitions

    if (json.err) return <Error statusCode={500} />

    const [map, setMap] = useState(json)

    const { mesg, send } = useData('map', `${websockUrl}?channel=ch1`)

    useEffect(() => {
      if (mesg) {
        setMap(mesg)
      }
    }, [mesg])

    // Radio
    const [filter, setFilter] = useState('SHOW_NUMBERS')
    const handleChange = event => setFilter(event.target.value)

    const levels = map.levels.map((item, key) => (
      <Level
        key={key}
        level={item}
        stallStatus={stallStatus}
        visibilityFilter={filter}
        // openModal={handleOpen}
      />
    ))

    return (
      <Layout
        apsName={apsName}
        pageTitle={t('title')}
        socket={`${websockUrl}?channel=ch2`}
        user={user}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} lg={8}>
            <WrappedComponent {...props} levels={levels} />
            <View filter={filter} handleChange={handleChange} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Widget title={t('chart-occupancy')}>
              <Occupancy data={map.statistics[0]} />
            </Widget>
          </Grid>
        </Grid>
      </Layout>
    )
  }
  return Wrapper
}

export default withMap
