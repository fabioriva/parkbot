import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Layout from 'src/app/Responsive'

import Fab from '@material-ui/core/Fab'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import PhoneIcon from '@material-ui/icons/Phone';
import User from 'src/app/User'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}));

const App = ({ currentUser = {}, definitions, json }) => {
  const classes = useStyles();
  const {
    // activeTab,
    apsName,
    // apsLocation,
    // pageTitle,
    websockUrl
  } = definitions

  return (
    <Layout
      // activeTab={activeTab}
      apsName={apsName}
      // apsLocation={apsLocation}
      // pageTitle={pageTitle}
      socket={`${websockUrl}?channel=ch2`}
      user={currentUser}
    >
      <User user={currentUser} />
      <Fab size="small" color="secondary" aria-label="edit" href="tel:555-555-555" className={classes.fab} >
        <PhoneIcon />
      </Fab>
    </Layout>
  )
}

export default App
