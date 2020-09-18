import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from 'src/dashboard/Copyright';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(1, 0),
    marginTop: 'auto',
    // backgroundColor:
    //   theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));


export default function AppDrawer() {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </footer>
  )
}
