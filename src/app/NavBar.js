import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Badge from '@material-ui/core/Badge'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import NotificationsIcon from '@material-ui/icons/Notifications';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  navBar: {
    // backgroundColor: '#ffff00',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));


export default function AppDrawer({ aps }) {
  const classes = useStyles()

  return (
    <Toolbar variant="dense" className={classes.navBar}>
      <Box p={0} flexGrow={1} bgcolor="grey.300">
        {/* <Typography variant="subtitle2" gutterBottom>{ aps }</Typography> */}
        {aps}
      </Box>
      <Box p={0} bgcolor="grey.400">
        {/* Item 2 */}
        <Badge badgeContent={4} color="secondary">
        <NotificationsIcon />
      </Badge>
      </Box>
      <Box p={0} bgcolor="grey.500">
        {/* Item 3 */}
        <Badge badgeContent={4} color="primary" variant="dot">
        <RssFeedIcon />
      </Badge>
      </Box>
      {/* <Badge badgeContent={4} color="secondary">
        <NotificationsIcon />
      </Badge>
      <Badge badgeContent={4} color="primary" variant="dot">
        <RssFeedIcon />
      </Badge> */}
  </Toolbar>
  )
}
