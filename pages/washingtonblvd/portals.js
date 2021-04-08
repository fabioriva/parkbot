import React from 'react'
import {
  APS_NAME,
  BACKEND_URL,
  WEBSOCK_URL
} from 'src/constants/washingtonblvd'
import fetchJson from 'src/lib/fetchJson'
import { useData } from 'src/lib/useWebSocket'
// import withAuthSync from 'src/hocs/withAuthSync'
import ParkBot from 'src/components/ParkBot'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing(2),
    height: '100vh'
  },
  headerTitle: {
    flexGrow: 1
  },
  paper: {
    minHeight: '640px'
  },
  boxTitle: {
    width: '100%',
    fontSize: 96,
    color: '#fff',
    fontWeight: 'bolder',
    textAlign: 'center'
  },
  boxOperation: {
    fontSize: 80,
    color: '#296ca8',
    fontWeight: 'bolder',
    width: '100%',
    textAlign: 'center'
  },
  boxCard1: {
    width: '100%',
    fontSize: 80,
    color: '#fff',
    fontWeight: 'bolder'
    // textAlign: 'center'
  },
  boxCard2: {
    width: '100%',
    fontSize: 80,
    color: '#fff',
    fontWeight: 'bolder',
    textAlign: 'center'
  }
}))

function Error () {
  return (
    <>
      <Header />
      <ParkBot message='Error' />
    </>
  )
}

function Header ({ aps }) {
  const classes = useStyles()
  return (
    <AppBar position='fixed' style={{ backgroundColor: '#074b83' }}>
      <Toolbar>
        <Typography variant='h6' className={classes.headerTitle}>
          APS Washington Blvd, 8888 {aps}
        </Typography>
        <Typography variant='h6'>⚡ VG Monitor</Typography>
      </Toolbar>
    </AppBar>
  )
}

function Portal ({ portal }) {
  const classes = useStyles()

  return (
    <Paper className={classes.paper} elevation={6}>
      <Box display='flex' alignItems='center' justifyContent='center'>
        <Box p={3} bgcolor='#296ca8' className={classes.boxTitle}>
          {portal.name}
        </Box>
      </Box>
      <Box>
        <Box p={6} bgcolor='#edf4fb' className={classes.boxOperation}>
          {operation(portal.operation)}
        </Box>
      </Box>
      {portal.operation >= 0 && (
        <>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <Box p={1} pl={3} bgcolor='#296ca8' className={classes.boxCard1}>
              {step(portal.step)}
            </Box>
            <Box p={1} bgcolor='#296ca8' className={classes.boxCard2}>
              {portal.cards[0]}
            </Box>
          </Box>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <Box p={1} pl={3} bgcolor='#85b7e2' className={classes.boxCard1}>
              Next
            </Box>
            <Box p={1} bgcolor='#85b7e2' className={classes.boxCard2}>
              {portal.cards[1]}
            </Box>
          </Box>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <Box p={1} pl={3} bgcolor='#296ca8' className={classes.boxCard1}>
              Next
            </Box>
            <Box p={1} bgcolor='#296ca8' className={classes.boxCard2}>
              {portal.cards[2]}
            </Box>
          </Box>
        </>
      )}
    </Paper>
  )
}

function operation (value) {
  switch (value) {
    case 1:
      return 'Entering'
    case 2:
      return 'Exiting'
    default:
      return 'Ready'
  }
}

function step (value) {
  switch (value) {
    case 1:
      return 'Coming'
    case 2:
      return 'Arrived'
    default:
      return '---'
  }
}

const Page = ({ definitions, json }) => {
  const classes = useStyles()
  if (json.monitor === undefined) return <Error />

  const { apsName, websockUrl } = definitions
  const { mesg } = useData('monitor', `${websockUrl}?channel=ch1`)
  const [data, setData] = React.useState(json.monitor)
  React.useEffect(() => {
    if (mesg) {
      setData(mesg)
    }
  }, [mesg])
  const { EVT1, EVT2, EVT3 } = data

  return (
    <div className={classes.root}>
      <Header />
      <Grid container alignItems='center' justify='center' spacing={3}>
        <Grid item xs>
          <Portal portal={EVT1} />
        </Grid>
        <Grid item xs>
          <Portal portal={EVT2} />
        </Grid>
        <Grid item xs>
          <Portal portal={EVT3} />
        </Grid>
      </Grid>
    </div>
  )
}

export async function getServerSideProps ({ params, req }) {
  const json = await fetchJson(`${BACKEND_URL}/monitor`)

  return {
    props: {
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL
      },
      json
    }
  }
}

export default Page // withAuthSync(Page)
