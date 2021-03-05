import IconButton from '@material-ui/core/IconButton'
import Brightness1Rounded from '@material-ui/icons/Brightness1Rounded'
import { green, orange, red } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Tooltip from 'src/components/Tooltip'

const useStyles = makeStyles(() => ({
  lamp: {
    padding: '8px 0px'
  },
  alarmOn: {
    color: red[600]
  },
  alarmOff: {
    color: red[50]
  },
  centerOn: {
    color: orange[600]
  },
  centerOff: {
    color: orange[50]
  },
  readyOn: {
    color: green[600]
  },
  readyOff: {
    color: green[50]
  }
}))

export default function Lamp ({ item, off, on }) {
  const classes = useStyles()

  return (
    <Tooltip title={item.info !== undefined ? item.info : ''}>
      <IconButton aria-label='settings' className={classes.lamp} disabled>
        <Brightness1Rounded
          className={clsx({
            [classes[on]]: item.status,
            [classes[off]]: !item.status
          })}
        />
      </IconButton>
    </Tooltip>
  )
}
