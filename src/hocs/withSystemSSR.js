import Error from 'next/error'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useData } from 'src/lib/websocket'
import Confirm from 'src/components/ConfirmDialog'
import Device from 'src/components/Device'
import Dialog from 'src/components/OperationDialog'
import Layout from 'src/components/Layout'
import Queue from 'src/components/Queue'
import Widget from 'src/components/Widget'
import { ACTIONS } from 'src/constants/roles'
// import { isAllowed } from 'src/lib/auth'
// material-ui
import Grid from '@material-ui/core/Grid'

const isAllowed = (user, rights) =>
  rights.some(right =>
    user.rights !== undefined ? user.rights.includes(right) : false
  )

const withSystem = WrappedComponent => {
  const Wrapper = props => {
    const { t } = useTranslation(['system'])

    const { definitions, json, user } = props
    const { apsName, cards, websockUrl } = definitions

    if (json.err) return <Error statusCode={500} />

    const [overview, setOverview] = useState(json)

    const { mesg, send } = useData('overview', `${websockUrl}?channel=ch1`)

    useEffect(() => {
      if (mesg) {
        setOverview(mesg)
      }
    }, [mesg])

    // Confirm
    const [confirm, setConfirm] = useState(false)

    // Dialog
    const DIALOG_INIT_VALUES = { id: 0, card: 1, minCard: 1, maxCard: cards }
    const [open, setOpen] = useState(false)
    const [operation, setOperation] = useState(DIALOG_INIT_VALUES)

    const handleCancel = () => {
      setOpen(false)
      setOperation(DIALOG_INIT_VALUES)
    }

    const handleConfirm = async ({ id, card, conn }) => {
      // console.log(typeof id, id, typeof card, card, conn)
      setOpen(false)
      setOperation(DIALOG_INIT_VALUES)
      send('overview-operation', {
        conn: conn,
        operation: parseInt(id), // html input is returning string!
        value: parseInt(card) // html input is returning string!
      })
    }

    const handleOpen = (id, write) => {
      // console.log(id, write)
      setOpen(true)
      setOperation({ ...operation, conn: write, id: id })
    }

    const handleDelete = (card, id) => {
      // console.log('delete', typeof card, card, typeof id, id)
      if (window.confirm('Delete ?')) {
        send('exit-queue-delete', {
          card: card,
          index: id,
          start: 0,
          amount: 6
        })
      }
    }

    const handleRollback = system => {
      // console.log('rollback', system)
      send('overview-rollback', { id: system })
    }

    const devices = overview.devices.map((item, key) => (
      <Device
        key={key}
        item={item}
        actions={[handleOpen, handleRollback]}
        authorization={isAllowed(user, [ACTIONS])}
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
              authorization={isAllowed(user, [ACTIONS])}
              title={t('exit-queue')}
              button={overview.exitQueue.exitButton}
              showModal={handleOpen}
            >
              <Queue
                authorization={isAllowed(user, [ACTIONS])}
                handleDelete={handleDelete}
                queueList={overview.exitQueue.queueList}
              />
            </Widget>
          </Grid>
        </Grid>
        <Confirm
          title='Delete Post?'
          open={confirm}
          setOpen={setConfirm}
          onConfirm={handleDelete}
        >
          Are you sure you want to delete this post?
        </Confirm>
        <Dialog
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
