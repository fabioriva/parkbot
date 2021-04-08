import React from 'react'
import useTranslation from 'next-translate/useTranslation'
// import { useData } from 'src/lib/useWebSocket'
import { useSnackbar } from 'notistack'
import fetchJson from 'src/lib/fetchJson'
import useData from 'src/lib/useData'
import { isAllowed } from 'src/lib/auth-actions'
import message from 'src/lib/message'
import Layout from 'src/components/Layout'
import Error from 'src/components/Error'
import Widget from 'src/components/Widget'
// system
import Device from 'src/components/system/Device'
import Operation from 'src/components/system/OperationDialog'
import Queue from 'src/components/system/Queue'
// material-ui
import Grid from '@material-ui/core/Grid'

const withSystem = WrappedComponent => {
  const Wrapper = props => {
    const { t } = useTranslation('system')
    const { enqueueSnackbar } = useSnackbar()

    const { definitions, json, user } = props
    const { apsName, backendUrl, websockUrl, userRole } = definitions

    // if (json.err) {
    //   return (
    //     <Error
    //       definitions={definitions}
    //       message='Error 500'
    //       title={t('title')}
    //       user={user}
    //     />
    //   )
    // }

    // const [overview, setOverview] = useState(json)

    // const { mesg } = useData('overview', `${websockUrl}?channel=ch1`)

    // useEffect(() => {
    //   if (mesg) {
    //     setOverview(mesg)
    //   }
    // }, [mesg])

    const { data, isError } = useData(`${backendUrl}/overview`, {
      initialData: json,
      refreshInterval: 500
    })

    if (json.err || isError) {
      return (
        <Error
          definitions={definitions}
          message='Error 500'
          title={t('title')}
          user={user}
        />
      )
    }

    // if (isLoading) return <div>loading...</div>

    const overview = data

    // Dialog
    const DIALOG_INIT_VALUES = {
      id: 0,
      card: 1,
      minCard: 1,
      maxCard: overview.definitions.cards
    }
    const [open, setOpen] = React.useState(false)
    const [operation, setOperation] = React.useState(DIALOG_INIT_VALUES)

    const handleCancel = () => {
      setOpen(false)
      setOperation(DIALOG_INIT_VALUES)
    }

    const handleConfirm = async ({ id, card, conn }) => {
      setOpen(false)
      setOperation(DIALOG_INIT_VALUES)
      // send('overview-operation', {
      //   conn: conn,
      //   operation: parseInt(id), // html input is returning string!
      //   value: parseInt(card) // html input is returning string!
      // })
      const json = await fetchJson(`${backendUrl}/system/operation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          operation: parseInt(id), // html input is returning string!
          value: parseInt(card) // html input is returning string!
        })
      })
      const snack = message(json)
      enqueueSnackbar(snack.message, snack.options)
    }

    const handleOpen = id => {
      setOpen(true)
      setOperation({ ...operation, id: id })
    }

    const handleDelete = async ({ card, index }) => {
      const json = await fetchJson(`${backendUrl}/system/queue/delete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ card, index })
      })
      const snack = message(json)
      enqueueSnackbar(snack.message, snack.options)
    }

    const devices = overview.devices.map((item, key) => (
      <Device
        key={key}
        item={item}
        actions={[handleOpen]} //, handleRollback]}
        user={user}
        // authorization={isAllowed(user, [userRole])
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
          <Grid item xs={12} md={8}>
            <WrappedComponent {...props} devices={devices} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Widget
              authorization={isAllowed(user, [userRole])}
              title={t('exit-queue')}
              button={overview.exitQueue.exitButton}
              showModal={handleOpen}
            >
              <Queue
                authorization={isAllowed(user, [userRole])}
                handleDelete={handleDelete}
                queueList={overview.exitQueue.queueList}
              />
            </Widget>
          </Grid>
        </Grid>
        <Operation
          open={open}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
          value={operation}
        />
      </Layout>
    )
  }
  return Wrapper
}

export default withSystem
