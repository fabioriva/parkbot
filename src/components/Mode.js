import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Tooltip from 'src/components/Tooltip'

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

  return (
    <Badge badgeContent={step} color='secondary'>
      <Tooltip title={mode.label}>
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
