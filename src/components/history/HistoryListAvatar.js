import Avatar from '@mui/material/Avatar'
// material-ui icons
import AlarmOnIcon from '@mui/icons-material/AlarmOn'
import AlarmOffIcon from '@mui/icons-material/AlarmOff'
import BuildIcon from '@mui/icons-material/Build'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import LockIcon from '@mui/icons-material/Lock'
import FiberPinOutlinedIcon from '@mui/icons-material/FiberPinOutlined'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'

function iconAvatar (item) {
  switch (item.operation.id) {
    case 1:
      return {
        sx: {
          bgcolor: '#f2dede',
          color: '#a94442'
        },
        children: <AlarmOnIcon />
      }
    case 2:
      return {
        sx: {
          bgcolor: '#dff0d8',
          color: '#3c763d'
        },
        children: <AlarmOffIcon />
      }
    case 3:
      return {
        sx: {
          bgcolor: '#fcf8e3',
          color: '#8a6d3b'
        },
        children: <BuildIcon />
      }
    case 4:
      return {
        sx: {
          bgcolor: '#d9edf7',
          color: '#31708f'
        },
        children: <FiberPinOutlinedIcon />
      }
    case 5:
      return item.card === 999
        ? {
            sx: {
              bgcolor: '#fcf8e3',
              color: '#8a6d3b'
            },
            children: <LockIcon />
          }
        : {
            sx: {
              bgcolor: '#d9edf7',
              color: '#31708f'
            },
            children: <DirectionsCarIcon />
          }
    case 6:
      return {
        sx: {
          bgcolor: '#d9edf7',
          color: '#31708f'
        },
        children: <DirectionsCarIcon />
      }
    case 7:
    case 8:
      return {
        sx: {
          bgcolor: '#d9edf7',
          color: '#31708f'
        },
        children: <SwapHorizIcon />
      }
    default:
      return {}
  }
}

export default function HistoryListAvatar ({ item }) {
  return <Avatar {...iconAvatar(item)} />
}
