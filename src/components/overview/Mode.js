import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Tooltip from 'src/components/Tooltip'
import useTranslation from 'next-translate/useTranslation'

export default function Mode ({ mode = 0, step = 0 }) {
  const { t } = useTranslation('common')

  return (
    <Tooltip title={t(mode.key)}>
      <Badge badgeContent={step} color='primary'>
        <Avatar
          sx={{
            width: 24,
            height: 24,
            backgroundColor: mode.id === 8 ? '#108ee9' : '#ffff00',
            color: mode.id === 8 ? '#fff' : '#000'
          }}
          variant='rounded'
          aria-label='mode'
        >
          {mode.id === 8 ? 'A' : 'M'}
        </Avatar>
      </Badge>
    </Tooltip>
  )
}
