import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

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
