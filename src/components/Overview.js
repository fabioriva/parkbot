import { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Layout from 'src/dashboard/Layout'
import Device from 'src/components/Device'
import Queue from 'src/components/ExitQueue'
import useWebSocket from 'src/hooks/useWebsocket'

import Dialog from 'src/components/OperationDialog'
// import Occupancy from 'src/components/Occupancy'

const Page = ({ currentUser = {}, definitions, json }) => {
  const {
    activeTab,
    apsName,
    apsLocation,
    cards,
    pageTitle,
    websockUrl
  } = definitions
  
  const [overview, setOverview] = useState(json)

  const { mesg, send } = useWebSocket('overview', `${websockUrl}?channel=ch1`)

  useEffect(() => {
//  if (!diagnosticIsActive && mesg) {
    if (mesg) {
      setOverview(mesg)
    }
  })

  const devices = overview.devices.map((device, i) =>
    <Device
      device={device}
      // actions={[modalOpen, handleRollback]}
      key={i}
    />
  )

  // Dialog
  const DIALOG_INIT_VALUES = { id: 0, card: 1, minCard: 1, maxCard: cards }
  const [open, setOpen] = useState(false)
  const [operation, setOperation] = useState(DIALOG_INIT_VALUES)

  const handleClose = (values) => {
    setOpen(false);
    setOperation(DIALOG_INIT_VALUES)
    console.log('onClose', values)
  };

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <Layout
      activeTab={activeTab}
      apsName={apsName}
      apsLocation={apsLocation}
      pageTitle={pageTitle}
      socket={`${websockUrl}?channel=ch2`}
      user={currentUser}
    >
      <Grid container spacing={3}>
        <Grid item lg={4}>
          { devices[0] }
        </Grid>
        <Grid item lg={4}>
          { devices[1] }
        </Grid>
        {/* <Grid item lg={4}>
          { devices[2] }
        </Grid> */}
        <Grid item lg={4}>
          <Queue exitQueue={overview.exitQueue} onOpen={handleOpen} />
        </Grid>
        {/* <Grid item lg={3}>
          <Occupancy />
        </Grid> */}
      </Grid>
      <Dialog open={open} onClose={handleClose} value={operation} />
    </Layout>
  )
}

export default Page
