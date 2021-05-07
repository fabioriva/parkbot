import { makeStyles, withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Badge from '@material-ui/core/Badge'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import RssFeedIcon from '@material-ui/icons/RssFeed'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import { green, red } from '@material-ui/core/colors'
import Tooltip from 'src/components/Tooltip'

const useStyles = makeStyles(theme => ({
  navBar: {
    marginBottom: theme.spacing(3)
  },
  title: {
    // fontSize: 16
  },
  subtitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 12
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 16
    }
  },
  icon: {
    [theme.breakpoints.down('xs')]: {
      paddingRight: theme.spacing(1)
    },
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(2)
    }
  },
  online: {
    background: green[500]
  },
  offline: {
    background: red[500]
  }
}))

const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
}))(Badge)

export default function AppHeader ({ aps, pageTitle, comm, diag, map }) {
  const classes = useStyles()

  const online = (
    <Tooltip title='ONLINE' aria-label='online'>
      <StyledBadge variant='dot'>
        <RssFeedIcon />
      </StyledBadge>
    </Tooltip>
  )

  const offline = (
    <Tooltip title='OFFLINE' aria-label='offline'>
      <Badge variant='dot' classes={{ badge: classes.offline }}>
        <RssFeedIcon />
      </Badge>
    </Tooltip>
  )

  return (
    <>
      <Box display='flex' flexDirection='row' alignItems='center' p={0} mt={1}>
        <Box p={0} flexGrow={1}>
          <Box p={0}>
            <Typography className={classes.title} variant='h6'>
              {pageTitle}
            </Typography>
            <Typography
              className={classes.subtitle}
              variant='subtitle1'
              color='textSecondary'
            >
              {aps}
            </Typography>
          </Box>
        </Box>
        {diag.isActive && (
          <Box p={0} className={classes.icon}>
            <Badge badgeContent={diag.count} color='secondary'>
              <NotificationsActiveIcon />
            </Badge>
          </Box>
        )}
        {map[1]?.value !== undefined && (
          <Box p={0} className={classes.icon}>
            <Badge badgeContent={map[1]?.value} color='primary' showZero>
              <DirectionsCarIcon />
            </Badge>
          </Box>
        )}

        <Box p={0} className={classes.icon}>
          {comm ? online : offline}
        </Box>
      </Box>
      <Divider className={classes.navBar} />
    </>
  )
}
