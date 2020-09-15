import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
// custom components
import AppBar from 'src/dashboard/AppBar'
import Copyright from 'src/dashboard/Copyright';
import Header from 'src/dashboard/Header.js'
// import PageHeader from 'src/dashboard/PageHeader.js'
import { mainListItems } from 'src/dashboard/listItems';

// import { SnackbarProvider } from 'notistack'

const appBarHeight = 64 + 64;
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBarSpacer: {
    marginBottom: theme.spacing(2), // 8px factor
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
  },

  container: {
    paddingTop: theme.spacing(4),
  },
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: `calc(100vh - ${appBarHeight}px)`,
    backgroundColor: theme.background,
    // [theme.breakpoints.up('md')]: {
    //   backgroundImage: 'url(/sotefin_shuttle.jpg)',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'center'
    // },
  },
  footer: {
    padding: theme.spacing(2, 0),
    marginTop: 'auto',
    // backgroundColor:
    //   theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },

}));

function ResponsiveDrawer({ children, apsName, apsLocation, pageTitle, socket, window }) {
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      {/* <div className={classes.toolbar}> */}
        {/* <Box
          className={classes.toolbar}
          display="flex" 
          // width={500} height={80} 
          bgcolor="lightgreen"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h6" noWrap>
          ParkBot{'™ '}Tech
        </Typography>
        </Box> */}
      {/* </div> */}

      <Divider />
      {mainListItems}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <AppBar handleDrawerToggle={handleDrawerToggle} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Header
          title={apsName}
          subtitle={pageTitle}
          socket={socket}
        />
          {/* Sticky footer */}
          <div className={classes.layout}>
            <Container maxWidth="lg" className={classes.container}>
              {/* <SnackbarProvider maxSnack={3}> */}
                {/* <PageHeader
                  apsName={apsName}
                  apsLocation={apsLocation}
                  pageTitle={pageTitle}
                  socket={socket}
                /> */}
                {/* <Header
                  title={apsName}
                  subtitle={pageTitle}
                  socket={socket}
                /> */}
              {/* </SnackbarProvider> */}
              <div className={classes.appBarSpacer} />
              {children}
            </Container>
            <footer className={classes.footer}>
              <Container maxWidth="sm">
                <Copyright />
              </Container>
            </footer>
          </div>

      </main>
    </div>
  );
}

export default ResponsiveDrawer
