import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from 'src/app/AppBar'
import Drawer from 'src/app/Drawer'
import Footer from 'src/app/Footer'
import Header from 'src/app/Header'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  sticky: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%'
  },
  // toolbar: theme.mixins.toolbar,
  toolbar: {
    minHeight: theme.spacing(10),
  }
}));

export default function AppLayout({ children, apsName, pageTitle, socket, user }) {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        handleDrawerToggle={handleDrawerToggle}
      />
      <Drawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <main className={classes.sticky}>
        <Container maxWidth="xl">
          <div className={classes.toolbar} />
          <Header
            aps={apsName}
            pageTitle={pageTitle}
            socket={socket}
          />
          {children}
        </Container>
        <Footer />
      </main>
    </div>
  );
}
