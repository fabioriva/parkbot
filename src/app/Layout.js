import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import AppBar from 'src/app/AppBar'
import Drawer from 'src/app/Drawer'
import NavBar from 'src/app/NavBar'
import Footer from 'src/app/Footer'

const appBarHeight = 48 + 48;

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  appBarSpacer: {
    marginBottom: theme.spacing(2), // 8px factor
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: `calc(100vh - ${appBarHeight}px)`,
    backgroundColor: theme.background,
  },
}));

export default function App({ children }) {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>

      <AppBar handleDrawerToggle={handleDrawerToggle} />
      
      <NavBar />

      <Drawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
  
      <main className={classes.mainContent}>

        <Container maxWidth="lg">
          <div className={classes.appBarSpacer} />
          {children}
        </Container>

        <Footer />

      </main>

    </div>
  );
}