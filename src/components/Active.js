import useTranslation from 'next-translate/useTranslation'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import Tooltip from 'src/components/Tooltip'

export default function Active ({ active = 0, aps }) {
  const { t } = useTranslation('common')

  return (
    <Tooltip
      title={t('header-alarms', { count: active })}
      aria-label='notification active'
    >
      <IconButton
        aria-label='notification active'
        size='small'
        href={`/${aps}/overview`}
        disabled={!active}
      >
        <Badge badgeContent={active} color='error'>
          <NotificationsActiveIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  )
}
