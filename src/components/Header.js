import { useTheme } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Badge from '@material-ui/core/Badge'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
// icons
import RouterIcon from '@material-ui/icons/Router'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import Active from 'src/components/Active'
import Tooltip from 'src/components/Tooltip'
import useTranslation from 'next-translate/useTranslation'

const StyledBadge = withStyles({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
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
})(Badge)

export default function AppHeader ({
  aps,
  apsName,
  pageTitle,
  comm,
  diag,
  map
}) {
  const theme = useTheme()
  const { t } = useTranslation('common')

  const online = (
    <StyledBadge variant='dot'>
      <Tooltip title='ONLINE' aria-label='online'>
        <RouterIcon />
      </Tooltip>
    </StyledBadge>
  )

  const offline = (
    <Badge variant='dot' color='error'>
      <Tooltip title='OFFLINE' aria-label='offline'>
        <RouterIcon />
      </Tooltip>
    </Badge>
  )

  return (
    <>
      <Box display='flex' flexDirection='row' alignItems='center' p={0} mt={2}>
        <Box p={0} flexGrow={1}>
          <Box p={0}>
            <Typography variant='h6'>{pageTitle}</Typography>
            <Typography
              variant='subtitle1'
              color='textSecondary'
              sx={{
                [theme.breakpoints.down('sm')]: {
                  fontSize: 12
                }
              }}
            >
              {apsName}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ '& button': { m: 0 } }}>
          {diag > 0 && <Active active={diag} aps={aps} />}
          <Tooltip
            title={t('header-cars', { count: map[0]?.value || 0 })}
            aria-label='occupancy'
          >
            <IconButton
              aria-label='occupancy'
              size='small'
              href={`/${aps}/map`}
            >
              <Badge badgeContent={map[0]?.value} color='primary' showZero>
                <DirectionsCarIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          {comm ? online : offline}
        </Box>
      </Box>
      <Divider sx={{ mb: 2 }} />
    </>
  )
}
