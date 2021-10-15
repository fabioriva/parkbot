import Avatar from '@mui/material/Avatar'
// material-ui icons
import BuildIcon from '@mui/icons-material/Build'
import CheckIcon from '@mui/icons-material/Check'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import LockIcon from '@mui/icons-material/Lock'
import FiberPinOutlinedIcon from '@mui/icons-material/FiberPinOutlined'
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'

export default function HistoryListAvatar ({ item }) {
  switch (item.operation.id) {
    case 1:
      return (
        <Avatar sx={{ background: '#f2dede', color: '#a94442' }}>
          <PriorityHighRoundedIcon />
        </Avatar>
      )
    case 2:
      return (
        <Avatar sx={{ background: '#dff0d8', color: '#3c763d' }}>
          <CheckIcon />
        </Avatar>
      )
    case 3:
      return (
        <Avatar sx={{ background: '#fcf8e3', color: '#8a6d3b' }}>
          <BuildIcon />
        </Avatar>
      )
    case 4:
      return (
        <Avatar sx={{ background: '#d9edf7', color: '#31708f' }}>
          <FiberPinOutlinedIcon />
        </Avatar>
      )
    case 5:
    case 6:
      if (item.card === 999) {
        return (
          <Avatar sx={{ background: '#fcf8e3', color: '#8a6d3b' }}>
            <LockIcon />
          </Avatar>
        )
      }
      return (
        <Avatar sx={{ background: '#d9edf7', color: '#31708f' }}>
          <DirectionsCarIcon />
        </Avatar>
      )
    case 7:
    case 8:
      return (
        <Avatar sx={{ background: '#d9edf7', color: '#31708f' }}>
          <SwapHorizIcon />
        </Avatar>
      )
    default:
      return <Avatar>{item.operation.id}</Avatar>
  }
}
