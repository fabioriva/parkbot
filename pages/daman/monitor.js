import React from 'react'
import { APS_NAME, BACKEND_URL, WEBSOCK_URL } from 'src/constants/daman'
import fetchJson from 'src/lib/fetchJson'
import { useData } from 'src/lib/websocket'
// import withAuthSync from 'src/hocs/withAuthSync'
import ParkBot from 'src/components/ParkBot'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
// import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Paper from '@material-ui/core/Paper'
// import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing(2),
    height: '100vh'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  headerTitle: {
    flexGrow: 1
  },
  itemLabel: {
    backgroundColor: '#0a69b7 ',
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold'
  },
  itemValue: {
    color: '#074b83',
    fontSize: 64,
    fontWeight: 'bold'
  },
  queueTitle: {
    textAlign: 'center'
  },
  queueValue: {
    color: '#074b83',
    fontSize: 32,
    fontWeight: 'bold',
    padding: theme.spacing(0),
    textAlign: 'center',
    width: '100%'
  }
}))

function Header ({ aps }) {
  const classes = useStyles()
  return (
    <AppBar position='fixed' style={{ backgroundColor: '#074b83' }}>
      <Toolbar>
        <Typography variant='h6' className={classes.headerTitle}>
          Daman AVS {aps}
        </Typography>
        <Typography variant='h6'>⚡ Exit Queue Monitor</Typography>
      </Toolbar>
    </AppBar>
  )
}

function Queue ({ data, label }) {
  const classes = useStyles()
  return (
    <>
      <Typography variant='h6' className={classes.queueTitle}>
        {label}
      </Typography>
      <List dense>
        {data.map((item, key) => (
          <ListItem key={key}>
            <Paper className={classes.queueValue}>{item}</Paper>
            {/* <ListItemAvatar>
              <Avatar>{key + 1}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`Card ${item}`}
              // secondary={`${key + 1}° call`}
              // style={{ textAlign: 'center' }}
            /> */}
          </ListItem>
        ))}
      </List>
    </>
  )
}

function Item ({ label, value }) {
  const classes = useStyles()
  return (
    <>
      <Typography className={classes.itemLabel} variant='h6'>
        {label}
      </Typography>
      <Typography className={classes.itemValue} variant='body2'>
        {value}
      </Typography>
    </>
  )
}

function Row ({
  data: { d01, d02, d03, d04, d05 },
  labels: { l01, l02, l03, l04, l05 }
}) {
  const classes = useStyles()
  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <Paper className={classes.paper} elevation={3}>
          <Item label={l01} value={d01} />
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper className={classes.paper} elevation={3}>
          <Item label={l02} value={d02} />
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper className={classes.paper} elevation={3}>
          <Item label={l03} value={d03} />
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper className={classes.paper} elevation={3}>
          <Item label={l04} value={d04} />
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper className={classes.paper} elevation={3}>
          <Item label={l05} value={d05} />
        </Paper>
      </Grid>
    </Grid>
  )
}

function Error () {
  return (
    <>
      <Header />
      <ParkBot message='Error' />
    </>
  )
}

const Page = ({ definitions, json }) => {
  const classes = useStyles()
  if (json.monitor === undefined) return <Error />

  const { apsName, websockUrl } = definitions
  const { mesg } = useData('overview', `${websockUrl}?channel=ch1`)
  const [data, setData] = React.useState(json.monitor)
  React.useEffect(() => {
    if (mesg) {
      setData(mesg)
    }
  }, [mesg])
  const { north, south } = data
  return (
    <div className={classes.root}>
      <Header />
      <Grid container alignItems='center' justify='center' spacing={3}>
        <Grid item xs>
          <Queue
            data={[
              north.qq01,
              north.qq02,
              north.qq03,
              north.qq04,
              north.qq05,
              north.qq06,
              north.qq07,
              north.qq08,
              north.qq09,
              north.qq10
            ]}
            label='NORTH QUEUE'
          />
        </Grid>
        <Grid item xs={9}>
          <Row
            data={{
              d01: north.el01,
              d02: north.el02,
              d03: north.el03,
              d04: north.el04,
              d05: north.el05
            }}
            labels={{
              l01: 'EL01',
              l02: 'EL02',
              l03: 'EL03',
              l04: 'EL04',
              l05: 'EL05'
            }}
          />
          <Row
            data={{
              d01: north.tt01,
              d02: north.tt02,
              d03: north.tt03,
              d04: north.tt04,
              d05: north.tt05
            }}
            labels={{
              l01: 'TT01',
              l02: 'TT02',
              l03: 'TT03',
              l04: 'TT04',
              l05: 'TT05'
            }}
          />
          <div style={{ height: 100 }} />
          <Row
            data={{
              d01: south.el01,
              d02: south.el02,
              d03: south.el03,
              d04: south.el04,
              d05: south.el05
            }}
            labels={{
              l01: 'EL06',
              l02: 'EL07',
              l03: 'EL08',
              l04: 'EL09',
              l05: 'EL10'
            }}
          />
          <Row
            data={{
              d01: south.tt01,
              d02: south.tt02,
              d03: south.tt03,
              d04: south.tt04,
              d05: south.tt05
            }}
            labels={{
              l01: 'TT06',
              l02: 'TT07',
              l03: 'TT08',
              l04: 'TT09',
              l05: 'TT10'
            }}
          />
        </Grid>
        <Grid item xs>
          <Queue
            data={[
              south.qq01,
              south.qq02,
              south.qq03,
              south.qq04,
              south.qq05,
              south.qq06,
              south.qq07,
              south.qq08,
              south.qq09,
              south.qq10
            ]}
            label='SOUTH QUEUE'
          />
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
