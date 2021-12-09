import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Grid from '@mui/material/Grid'
import Error from 'src/components/Error'
import Layout from 'src/components/Layout'
import Device from 'src/components/overview/Device'
import OperationDialog from 'src/components/overview/OperationDialog'
import RollbackDialog from 'src/components/ConfirmDialog'
import Queue from 'src/components/overview/Queue'
import fetch from 'src/lib/fetch'
import { useData } from 'src/lib/useWebSocket'
import { ACTIONS, isAllowed } from '/src/constants/auth'

export default function Overview (props) {
  const { t } = useTranslation('overview')

  if (props.json.err) return <Error {...props} pageTitle={t('page-title')} />

  // const [auth, setAuth] = React.useState(false)
  // React.useEffect(() => setAuth(isAllowed(props.user, [ACTIONS])), [])

  const [overview, setOverview] = React.useState(props.json)
  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/overview`
  const { data, loading } = useData(url, {
    initialData: overview,
    page: 'overview'
  })
  React.useEffect(() => setOverview(data), [data])

  const handleDelete = async ({ card, index }) => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/system/queue/delete`
    const json = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ card, index })
    })
    console.log('delete queue:', card, index, json)
    // const snack = message(json)
    // props.enqueueSnackbar(snack.message, snack.options)
  }

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

  const handleConfirm = async ({ card, id }) => {
    setOpen(false)
    setOperation(DIALOG_INIT_VALUES)
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/system/operation`
    const json = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + props.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ card, id })
    })
    console.log(card, id, json)
    // const snack = message(json)
    // props.enqueueSnackbar(snack.message, snack.options)
  }

  // Rollback
  const [confirmOpen, setConfirmOpen] = React.useState(false)
  const [confirmValue, setConfirmValue] = React.useState({})

  const handleActionConfirm = async conn => {
    setConfirmOpen(true)
    setConfirmValue(conn)
  }

  const handleAction = async conn => {
    console.log('handleAction', conn)
    // const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/readArea`
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/writeArea`

    const buffer = Buffer.alloc(1, conn.buffer, 'hex')
    // const buffer = Buffer.allocUnsafe(2)
    // buffer.writeUInt16BE(123, 0)
    buffer.toJSON()

    const json = await fetch(url, {
      method: 'POST',
      headers: {
        // Authorization: 'Bearer ' + props.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ conn, buffer })
    })
    console.log(json)
    setConfirmOpen(false)
  }

  return (
    <Layout {...props} pageTitle={t('page-title')}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Device
                item={overview.devices[0]}
                aps={props.aps}
                action={handleActionConfirm}
                // actions={[handleOpen]} //, handleRollback]}
                user={props.user}
                // authorization={isAllowed(user, [userRole])
                loading={loading}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Device
                item={overview.devices[1]}
                aps={props.aps}
                // actions={[handleOpen]} //, handleRollback]}
                user={props.user}
                // authorization={isAllowed(user, [userRole])
                loading={loading}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Device
                item={overview.devices[2]}
                aps={props.aps}
                // actions={[handleOpen]} //, handleRollback]}
                user={props.user}
                // authorization={isAllowed(user, [userRole])
                loading={loading}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Device
                item={overview.devices[3]}
                aps={props.aps}
                // actions={[handleOpen]} //, handleRollback]}
                user={props.user}
                // authorization={isAllowed(user, [userRole])
                loading={loading}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Queue
            auth={isAllowed(props.user, [ACTIONS])}
            data={overview.exitQueue}
            onDelete={handleDelete}
            onExit={() => setOpen(true)}
            loading={loading}
          />
        </Grid>
      </Grid>
      <OperationDialog
        open={open}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        value={operation}
      />
      <RollbackDialog
        dialogContent='Content'
        dialogTitle='Title'
        open={confirmOpen}
        value={confirmValue}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={handleAction}
      />
    </Layout>
  )
}
