import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import Tooltip from 'src/components/Tooltip'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'

const useStyles = makeStyles(() => ({
  aut: {
    backgroundColor: '#108ee9',
    color: '#fff'
  },
  man: {
    backgroundColor: '#ffff00',
    color: '#000'
  }
}))

export default function Mode ({ mode = 0, step = 0 }) {
  const classes = useStyles()
  const { t } = useTranslation('system')

  return (
    <Badge badgeContent={step} color='primary'>
      <Tooltip title={t(mode.label)}>
        <Avatar
          variant='rounded'
          aria-label='mode'
          className={clsx({
            [classes.aut]: mode.id === 8,
            [classes.man]: mode.id !== 8
          })}
        >
          {mode.id === 8 ? 'A' : 'M'}
        </Avatar>
      </Tooltip>
    </Badge>
  )
}
