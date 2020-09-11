import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
// import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import { blue, green, orange, red } from '@material-ui/core/colors';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Brightness1Rounded from '@material-ui/icons/Brightness1Rounded';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

import Silomat from 'src/components/Silomat'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  // media: {
  //   height: 0,
  //   paddingTop: '56.25%', // 16:9
  // },
  expand: {
    // transform: 'rotate(0deg)',
    marginLeft: 'auto',
    // transition: theme.transitions.create('transform', {
    //   duration: theme.transitions.duration.shortest,
    // }),
  },
  // expandOpen: {
  //   transform: 'rotate(180deg)',
  // },

  cardHeader: {
    backgroundColor: '#e0e0e0',
    padding: '8px 16px'
  },
  cardHeadertitle: {
    // color: '#000',
    fontSize: '16px',
    // fontWeight: 'bolder',
  },

  man: {
    backgroundColor: '#ffff00',
    color: '#000',
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  aut: {
    backgroundColor: '#108ee9',
    width: theme.spacing(3),
    height: theme.spacing(3),
  },

  cardContent: {
    padding: theme.spacing(1),
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
    margin: '6px 3px',
    color: theme.palette.secondary
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

  gridItem: {
    padding: '2px',
  },
  label: {
    fontSize: 14,
    textAlign: 'center'
  },
  value: {
    color: 'rgb(54, 77, 121)', //blue[900],
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }

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

export default function Device({ device }) {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const { id, name, card, mode, motor, operation, size, stall, step } = device.a

  const autTag =
    <Badge badgeContent={step} color="secondary">
      <Avatar variant="rounded" aria-label="mode" className={classes.aut}>A</Avatar>
    </Badge>

  const manTag =
    <Badge badgeContent={step} color="secondary">
      <Avatar variant="rounded" aria-label="mode" className={classes.man}>M</Avatar>
    </Badge>

  const pos = device.b.map((item, key) => {
    const value = <span>{item.position}{' » '}{item.destination}</span>
    return(
      <GridItem label={item.name} value={value} key={key} />
    )
  })

  const actions = device.d.map((item, key) => {
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
  const swap = false

  const deviceView =
    <Grid container spacing={0}>
      <GridItem label='Mode' value={mode.label} />
      <GridItem label='Card' value={card} />
      <GridItem label='Size' value={size} />
      <GridItem label='Destination' value={stall} />
      {pos}
    </Grid>

  const silomatView = <Silomat data={device.e} />

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        avatar={mode.id === 8 ? autTag : manTag}
        action={[
          <Lamp key='0' status={device.c[2].status} on='alarmOn' off='alarmOff' />,
          <Lamp key='1' status={device.c[1].status} on='centerOn' off='centerOff' />,
          <Lamp key='2' status={device.c[0].status} on='readyOn' off='readyOff' />
        ]}
        title={name}
        // subheader="September 14, 2016"
        classes={{
          title: classes.cardHeadertitle,
        }}
      />
      <CardContent className={clsx({
        [classes.cardContent]: true,
        [classes.ce]: operation === 1,
        [classes.cu]: operation === 2,
        [classes.pp]: operation === 3,
      })}>
        
        {motor !== 1 ? deviceView : silomatView}

      </CardContent>
      <CardActions disableSpacing>
        {actions}
        <div className={classes.expand}>
          {swap && <SwapHorizIcon className={classes.info} aria-label="swap" />}
          {rollback && <SettingsBackupRestoreIcon className={classes.info} aria-label="rollback" />}
          {car && <DirectionsCarIcon className={classes.info} aria-label="car" />}
        </div>
        {/*
        <IconButton aria-label="ready">
          <DirectionsCarIcon />
        </IconButton>
        <IconButton aria-label="center">
          <SettingsBackupRestoreIcon />
        </IconButton>
        <IconButton aria-label="center" disabled>
          <SwapHorizIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container spacing={0}>
            {pos}
          </Grid>
        </CardContent>
      </Collapse> */}
    </Card>

  )
}
