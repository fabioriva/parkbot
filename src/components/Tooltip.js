// import { styled } from '@mui/material/styles'
import { withStyles } from '@mui/styles'
import Tooltip from '@mui/material/Tooltip'

const HtmlTooltip = withStyles({
  tooltip: {
    backgroundColor: 'rgb(88,88,88)',
    color: '#fff',
    maxWidth: 240,
    fontSize: 16
  }
})(Tooltip)

// const HtmlTooltip = styled(Tooltip)({
//   // tooltip: {
//   backgroundColor: 'rgb(88,88,88)',
//   color: '#fff',
//   maxWidth: 240,
//   fontSize: 16
//   // }
// })

export default HtmlTooltip
