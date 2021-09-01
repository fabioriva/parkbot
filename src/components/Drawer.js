import Link from 'next/link'
import packageInfo from 'package.json'
import useTranslation from 'next-translate/useTranslation'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// icons
import BarChartIcon from '@material-ui/icons/BarChart'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import DashboardIcon from '@material-ui/icons/Dashboard'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import HistoryIcon from '@material-ui/icons/History'
import ViewComfyIcon from '@material-ui/icons/ViewComfy'
import VisibilityIcon from '@material-ui/icons/Visibility'

const drawerWidth = 240

export default function AppDrawer (props) {
  const { t } = useTranslation('common')

  const { aps, locale } = props

  const items = (
    <List>
      <Link href={`/${aps}/dashboard`} locale={locale}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={t('drawer-dashboard')} />
        </ListItem>
      </Link>
      <Link href={`/${aps}/overview`} locale={locale}>
        <ListItem button>
          <ListItemIcon>
            <VisibilityIcon />
          </ListItemIcon>
          <ListItemText primary={t('drawer-overview')} />
        </ListItem>
      </Link>
      <Link href={`/${aps}/map`} locale={locale}>
        <ListItem button>
          <ListItemIcon>
            <DirectionsCarIcon />
          </ListItemIcon>
          <ListItemText primary={t('drawer-map')} />
        </ListItem>
      </Link>
      <Link href={`/${aps}/cards`} locale={locale}>
        <ListItem button>
          <ListItemIcon>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText primary={t('drawer-cards')} />
        </ListItem>
      </Link>
      <Link href={`/${aps}/racks`} locale={locale}>
        <ListItem button>
          <ListItemIcon>
            <ViewComfyIcon />
          </ListItemIcon>
          <ListItemText primary={t('drawer-racks')} />
        </ListItem>
      </Link>
      <Link href={`/${aps}/history`} locale={locale}>
        <ListItem button>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary={t('drawer-history')} />
        </ListItem>
      </Link>
      <Link href={`/${aps}/statistics`} locale={locale}>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary={t('drawer-statistics')} />
        </ListItem>
      </Link>
    </List>
  )

  const drawer = (
    <div>
      <Toolbar disableGutters={true}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <Box sx={{ flexGrow: 1, px: 1 }}>
            <Avatar
              alt='ParkBot'
              src='/bot.svg'
              // src='https://avatars.dicebear.com/api/bottts/bottts.svg'
            />
          </Box>
          <Box sx={{ px: 3 }}>
            <Typography variant='caption' noWrap>
              version {packageInfo.version}
            </Typography>
          </Box>
        </Box>
      </Toolbar>
      <Divider />
      {items}
    </div>
  )

  const container =
    typeof window === 'undefined' ? () => window().document.body : undefined

  return (
    <Box
      component='nav'
      sx={{ width: { lg: drawerWidth }, flexShrink: { sm: 0 } }} // drawer responsive
      aria-label='folders'
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant='temporary'
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', lg: 'none' }, // drawer responsive
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', lg: 'block' }, // drawer responsive
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}
