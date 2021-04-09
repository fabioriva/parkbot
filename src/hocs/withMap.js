import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useSnackbar } from 'notistack'
import { isAllowed } from 'src/lib/auth-actions'
import fetchJson from 'src/lib/fetchJson'
import { useData } from 'src/lib/useWebSocket'
import message from 'src/lib/message'
import Layout from 'src/components/Layout'
import Error from 'src/components/Error'
import Widget from 'src/components/Widget'
// map
import Dialog from 'src/components/map/StallEditDialog'
import Level from 'src/components/map/Level'
import Occupancy from 'src/components/map/PieChart'
import View from 'src/components/map/View'
// material-ui
import Grid from '@material-ui/core/Grid'

const withMap = WrappedComponent => {
  const Wrapper = props => {
    const { t } = useTranslation('map')
    const { enqueueSnackbar } = useSnackbar()

    const { definitions, json, user } = props
    const {
      apsName,
      backendUrl,
      websockUrl,
      // cards,
      // stalls,
      // stallStatus,
      userRole
    } = definitions

    if (json.err) {
      return (
        <Error
          definitions={definitions}
          message='Error 500'
          title={t('title')}
          user={user}
        />
      )
    }

    const [map, setMap] = React.useState(json)

    const { data } = useData(`${websockUrl}?channel=ch1`, {
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
      enqueueSnackbar(snack.message, snack.options)
      // setMap(json.data)
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
          value={dialog}
        />
      </Layout>
    )
  }
  return Wrapper
}

export default withMap
