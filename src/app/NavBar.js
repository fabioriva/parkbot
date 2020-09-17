import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box'

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


export default function AppDrawer() {
  const classes = useStyles()

  return (
    <Toolbar variant="dense" className={classes.navBar}>
      <Box p={0} flexGrow={1} bgcolor="grey.300">
        Item 1
      </Box>
      <Box p={0} bgcolor="grey.400">
        Item 2
      </Box>
      <Box p={0} bgcolor="grey.500">
        Item 3
      </Box>
  </Toolbar>
  )
}
