import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Occupancy () {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  return (
    <Paper className={fixedHeightPaper}>
      <Typography component="h2" variant="h5" color="primary" gutterBottom>
        Occupancy
      </Typography>
      {/*  */}

      <div className={classes.depositContext} style={{
          display: 'flex',
          alignItems: 'center'
      }}>
          <DirectionsCarIcon fontSize='large'/>
          <Typography component="p" variant="h4">99</Typography>
      </div> 

      {/* <Typography component="p" variant="h4">
        34
      </Typography> */}
      {/* <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography> */}

      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View map
        </Link>
      </div>
    </Paper>
  )
}
