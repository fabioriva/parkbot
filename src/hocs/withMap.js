import Error from 'next/error'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useData } from 'src/lib/websocket'
import { Level } from 'src/components/Map'
import Dialog from 'src/components/MapDialog'
import View from 'src/components/MapView'
import Layout from 'src/components/Layout'
import Widget from 'src/components/Widget'
import Occupancy from 'src/charts/Occupancy'
// material-ui
import Grid from '@material-ui/core/Grid'

const withMap = WrappedComponent => {
  const Wrapper = props => {
    const { t } = useTranslation(['map'])

    const { definitions, json, user } = props
    const { apsName, cards, stalls, stallStatus, websockUrl } = definitions

    if (json.err) return <Error statusCode={500} />

    const { mesg, send } = useData('map', `${websockUrl}?channel=ch1`)

    useEffect(() => {
      if (mesg) {
        setMap(mesg)
      }
    }, [mesg])

    // Map
    const [map, setMap] = useState(json)

    // Dialog
    const DIALOG_INIT_VALUES = {
      stall: 0,
      value: 1,
      minCard: 1,
      maxCard: cards,
      minStall: 1,
      maxStall: stalls
    }
    const [open, setOpen] = useState(false)
    const [dialog, setDialog] = useState(DIALOG_INIT_VALUES)

    const handleCancel = () => {
      setDialog(DIALOG_INIT_VALUES)
      setOpen(false)
    }

    const handleConfirm = ({ stall, value }) => {
      setDialog(DIALOG_INIT_VALUES)
      setOpen(false)
      console.log('Stall', typeof stall, stall, 'Value', typeof value, value)
      send('edit-stall', { stall, value })
    }

    const handleOpen = (stall, value) => {
      setDialog({ ...dialog, stall: stall, value: value })
      setOpen(true)
    }

    // Radio
    const [filter, setFilter] = useState('SHOW_NUMBERS')
    const handleChange = event => setFilter(event.target.value)

    const levels = map.levels.map((item, key) => (
      <Level
        key={key}
        level={item}
        stallStatus={stallStatus}
        visibilityFilter={filter}
        openModal={handleOpen}
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
        <Dialog
          open={open}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
          data={dialog}
        />
      </Layout>
    )
  }
  return Wrapper
}

export default withMap
