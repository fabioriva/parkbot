import { styled } from '@mui/material/styles'
// import { withStyles } from '@mui/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'

// const HtmlTooltip = withStyles({
//   tooltip: {
//     backgroundColor: 'rgb(88,88,88)',
//     color: '#fff',
//     maxWidth: 240,
//     fontSize: 16
//   }
// })(Tooltip)

// const HtmlTooltip = styled(Tooltip)({
//   // tooltip: {
//   backgroundColor: 'rgb(88,88,88)',
//   color: '#fff',
//   maxWidth: 240,
//   fontSize: 16
//   // }
// })

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 14
  }
}))

export default HtmlTooltip
