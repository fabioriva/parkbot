import { makeStyles, withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Badge from '@material-ui/core/Badge'
import Divider from '@material-ui/core/Divider'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import RssFeedIcon from '@material-ui/icons/RssFeed'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import { green, red } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  navBar: {
    marginBottom: theme.spacing(3)
  },
  title: {
    // fontSize: 16,
  },
  subtitle: {
    // fontSize: 14,
  },
  icon: {
    paddingRight: theme.spacing(1)
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

export default function AppHeader ({ aps, pageTitle, comm, diag }) {
  const classes = useStyles()

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
        <Box p={0} className={classes.icon}>
          {comm.isOnline ? (
            <Tooltip title='ONLINE' aria-label='online'>
              <StyledBadge variant='dot'>
                <RssFeedIcon />
              </StyledBadge>
            </Tooltip>
          ) : (
            <Tooltip title='OFFLINE' aria-label='offline'>
              <Badge variant='dot' classes={{ badge: classes.offline }}>
                <RssFeedIcon />
              </Badge>
            </Tooltip>
          )}
        </Box>
      </Box>
      <Divider className={classes.navBar} />
    </>
  )
}
