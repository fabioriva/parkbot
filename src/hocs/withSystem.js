import Error from 'next/error'
import useTranslation from 'next-translate/useTranslation'
import { useState, useEffect } from 'react'
import { useData } from 'src/lib/websocket'
import Layout from 'src/components/Layout'
import Widget from 'src/components/Widget'
// system
import Device from 'src/components/system/Device'
import Operation from 'src/components/system/OperationDialog'
import Queue from 'src/components/system/Queue'
// material-ui
import Grid from '@material-ui/core/Grid'

const isAllowed = (user, rights) =>
  rights.some(right =>
    user.rights !== undefined ? user.rights.includes(right) : false
  )

const withSystem = WrappedComponent => {
  const Wrapper = props => {
    const { t } = useTranslation('system')

    const { definitions, json, user } = props
    const { apsName, cards, websockUrl, userRole } = definitions

    if (json.err) return <Error statusCode={500} />

    const [overview, setOverview] = useState(json)

    const { mesg, send } = useData('overview', `${websockUrl}?channel=ch1`)

    useEffect(() => {
      if (mesg) {
        setOverview(mesg)
      }
    }, [mesg])

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

    const devices = overview.devices.map((item, key) => (
      <Device
        key={key}
        item={item}
        // actions={[handleOpen, handleRollback]}
        authorization={isAllowed(user, [userRole])}
        user={user}
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
        {/* <Confirm
          title='Delete Post?'
          open={confirm}
          setOpen={setConfirm}
          onConfirm={handleDelete}
        >
          Are you sure you want to delete this post?
        </Confirm> */}
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
