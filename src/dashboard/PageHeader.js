import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
// import { green, red } from '@material-ui/core/colors';
import useComm from 'src/hooks/useComm'

// import { useSnackbar } from 'notistack';
// import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  // bullet: {
  //   display: 'inline-block',
  //   margin: '0 2px',
  //   transform: 'scale(0.8)',
  // },
  online: {
    color: '#52c41a',
    background: '#f6ffed',
    border:' 1px solid #b7eb8f',
    borderRadius: '4px'
  },
  offline: {
    color: '#f5222d',
    background: '#fff1f0',
    border: '1px solid #ffa39e',
    borderRadius: '4px'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PageHeader ({ apsName, apsLocation, pageTitle, socket }) {
  const classes = useStyles();
  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // const bull = <span className={classes.bullet}>•</span>;

  const { comm } = useComm(socket)

  // enqueueSnackbar('mesg')

  return (
    <div className={classes.root}>
      <Box flexGrow={1}>
        <Typography variant="h6" gutterBottom>
          {apsName}
        </Typography>
        <div className={classes.sectionDesktop}>
        <Typography variant="subtitle1" gutterBottom>
          {pageTitle}
          {/* {bull} */}
          {/* <span dangerouslySetInnerHTML={{ __html: apsLocation }} /> */}
        </Typography>
        </div>
      </Box>
      <Chip label={comm.isOnline ? 'ONLINE' : 'OFFLINE'} className={clsx({
        [classes.online]: comm.isOnline,
        [classes.offline]: !comm.isOnline
      })} />
      {/* <Badge badgeContent={4} color="secondary">
        <DirectionsCarIcon />
      </Badge> */}
      {/* <Box>
        {comm.isOnline ? <Chip label='ONLINE' className={classes.online} /> :  <Chip label='OFFLINE' size="small" className={classes.offline} />}
      </Box> */}
    </div>
  )
}
