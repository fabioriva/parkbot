import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Grid from '@mui/material/Grid'
import Error from 'src/components/Error'
import Layout from 'src/components/Layout'
import Message from 'src/components/Message'
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

  const [overview, setOverview] = React.useState(props.json)
  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/overview`
  const { data, loading } = useData(url, {
    initialData: overview,
    page: 'overview'
  })
  React.useEffect(() => setOverview(data), [data])

  // Dialog
  const [id, setId] = React.useState(0)
  const [open, setOpen] = React.useState(false)

  const handleOperationId = id => {
    setId(id)
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleConfirm = async card => {
    setOpen(false)
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/system/operation`
    const json = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + props.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ card, id })
    })
    setOpenMessage(true)
    setResponse(json)
  }

  const handleDelete = async ({ card, index }) => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/system/queue/delete`
    const json = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + props.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ card, index })
    })
    setOpenMessage(true)
    setResponse(json)
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
    const FALSE = Buffer.alloc(1, 0, 'hex')
    const TRUE = Buffer.alloc(1, 1, 'hex')
    const buffer = Buffer.alloc(1, TRUE, 'hex').toJSON()
    // const buffer = Buffer.allocUnsafe(2)
    // buffer.writeUInt16BE(123, 0)
    // buffer.toJSON()
    console.log(buffer)
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
    setOpenMessage(true)
    setResponse(json)
  }

  // Message
  const [openMessage, setOpenMessage] = React.useState(false)
  const [response, setResponse] = React.useState(null)
  const handleCloseMessage = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenMessage(false)
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
                auth={isAllowed(props.user, [ACTIONS])}
                user={props.user}
                loading={loading}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Device
                item={overview.devices[1]}
                aps={props.aps}
                auth={isAllowed(props.user, [ACTIONS])}
                user={props.user}
                loading={loading}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Device
                item={overview.devices[2]}
                aps={props.aps}
                auth={isAllowed(props.user, [ACTIONS])}
                action={handleActionConfirm}
                user={props.user}
                loading={loading}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Device
                item={overview.devices[3]}
                aps={props.aps}
                auth={isAllowed(props.user, [ACTIONS])}
                action={handleActionConfirm}
                user={props.user}
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
            onExit={() => handleOperationId(0)}
            loading={loading}
          />
        </Grid>
      </Grid>
      <OperationDialog
        open={open}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        id={id}
        minCard={1}
        maxCard={overview.definitions.cards}
      />
      <RollbackDialog
        dialogContent={t('action-rollback-confirm')}
        dialogTitle={t('action-rollback')}
        open={confirmOpen}
        value={confirmValue}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={handleAction}
      />
      <Message
        open={openMessage}
        response={response}
        handleClose={handleCloseMessage}
      />
    </Layout>
  )
}
