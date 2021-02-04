// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import { mainListItems } from 'src/components/drawerItems'
import { version } from 'package.json'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
}))

export default function AppDrawer ({
  mobileOpen,
  handleDrawerToggle,
  diag,
  user
}) {
  const classes = useStyles()

  const drawer = (
    <>
      {/* <div className={classes.toolbar} /> */}
      <Box
        className={classes.toolbar}
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Box p={1} flexGrow={1}>
          <Avatar
            alt='ParkBot'
            className={classes.avatar}
            src='/bot.svg'
            // src='https://avatars.dicebear.com/api/bottts/g.svg'
          />
        </Box>
        <Box p={1}>
          <Typography variant='caption' className={classes.title} noWrap>
            version {version}
          </Typography>
        </Box>
      </Box>
      <Divider />
      {mainListItems(diag, user)}
    </>
  )

  return (
    <nav className={classes.drawer} aria-label='mailbox folders'>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden mdUp implementation='css'>
        <Drawer
          // container={container}
          variant='temporary'
          anchor='left'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation='css'>
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant='permanent'
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}
