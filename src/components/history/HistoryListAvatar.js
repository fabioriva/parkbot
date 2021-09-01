import Avatar from '@material-ui/core/Avatar'
// material-ui icons
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'

// const useStyles = makeStyles(theme => ({
//   root: {},
//   danger: {
//     background: '#f2dede',
//     color: '#a94442'
//   },
//   info: {
//     background: '#d9edf7',
//     color: '#31708f'
//   },
//   success: {
//     background: '#dff0d8',
//     color: '#3c763d'
//   },
//   warning: {
//     background: '#fcf8e3',
//     color: '#8a6d3b'
//   }
// }))

export default function HistoryListAvatar ({ id }) {
  switch (id) {
    case 1:
      return (
        <Avatar sx={{ bgcolor: '#d9edf7', color: '#31708f' }}>
          <DirectionsCarIcon />
        </Avatar>
      )
    default:
      return (
        <Avatar sx={{ bgcolor: '#d9edf7', color: '#31708f' }}>
          <DirectionsCarIcon />
        </Avatar>
      )
  }
}
