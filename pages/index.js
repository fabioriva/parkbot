import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from 'src/dashboard/Copyright';
// import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#24292e',
  },
  title: {
    flexGrow: 1,
    color: '#61dafb',
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    backgroundColor: '#263238'
  },
  heroPrimary: {
    color: '#61dafb',
    fontWeight: 500,
    fontSize: '48px',
    // letterSpacing: '-0.06em',
    // lineHeight: '1.2',
    margin: '0px 0px 30px'
  },
  heroSecondary: {
    fontSize: '30px',
    fontWeight: 'normal',
    color: '#ffffff'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  signinButton: {
    backgroundColor: '#61dafb',
    color: '#000',
    // textTransform: 'lowercase'
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  // cardMedia: {
  //   paddingTop: '56.25%', // 16:9
  // },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  section: {
    margin: theme.spacing(3),
  },
  features: {
    marginBottom: theme.spacing(3),
  }
}))

const cards = [{
  title: "ParkBot{'™ '}Tech",
  heading: <span>ParkBot{'™ '}Tech</span>,
  content: "Simple to use, ⚡ blazing fast and thoroughly tested."
}, {
  title: "ParkBot{'™ '}Concierge",
  heading: <span>ParkBot{'™ '}Concierge</span>,
  content: "Real-time bidirectional event-based communication."
}, {
  title: "ParkBot{'™ '}App",
  heading: <span>ParkBot{'™ '}App</span>,
  content: "It works on every platform, modern browser or device."
}];

export default function Index() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* App Bar */}
        <AppBar position="static" elevation={2} className={classes.appBar}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="h5" className={classes.title} noWrap>
                {/* <span style={{ color: blue[300] }}>Park</span> */}
                {/* <span style={{ color: blue[200] }}>Bot</span>{'™ '} */}
                {/* <span style={{ color: blue[100] }}>App</span> */}
                ParkBot{'™ '}
              </Typography>
              <Typography>v3.0.0</Typography>
            </Toolbar>
          </Container>
        </AppBar>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" className={classes.heroPrimary} gutterBottom>
              ParkBot{'™'}
            </Typography>
            <Typography variant="h5" align="center" className={classes.heroSecondary} paragraph>
              Parkbot gives you the best user experience with all the features you need for monitoring and servicing your automatic parking system.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button className={classes.signinButton} variant="contained" color="primary" href='/signin'>
                    Login to ParkBot
                  </Button>
                </Grid>
                {/* <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid> */}
              </Grid>
            </div>
          </Container>
        </div>
        {/* End hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
          
          {/* <div className={classes.section}>
            <Typography variant='h5' align="center" className={classes.features} gutterBottom>
              Why ParkBot
            </Typography>
            <Typography variant='body1' align="center" gutterBottom>It is simple to use, ⚡ blazing fast and thoroughly tested.</Typography>
            <Typography variant='body1' align="center" gutterBottom>Real-time bidirectional event-based communication.</Typography>
            <Typography variant='body1' align="center" gutterBottom>It works on every platform, modern browser or device.</Typography>
            <Typography variant='body2' align="center" gutterBottom>And more ...</Typography>
          </div> */}

          <Grid container spacing={4}>

          </Grid>

          <Grid container spacing={4}>
            {cards.map((card, key) => (
              <Grid item key={key} xs={12} md={4}>
                <Card className={classes.card} variant="outlined">
                  {/* <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title={card.title}
                  /> */}
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h6" component="h2" gutterBottom>
                      {card.heading}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {card.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
