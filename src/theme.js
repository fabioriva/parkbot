import { createMuiTheme, fade } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    // type: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    error: {
      main: red[500],
    },
    background: {
      default: fade('#f5f5f5', 0.75),
    },
    ce: '#d4edda',
    cu: '#f8d7da',
    pp: '#d1ecf1'
  },
});

export default theme;
