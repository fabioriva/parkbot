import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from 'src/dashboard/Copyright';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  // title: {
  //   flexGrow: 1,
  // },

  // icon: {
  //   marginRight: theme.spacing(2),
  // },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    backgroundColor: '#263238'
    // fontSize: '48px',
    // fontWeight: 'normal'
  },
  heroPrimary: {
    // fontSize: '48px',
    fontWeight: 'normal',
    color: '#61dafb'
  },
  heroSecondary: {
    fontSize: '30px',
    // fontWeight: 'normal',
    color: '#ffffff'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    // backgroundColor: theme.palette.background.paper,
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
                  <Button variant="contained" color="primary" href='/signin'>
                    Login to ParkBot{'™'}
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
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
            {cards.map((card, key) => (
              <Grid item key={key} xs={12} sm={12} md={4}>
                <Card className={classes.card}>
                  {/* <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title={card.title}
                  /> */}
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>
                      {card.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      More
                    </Button>
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        {/* <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography> */}
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
