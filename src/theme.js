import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    // type: 'light',
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#dc004e'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#eceff1'
    },
    ce: '#d4edda',
    cu: '#f8d7da',
    pp: '#d1ecf1'
  }
})

export default theme
