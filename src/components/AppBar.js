import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#24292e',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  title: {
    flexGrow: 1
  }
}))

export default function AppBar_ ({ position, handleDrawerToggle }) {
  const classes = useStyles()
  const router = useRouter()
  const { t } = useTranslation('common')

  const [anchorEl, setAnchorEl] = React.useState(null)

  const open = Boolean(anchorEl)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // const handleLocale = () => {
  //   setAnchorEl(null)
  // }

  const handleLogout = async () => {
    await global.fetch('/api/logout')
    window.localStorage.setItem('logout', Date.now())
    router.push('/')
  }

  return (
    <AppBar position={position} elevation={2} className={classes.appBar}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='menu'
          edge='start'
          className={classes.menuButton}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' className={classes.title} noWrap>
          <span style={{ color: orange[500] }}>ParkBot</span> <span>App</span>
        </Typography>
        <IconButton
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleMenu}
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id='menu-appbar'
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={open}
          onClose={handleClose}
        >
          {/* <MenuItem onClick={handleLocale}>{t('APPBAR_MENU_LOCALE')}</MenuItem> */}
          {/* <MenuItem onClick={handleClose}>{t('APPBAR_MENU_PROFILE')}</MenuItem> */}
          <MenuItem onClick={handleLogout}>{t('APPBAR_MENU_LOGOUT')}</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
