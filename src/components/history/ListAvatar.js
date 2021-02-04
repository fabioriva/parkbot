import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import AlarmOnIcon from '@material-ui/icons/AlarmOn'
import AlarmOffIcon from '@material-ui/icons/AlarmOff'
import BuildIcon from '@material-ui/icons/Build'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import PaymentIcon from '@material-ui/icons/Payment'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'

const useStyles = makeStyles(() => ({
  root: {},
  danger: {
    background: '#f2dede',
    color: '#a94442'
  },
  info: {
    background: '#d9edf7',
    color: '#31708f'
  },
  success: {
    background: '#dff0d8',
    color: '#3c763d'
  },
  warning: {
    background: '#fcf8e3',
    color: '#8a6d3b'
  }
}))

export default function HistoryAvatar ({ id }) {
  const classes = useStyles()

  switch (id) {
    case 1:
      return (
        <Avatar className={classes.danger}>
          <AlarmOnIcon />
        </Avatar>
      )
    case 2:
      return (
        <Avatar className={classes.success}>
          <AlarmOffIcon />
        </Avatar>
      )
    case 3:
      return (
        <Avatar className={classes.warning}>
          <BuildIcon />
        </Avatar>
      )
    case 4:
      return (
        <Avatar className={classes.info}>
          <PaymentIcon />
        </Avatar>
      )
    case 5:
    case 6:
      return (
        <Avatar className={classes.info}>
          <DirectionsCarIcon />
        </Avatar>
      )
    case 7:
    case 8:
      return (
        <Avatar className={classes.info}>
          <SwapHorizIcon />
        </Avatar>
      )
    default:
      return <Avatar>{id}</Avatar>
  }
}
