// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Badge from '@material-ui/core/Badge'
import Typography from '@material-ui/core/Typography';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { green, red } from '@material-ui/core/colors';
import useComm from 'src/hooks/useComm'

const useStyles = makeStyles((theme) => ({
  navBar: {
    marginBottom: theme.spacing(2),
  },
  icon: {
    paddingLeft: theme.spacing(1)
  },
  online: {
    background: green[500],
  },
  offline: {
    background: red[600],
  },
}));


export default function AppDrawer({ aps, socket }) {
  const classes = useStyles()

  const { comm } = useComm(socket)

  return (
    <Box display="flex" flexDirection="row" p={0} m={0} className={classes.navBar}>
      <Box p={0} flexGrow={1}>
        <Typography variant="subtitle2" gutterBottom>
          { aps }
        </Typography>
      </Box>
      <Box p={0} className={classes.icon}>
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </Box>
      <Box p={0} className={classes.icon}>
        <Badge badgeContent={4} variant="dot" classes={{ badge: comm.isOnline ? classes.online : classes.offline }}>
          <RssFeedIcon />
        </Badge>
      </Box>
    </Box>
  )
}