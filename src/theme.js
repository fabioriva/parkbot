import { createTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    ce: '#d4edda',
    cu: '#f8d7da',
    pp: '#d1ecf1',
    op: '#fff3cd'
  }
})

export default theme
