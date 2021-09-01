// import { styled } from '@material-ui/styles'
import { withStyles } from '@material-ui/styles'
import Tooltip from '@material-ui/core/Tooltip'

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
