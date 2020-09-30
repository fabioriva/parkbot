import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Layout from 'src/app/Layout'

import Grid from '@material-ui/core/Grid';

import Fab from '@material-ui/core/Fab'
import PhoneIcon from '@material-ui/icons/Phone';

import UserHero from 'src/app/UserHero'
import Activity from 'src/app/Activity'
import ExitDialog from 'src/app/ExitDialog'
import Keyboard from 'src/app/Keyboard'
import Tags from 'src/app/Tags'
import Widget from 'src/app/Widget'

import Queue from 'src/components/Queue'
import useWebSocket from 'src/hooks/useWebsocket'

import { hasRole, isAllowed } from 'src/lib/auth'
import { DASHBOARD, ACTIONS } from 'src/constants/roles'

import Error from 'next/error'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}));

const Dashboard = ({ currentUser = {}, definitions, json, cards, activity }) => {
  const classes = useStyles();

  const {
    // activeTab,
    apsName,
    // apsLocation,
    pageTitle,
    websockUrl
  } = definitions

  if (!hasRole(currentUser, [DASHBOARD])) return <Error statusCode={403} />

  if (json.err) return <Error statusCode={500} />

  const [open, setOpen] = React.useState(false);

  const [keyboard, setKeyboard] = React.useState(false);

  // const [pin, setPin] = React.useState('');

  // if (pin.length >= 3) {
  //   handleClose(pin)
  //   setPin('')
  // }
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);
    setKeyboard(true)
  };

  const handleConfirmPin = (pin) => {
    setKeyboard(false);
    console.log(pin)
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [overview, setOverview] = useState(json)

  const { mesg, send } = useWebSocket('overview', `${websockUrl}?channel=ch1`)

  useEffect(() => {
    // if (!diagnosticIsActive && mesg) {
    if (mesg) {
      setOverview(mesg)
    }
  })

  return (
    <Layout
      // activeTab={activeTab}
      apsName={apsName}
      // apsLocation={apsLocation}
      pageTitle={pageTitle}
      socket={`${websockUrl}?channel=ch2`}
      user={currentUser}
    >
      <Grid
        container
        // direction="column"
        // justify="center"
        // alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} md={8}>

          <UserHero user={currentUser} />

          <Widget title='Your tags'>
            <Tags
              user={currentUser}
              cards={cards}
              handleOpen={handleOpen}
            />
          </Widget>

          <Widget title='Recent activity'>
            <Activity
              user={currentUser}
              activity={activity}
              // pin={pin}
              // setPin={setPin}
            />
          </Widget>
          
        </Grid>

        <Grid item xs={12} md={4}>
          <Widget title='Exit queue' actions={false}>
            <Queue queueList={overview.exitQueue.queueList} />
          </Widget>
        </Grid> 
      </Grid>

      <ExitDialog open={open} handleClose={handleClose} handleConfirm={handleConfirm} />
      <Keyboard open={keyboard} handleClose={handleConfirmPin} />
      
      <Fab size="small" color="secondary" aria-label="edit" className={classes.fab} href="tel:555-555-555">
        <PhoneIcon />
      </Fab>

    </Layout>
  )
}

export default Dashboard
