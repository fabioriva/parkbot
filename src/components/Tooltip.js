import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: 'rgb(88,88,88)',
    color: '#fff',
    maxWidth: 240,
    fontSize: theme.typography.pxToRem(14)
  }
}))(Tooltip)

export default HtmlTooltip
