import React from 'react'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { orange } from '@mui/material/colors'
// material-ui icons
import AccountCircle from '@mui/icons-material/AccountCircle'
import Logout from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import SettingsIcon from '@mui/icons-material/Settings'
import useTranslation from 'next-translate/useTranslation'
import { NOTIFICATIONS, hasRole } from 'src/constants/auth'

const drawerWidth = 240

export default function NavBar (props) {
  const router = useRouter()
  const theme = useTheme()
  const { t } = useTranslation('common')

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = async () => {
    await global.fetch('/api/logout')
    window.localStorage.setItem('logout', Date.now())
    router.push('/')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: '#121212',
          width: '100%',
          [theme.breakpoints.up('lg')]: {
            width: `calc(100% - ${drawerWidth}px)`
          } // drawer responsive
        }}
        position='fixed'
        open={true}
      >
        <Container maxWidth='false'>
          <Toolbar disableGutters>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={props.handleDrawerToggle}
              sx={{ mr: 2, display: { lg: 'none' } }} // drawer responsive
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <span style={{ color: orange[500] }}>Parkbot</span>{' '}
              <span>App</span>
            </Typography>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <Badge badgeContent={2} color='error'>
                <AccountCircle />
              </Badge>
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              // anchorOrigin={{
              //   vertical: 'top',
              //   horizontal: 'right'
              // }}
              keepMounted
              // transformOrigin={{
              //   vertical: 'top',
              //   horizontal: 'right'
              // }}
              open={open}
              onClose={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  // width: 300,
                  maxWidth: '100%',
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0
                  }
                }
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem disabled>
                <Avatar /> {props.user.username}
              </MenuItem>
              <Divider />
              <MenuItem
                disabled={!hasRole(props.user, [NOTIFICATIONS])}
                onClick={() => router.push(`/${props.user.aps}/mailingList`)}
              >
                <ListItemIcon>
                  <NotificationsActiveIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText>{t('navbar-notifications')}</ListItemText>
                <Chip
                  label='Beta'
                  color='secondary'
                  size='small'
                  sx={{ ml: 1 }}
                />
              </MenuItem>
              <MenuItem
                // disabled
                onClick={() => router.push(`/${props.user.aps}/settings`)}
              >
                <ListItemIcon>
                  <SettingsIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText>{t('navbar-settings')}</ListItemText>
                <Chip
                  label='Beta'
                  color='secondary'
                  size='small'
                  sx={{ ml: 1 }}
                />
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize='small' />
                </ListItemIcon>
                <ListItemText>{t('navbar-logout')}</ListItemText>
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
