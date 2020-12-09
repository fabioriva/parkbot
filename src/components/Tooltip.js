import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    // backgroundColor: '#f5f5f9',
    // color: 'rgba(0, 0, 0, 0.87)',
    // border: '1px solid #dadde9',
    backgroundColor: '#000',
    color: '#fff',
    maxWidth: 240,
    fontSize: theme.typography.pxToRem(14)
  }
}))(Tooltip)

export default HtmlTooltip
