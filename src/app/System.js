import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Layout from 'src/app/Layout'
import Widget from 'src/app/Widget'

import Garage from 'src/app/Garage'
import Queue from 'src/components/Queue'

import { hasRole, isAllowed } from 'src/lib/auth'
import { DASHBOARD, ACTIONS } from 'src/constants/roles'

import useWebSocket from 'src/hooks/useWebsocket'

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  tabs: {
    marginBottom: 16
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

const System = ({ currentUser = {}, definitions, json }) => {
  const classes = useStyles();

  const {
    // activeTab,
    apsName,
    // apsLocation,
    pageTitle,
    websockUrl
  } = definitions

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!hasRole(currentUser, [DASHBOARD])) return <Error statusCode={403} />

  if (json.err) return <Error statusCode={500} />

  const [overview, setOverview] = useState(json)

  const { mesg, send } = useWebSocket('overview', `${websockUrl}?channel=ch1`)

  useEffect(() => {
    // if (!diagnosticIsActive && mesg) {
    if (mesg) {
      setOverview(mesg)
    }
  })

  const garages = overview.garages.map((item, key) =>
    <Garage
      garage={item}
      // actions={[modalOpen, handleRollback]}
      key={key}
    />
  )

  return (
    <Layout
      // activeTab={activeTab}
      apsName={apsName}
      // apsLocation={apsLocation}
      pageTitle={pageTitle}
      socket={`${websockUrl}?channel=ch2`}
      user={currentUser}
    >

      <Grid container alignItems="flex-end" spacing={3}>
        <Grid item xs={12} md={8}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            className={classes.tabs}
          >
            {
            overview.garages.map((item, key) => <Tab key={key} label={`Portal ${item.a.id}`} />)
            }
          </Tabs>
          {
          garages.map((item, key) => <TabPanel key={key} value={value} index={key}>{item}</TabPanel>)
          }
        </Grid>
        <Grid item xs={12} md={4}>
          <Widget title='Exit queue' actions={false}>
            <Queue queueList={overview.exitQueue.queueList} />
          </Widget>
        </Grid> 
      </Grid>

      {/* <Grid
        container
        // direction="column"
        // justify="center"
        // alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} md={4}>
          {garages[0]}
        </Grid>
        <Grid item xs={12} md={4}>
          {garages[1]}
        </Grid> 
        <Grid item xs={12} md={4}>
          {garages[2]}
        </Grid> 
        <Grid item xs={12} md={4}>
          <Widget title='Exit queue' actions={false}>
            <Queue queueList={overview.exitQueue.queueList} />
          </Widget>
        </Grid> 
      </Grid> */}

    </Layout>
  )
}

export default System