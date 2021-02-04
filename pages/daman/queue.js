import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
// import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
// import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import DriveEtaIcon from '@material-ui/icons/DriveEta'

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: 16
  },
  toolbarTitle: {
    flexGrow: 1,
    color: '#0000ff'
  },
  root: {
    flexGrow: 1,
    height: `calc(100vh - ${80}px)`
  },

  card: {
    height: '100%'
  },
  cardContent: {
    textAlign: 'center'
  },
  cardTitle: {
    fontSize: 36,
    fontWeight: 'normal'
  },

  tag: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#00008b'
  },
  tagIcon: {
    fontSize: 44
  }
}))

function Tag ({ nr }) {
  const classes = useStyles()
  return (
    <div style={{ width: '100%' }}>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        p={1}
        bgcolor='background.paper'
      >
        <Box p={1}>
          <DriveEtaIcon className={classes.tagIcon} />
        </Box>
        <Box p={1}>
          <span className={classes.tag}>{nr}</span>
        </Box>
      </Box>
    </div>
  )
}

function El ({ name, type, card }) {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant='h5' component='h1' className={classes.cardTitle}>
          {name}
        </Typography>
        {/* <Typography color='textSecondary' gutterBottom>
          {type}
        </Typography> */}
        {card > 0 && <Tag nr={card} />}
        {/* {card > 0 && (
          <>
            <Typography variant='body2' component='p'>
              <DriveEtaIcon className={classes.car} />
            </Typography>
            <Typography variant='h5' component='h1'>
              <span className={classes.value}>{card}</span>
            </Typography>
          </>
        )} */}
      </CardContent>
    </Card>
  )
}

const Page = props => {
  const classes = useStyles()

  return (
    <Container maxWidth='xl'>
      <Toolbar className={classes.toolbar}>
        <Typography
          component='h1'
          variant='h4'
          color='inherit'
          // align='center'
          noWrap
          className={classes.toolbarTitle}
        >
          Daman Building
        </Typography>
        <Typography variant='h4' component='h1'>
          AVS Exit Monitoring System
        </Typography>
      </Toolbar>
      <Grid
        container
        className={classes.root}
        spacing={1}
        justify='center'
        alignItems='stretch'
      >
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>North Side</Paper>
        </Grid> */}

        <Grid item xs={1} />
        <Grid item xs={2}>
          <El name='Exit 1' type='Turntable' card={1} />
        </Grid>
        <Grid item xs={2}>
          <El name='Exit 2' type='Turntable' card={0} />
        </Grid>
        <Grid item xs={2}>
          <El name='Exit 3' type='Turntable' card={333} />
        </Grid>
        <Grid item xs={2}>
          <El name='Exit 4' type='Turntable' card={15} />
        </Grid>
        <Grid item xs={2}>
          <El name='Exit5' type='Turntable' card={0} />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={2}>
          <El name='EL1' type='Elevator' card={0} />
        </Grid>
        <Grid item xs={2}>
          <El name='EL2' type='Elevator' card={0} />
        </Grid>
        <Grid item xs={2}>
          <El name='EL3' type='Elevator' card={0} />
        </Grid>
        <Grid item xs={2}>
          <El name='EL4' type='Elevator' card={77} />
        </Grid>
        <Grid item xs={2}>
          <El name='EL5' type='Elevator' card={244} />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={12} />

        <Grid item xs={1} />
        <Grid item xs={2}>
          <El name='EL6' type='Elevator' card={0} />
        </Grid>
        <Grid item xs={2}>
          <El name='EL7' type='Elevator' card={3} />
        </Grid>
        <Grid item xs={2}>
          <El name='EL8' type='Elevator' card={4} />
        </Grid>
        <Grid item xs={2}>
          <El name='EL9' type='Elevator' card={0} />
        </Grid>
        <Grid item xs={2}>
          <El name='EL10' type='Elevator' card={0} />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={2}>
          <El name='Exit 6' type='Turntable' card={87} />
        </Grid>
        <Grid item xs={2}>
          <El name='Exit 7' type='Turntable' card={100} />
        </Grid>
        <Grid item xs={2}>
          <El name='Exit 8' type='Turntable' card={9} />
        </Grid>
        <Grid item xs={2}>
          <El name='Exit 9' type='Turntable' card={55} />
        </Grid>
        <Grid item xs={2}>
          <El name='Exit 10' type='Turntable' card={44} />
        </Grid>
        <Grid item xs={1} />

        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>South Side</Paper>
        </Grid> */}
      </Grid>
    </Container>
  )
}

export default Page
