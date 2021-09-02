import React from 'react'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { orange } from '@mui/material/colors'
// material-ui icons
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import useTranslation from 'next-translate/useTranslation'

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
        <Container maxWidth='xl'>
          <Toolbar sx={{ p: 0 }} disableGutters>
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
              <span style={{ color: orange[500] }}>ParkBot</span>{' '}
              <span>App</span>
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
              <MenuItem onClick={handleLogout}>{t('navbar-logout')}</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
