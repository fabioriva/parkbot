import { useState, useEffect } from 'react'
import { useData } from 'src/lib/websocket'
import useSWR from 'swr'
import fetchJson from 'src/lib/fetcher'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import DriveEtaIcon from '@material-ui/icons/DriveEta'

const fetcher = url => window.fetch(url).then(res => res.json())

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flexGrow: 1,
    color: '#0000ff'
  },
  root: {
    flexGrow: 1,
    height: `calc(100vh - ${64}px)`
  },
  itemExit: {
    color: '#696969',
    fontSize: 72,
    // fontWeight: 'bold',
    padding: 8,
    textAlign: 'center'
  },
  itemEl: {
    backgroundColor: '#1e90ff',
    color: '#fff',
    fontSize: 96,
    fontWeight: 'bold',
    padding: 4,
    textAlign: 'center'
  },
  itemTt: {
    backgroundColor: '#228b22',
    color: '#fff',
    fontSize: 96,
    fontWeight: 'bold',
    padding: 4,
    textAlign: 'center'
  },
  blink: {
    animation: '$blink-animation 1s steps(5, start) infinite',
    WebkitAnimation: '$blink-animation 1s steps(5, start) infinite'
  },
  '@keyframes blink-animation': {
    to: {
      visibility: 'hidden'
    }
  },
  itemQueue: {
    color: '#696969',
    fontSize: 48,
    // fontWeight: 'bold',
    padding: 3,
    textAlign: 'center'
  }
}))

function Exit (props) {
  const classes = useStyles()
  return (
    <Paper className={classes.itemExit} variant='outlined' square>
      Exit {props.nr}
    </Paper>
  )
}

function El (props) {
  const classes = useStyles()
  return (
    <Paper className={classes.itemEl} elevation={1}>
      {props.nr > 0 ? props.nr : <span style={{ color: '#1e90ff' }}>-</span>}
    </Paper>
  )
}

function Tt (props) {
  const classes = useStyles()
  return (
    <Paper className={classes.itemTt} elevation={1}>
      {props.nr > 0 ? (
        <span className={classes.blink}>
          {/* <Typography>
            <DriveEtaIcon />
          </Typography> */}
          {/* <Typography>{props.nr}</Typography> */}
          {props.nr}
        </span>
      ) : (
        <span style={{ color: '#228b22' }}>-</span>
      )}
    </Paper>
  )
}

function Queue (props) {
  const classes = useStyles()
  return (
    <Paper className={classes.itemQueue} elevation={1}>
      {props.nr > 0 ? props.nr : <span style={{ color: '#fff' }}>-</span>}
    </Paper>
  )
}

const Page = props => {
  const classes = useStyles()

  const [monitor, setMonitor] = useState(props.json)

  const { mesg } = useData(
    'monitor',
    `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/daman?channel=ch1`
  )

  const { data, error } = useSWR(props.url, fetcher, {
    initialData: props.json,
    refreshInterval: 1000
  })
  if (error) return 'An error has occurred.'
  if (!data) return 'Loading...'

  useEffect(() => {
    if (mesg) {
      setMonitor(mesg)
    }
    if (data) {
      console.log('useEffect:', data)
      setMonitor(data.monitor)
    }
  }, [data, mesg])

  console.log(monitor)

  return (
    <Container maxWidth='xl'>
      {/* <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Toolbar className={classes.toolbar}>
            <Typography
              component='h1'
              variant='h4'
              color='inherit'
              noWrap
              className={classes.toolbarTitle}
            >
              Daman Building
            </Typography>
            <Typography component='h1' variant='h4'>
              AVS Exit Monitoring System
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item xs={1} />
      </Grid> */}

      <Toolbar className={classes.toolbar}>
        <Typography
          component='h1'
          variant='h4'
          color='inherit'
          noWrap
          className={classes.toolbarTitle}
        >
          Daman Building
        </Typography>
        <Typography component='h1' variant='h4'>
          AVS Exit Monitoring System
        </Typography>
      </Toolbar>

      {props.url}
    </Container>
  )
}

export async function getStaticProps () {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/daman/monitor`
  const json = await fetchJson(url)
  return {
    props: {
      url,
      json
    }
  }
}

export default Page
