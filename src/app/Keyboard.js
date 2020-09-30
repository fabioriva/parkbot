import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/CardContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 245,
    marginTop: theme.spacing(3),
  },
  key: {
    height: 48,
    width: 48
  },
  keyNumber: {
    backgroundColor: blue[500],
    color: '#fff'
  },
  keyLetter: {
    backgroundColor: grey[500],
    color: '#000'
  }

}));

function GridItem ({ nr, type, set }) {
  const classes = useStyles();

  const updatePin = () => {
    set(prevState => prevState.concat(nr))
  }

  return (
    <Grid item xs={3}>
      <IconButton
        className={clsx({
          [classes.key]: true,
          [classes.keyNumber]: type === 'Number',
          [classes.keyLetter]: type === 'Letter',
        })}
        onClick={updatePin}
        // onClick={() => set(nr)}
      >
        {nr}
      </IconButton>
    </Grid>
  )
}

export default function Keyboard ({ open, handleClose }) { // , pin, setPin }) {
  const classes = useStyles();
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [pin, setPin] = React.useState('');

  if (pin.length >= 3) {
    handleClose(pin)
    setPin('')
  }

  return (
    <Dialog
      fullScreen={false}
      open={open}
      aria-labelledby="keyboard-dialog"
      className={classes.root}
      onClose={() => handleClose(pin)}
      onEnter={() => setPin('')}
    >
      <DialogTitle>
        Enter your PIN: {pin}
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={1} className={classes.root}>
          <GridItem nr={'1'} type='Number' set={setPin} />
          <GridItem nr={'2'} type='Number' set={setPin} />
          <GridItem nr={'3'} type='Number' set={setPin} />
          <GridItem nr={'C'} type='Letter' set={setPin} />
          <GridItem nr={'4'} type='Number' set={setPin} />
          <GridItem nr={'5'} type='Number' set={setPin} />
          <GridItem nr={'6'} type='Number' set={setPin} />
          <GridItem nr={'D'} type='Letter' set={setPin} />
          <GridItem nr={'7'} type='Number' set={setPin} />
          <GridItem nr={'8'} type='Number' set={setPin} />
          <GridItem nr={'9'} type='Number' set={setPin} />
          <GridItem nr={'E'} type='Letter' set={setPin} />
          <GridItem nr={'A'} type='Letter' set={setPin} />
          <GridItem nr={'0'} type='Number' set={setPin} />
          <GridItem nr={'B'} type='Letter' set={setPin} />
          <GridItem nr={'F'} type='Letter' set={setPin} />
        </Grid>
      </DialogContent>
    </Dialog>
  )
}
