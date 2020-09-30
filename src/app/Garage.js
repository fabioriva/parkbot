import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import { blue, green, orange, red } from '@material-ui/core/colors';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Brightness1Rounded from '@material-ui/icons/Brightness1Rounded';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

import Stepper from 'src/app/Stepper'

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 360,
  },

  expand: {
    marginLeft: 'auto',
  },

  cardHeader: {
    backgroundColor: '#e0e0e0',
    // padding: '8px 16px'
  },
  cardHeaderTitle: {
    fontSize: '16px',
  },
  cardContent: {
    padding: theme.spacing(2),
  },

  aut: {
    backgroundColor: '#108ee9',
    color: '#fff',
    // width: theme.spacing(3),
    // height: theme.spacing(3),
  },
  man: {
    backgroundColor: '#ffff00',
    color: '#000',
    // width: theme.spacing(3),
    // height: theme.spacing(3),
  },

  lamp: {
    padding: '12px 0px',
  },
  alarmOn: {
    color: red[600],
  },
  alarmOff: {
    color: red[50],
  },
  centerOn: {
    color: orange[600],
  },
  centerOff: {
    color: orange[50],
  },
  readyOn: {
    color: green[600],
  },
  readyOff: {
    color: green[50],
  },

  stepper: {
    padding: '32px 8px',
    textAlign: 'center'
  },
  gridItem: {
    padding: theme.spacing(1),
    textAlign: 'center'
  },
  label: {
    fontSize: 14,
  },
  value: {
    color: 'rgb(54, 77, 121)', //blue[900],
    fontSize: 16,
    fontWeight: 'bold',
  },

  ce: {
    backgroundColor: theme.palette.ce, // '#d4edda',
  },
  cu: {
    backgroundColor: theme.palette.cu, // '#f8d7da',
  },
  pp: {
    backgroundColor: theme.palette.pp, // '#d1ecf1',
  },
  
  info: {
    margin: '8px 4px',
    color: theme.palette.secondary
  },

}));

const GridItem = ({ label, value }) => {
  const classes = useStyles();
  return (
    <Grid item xs={6} className={classes.gridItem}>
      <Typography className={classes.label} color="textSecondary" gutterBottom>
        {label}
      </Typography>
      <Typography className={classes.value} variant="h5" component="h2">
        {value}
      </Typography>
    </Grid>
  )
}

const Lamp = ({ on, off, status }) => {
  const classes = useStyles();
  return (
    <IconButton aria-label="settings" className={classes.lamp} disabled>
      <Brightness1Rounded className={clsx({
        [classes[on]]: status,
        [classes[off]]: !status,
      })} />
    </IconButton>
  )
}

export default function Garage({ garage }) {
  const classes = useStyles();

  const { id, name, card, mode, operation, size, step } = garage.a

  const autTag =
    <Badge badgeContent={step} color="secondary">
      <Avatar variant="rounded" aria-label="mode" className={classes.aut}>A</Avatar>
    </Badge>

  const manTag =
    <Badge badgeContent={step} color="secondary">
      <Avatar variant="rounded" aria-label="mode" className={classes.man}>M</Avatar>
    </Badge>

  const actions = garage.d.map((item, key) => {
    const { enable, label, write } = item
    return (
      <Button
        size="small"
        color="primary" 
        disabled={!enable.status}
        key={key}
        onClick={() => props.actions[key] !== undefined && props.actions[key](id, write)}
      >
        {label}
      </Button>
    )
  })

  const car = true
  const rollback = true
  const swap = true

  const garageView =
    <Grid container spacing={0}>
      <Grid item xs={12} className={classes.stepper}>
        <Stepper activeStep={step} />
      </Grid>
      {/* <GridItem label='Card' value={card} /> */}
      {/* <GridItem label='Size' value={size} /> */}
    </Grid>

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        avatar={mode.id === 8 ? autTag : manTag}
        action={[
          <Lamp key='0' status={garage.c[2].status} on='alarmOn' off='alarmOff' />,
          <Lamp key='1' status={garage.c[1].status} on='centerOn' off='centerOff' />,
          <Lamp key='2' status={garage.c[0].status} on='readyOn' off='readyOff' />
        ]}
        title={name}
        subheader={`Virtual Garage ${id}`}
        classes={{
          title: classes.cardHeaderTitle,
        }}
      />
      <CardContent className={clsx({
        [classes.cardContent]: true,
        [classes.ce]: operation === 1,
        [classes.cu]: operation === 2,
        [classes.pp]: operation === 3,
      })}>
        
        {garageView}

      </CardContent>
      <CardActions disableSpacing>
        {actions}
        <div className={classes.expand}>
          {swap && <SwapHorizIcon className={classes.info} aria-label="swap" />}
          {rollback && <SettingsBackupRestoreIcon className={classes.info} aria-label="rollback" />}
          {car && <DirectionsCarIcon className={classes.info} aria-label="car" />}
        </div>
      </CardActions>
    </Card>
  )
}
