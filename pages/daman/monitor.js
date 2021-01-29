import { useState, useEffect } from 'react'
import { useData } from 'src/lib/websocket'
import useSWR from 'swr'
import fetcher from 'src/lib/fetchJson'
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
      setMonitor(data.monitor)
    }
  }, [data, mesg])

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

      <Grid container spacing={1} justify='center' alignItems='center'>
        {/* Queue North */}
        <Grid item xs={1}>
          <Grid container spacing={1} justify='center' alignItems='center'>
            <Grid
              item
              xs={12}
              style={{ fontSize: '24px', textAlign: 'center' }}
            >
              North Side
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq01} />
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq02} />
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq03} />
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq04} />
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq05} />
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq06} />
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq07} />
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq08} />
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq09} />
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq10} />
            </Grid>
          </Grid>
        </Grid>
        {/*  */}
        <Grid item xs={10}>
          <Grid
            container
            className={classes.root}
            spacing={1}
            justify='center'
            alignItems='center'
          >
            {/* Exits */}
            <Grid item xs={1} />
            <Grid item xs={2}>
              <Exit nr={1} />
            </Grid>
            <Grid item xs={2}>
              <Exit nr={2} />
            </Grid>
            <Grid item xs={2}>
              <Exit nr={3} />
            </Grid>
            <Grid item xs={2}>
              <Exit nr={4} />
            </Grid>
            <Grid item xs={2}>
              <Exit nr={5} />
            </Grid>
            <Grid item xs={1} />
            {/* Tt */}
            <Grid item xs={1} />
            <Grid item xs={2}>
              <Tt nr={monitor.tt01} />
            </Grid>
            <Grid item xs={2}>
              <Tt nr={monitor.tt02} />
            </Grid>
            <Grid item xs={2}>
              <Tt nr={monitor.tt03} />
            </Grid>
            <Grid item xs={2}>
              <Tt nr={monitor.tt04} />
            </Grid>
            <Grid item xs={2}>
              <Tt nr={monitor.tt05} />
            </Grid>
            <Grid item xs={1} />
            {/* El */}
            <Grid item xs={1} />
            <Grid item xs={2}>
              <El nr={monitor.el01} />
            </Grid>
            <Grid item xs={2}>
              <El nr={monitor.el02} />
            </Grid>
            <Grid item xs={2}>
              <El nr={monitor.el03} />
            </Grid>
            <Grid item xs={2}>
              <El nr={monitor.el04} />
            </Grid>
            <Grid item xs={2}>
              <El nr={monitor.el05} />
            </Grid>
            <Grid item xs={1} />
            {/* Tt */}
            <Grid item xs={1} />
            <Grid item xs={2}>
              <Tt nr={monitor.tt06} />
            </Grid>
            <Grid item xs={2}>
              <Tt nr={monitor.tt07} />
            </Grid>
            <Grid item xs={2}>
              <Tt nr={monitor.tt08} />
            </Grid>
            <Grid item xs={2}>
              <Tt nr={monitor.tt09} />
            </Grid>
            <Grid item xs={2}>
              <Tt nr={monitor.tt10} />
            </Grid>
            <Grid item xs={1} />
            {/* El */}
            <Grid item xs={1} />
            <Grid item xs={2}>
              <El nr={monitor.el06} />
            </Grid>
            <Grid item xs={2}>
              <El nr={monitor.el07} />
            </Grid>
            <Grid item xs={2}>
              <El nr={monitor.el08} />
            </Grid>
            <Grid item xs={2}>
              <El nr={monitor.el09} />
            </Grid>
            <Grid item xs={2}>
              <El nr={monitor.el10} />
            </Grid>
            <Grid item xs={1} />
            {/* Exits */}
            <Grid item xs={1} />
            <Grid item xs={2}>
              <Exit nr={6} />
            </Grid>
            <Grid item xs={2}>
              <Exit nr={7} />
            </Grid>
            <Grid item xs={2}>
              <Exit nr={8} />
            </Grid>
            <Grid item xs={2}>
              <Exit nr={9} />
            </Grid>
            <Grid item xs={2}>
              <Exit nr={10} />
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Grid>
        {/* Queue South */}
        <Grid item xs={1}>
          <Grid container spacing={1} justify='center' alignItems='center'>
            <Grid
              item
              xs={12}
              style={{ fontSize: '24px', textAlign: 'center' }}
            >
              South Side
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq11} />
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq12} />
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq13} />
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq14} />
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq15} />
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq16} />
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq17} />
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq18} />
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq19} />
            </Grid>
            <Grid item xs={12}>
              <Queue nr={monitor.qq20} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
