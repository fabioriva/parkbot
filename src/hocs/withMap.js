import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { isAllowed } from 'src/lib/auth-actions'
import fetchJson from 'src/lib/fetchJson'
import { useData } from 'src/lib/useWebSocket'
import message from 'src/lib/message'
import Layout from 'src/components/Layout'
import Error from 'src/components/Error'
import Widget from 'src/components/Widget'
// map
import Dialog from 'src/components/map/StallEdit'
import Level from 'src/components/map/Level'
import Occupancy from 'src/components/map/PieChart'
import View from 'src/components/map/View'
// material-ui
// import Grid from '@material-ui/core/Grid'

const withMap = WrappedComponent => {
  const Wrapper = props => {
    const { t } = useTranslation('map')

    const { definitions, json, user } = props
    const { backendUrl, websockUrl, userRole } = definitions

    if (json.err) {
      return <Error {...props} message='Error 500' />
    }

    const [map, setMap] = React.useState(json)

    React.useEffect(() => fetch(), [])

    const fetch = async () => {
      const json = await fetchJson(`${backendUrl}/map`)
      if (!json.err) setMap(json)
    }

    // const { data } = useData(`${websockUrl}?channel=map`, {
    const { data } = useData(websockUrl.concat('/map'), {
      initialData: map,
      page: 'map'
    })

    React.useEffect(() => setMap(data), [data])

    const { cards, stalls, stallStatus } = map.definitions

    // Radio
    const [filter, setFilter] = React.useState('SHOW_NUMBERS')
    const handleChange = event => setFilter(event.target.value)

    // Dialog
    const DIALOG_INIT_VALUES = { card: 0, stall: 0, minCard: 1, maxCard: cards }
    const [open, setOpen] = React.useState(false)
    const [dialog, setDialog] = React.useState(DIALOG_INIT_VALUES)

    const handleCancel = () => {
      setOpen(false)
      setDialog(DIALOG_INIT_VALUES)
    }

    const handleConfirm = async ({ card, stall }) => {
      setOpen(false)
      const json = await fetchJson(`${backendUrl}/map/edit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ card, stall })
      })
      const snack = message(json)
      props.enqueueSnackbar(snack.message, snack.options)
    }

    const handleOpen = (stall, value) => {
      if (isAllowed(user, [userRole])) {
        setOpen(true)
        setDialog({ ...dialog, card: value, stall: stall })
      }
    }

    const levels = map.levels.map((item, key) => (
      <Level
        key={key}
        level={item}
        stallStatus={stallStatus}
        visibilityFilter={filter}
        openModal={handleOpen}
      />
    ))

    const view = <View filter={filter} handleChange={handleChange} />

    const occupancy = (
      <Widget title={t('chart-occupancy')}>
        {/* <Occupancy data={map.statistics[0]} /> */}
        <Occupancy data={map.occupancy} />
      </Widget>
    )

    return (
      <Layout {...props}>
        <WrappedComponent
          {...props}
          levels={levels}
          occupancy={occupancy}
          view={view}
        />
        {/* <Grid container spacing={1}>
          <Grid item xs={12} lg={8}>
            <WrappedComponent {...props} levels={levels} />
            <View filter={filter} handleChange={handleChange} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Widget title={t('chart-occupancy')}>
              <Occupancy data={map.statistics[0]} />
            </Widget>
          </Grid>
        </Grid> */}
        <Dialog
          open={open}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
          value={dialog}
        />
      </Layout>
    )
  }
  return Wrapper
}

export default withMap
