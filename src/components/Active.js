// import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import Tooltip from 'src/components/Tooltip'

export default function Active ({ active = 0, href }) {
  const { t } = useTranslation('common')

  return (
    <Tooltip
      title={t('header-alarms', { count: active })}
      aria-label='notification active'
    >
      {/* <Link href={href} locale={locale}> */}
      <IconButton
        aria-label='notification active'
        size='small'
        href={href}
        disabled={!active}
      >
        <Badge badgeContent={active} color='error'>
          <NotificationsActiveIcon />
        </Badge>
      </IconButton>
      {/* </Link> */}
    </Tooltip>
  )
}
