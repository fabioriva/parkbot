import Image from 'next/image'
import Copyright from 'src/components/Copyright'
import ParkBotHeader from 'src/components/ParkBotHeader'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100vh',
    textAlign: 'center'
    // backgroundImage: 'url(https://avatars.dicebear.com/api/bottts/g.svg)',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center'
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
    // transform: 'translateY(-10%)'
  },
  title: {
    color: '#ff9800',
    fontWeight: 500
  },
  subtitle: {
    color: '#000',
    fontSize: 32,
    fontWeight: 300
  },
  startButton: {
    margin: 32,
    width: 200
  },
  description: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '1.6',
    letterSpacing: '-0.02em'
  }
}))

export default function Home (props) {
  const classes = useStyles()

  return (
    <>
      <ParkBotHeader />
      <div className={classes.root}>
        <Container component='main' maxWidth='md'>
          <div className={classes.paper}>
            <Image
              // src='https://avatars.dicebear.com/api/bottts/g.svg'
              src='/bot.svg'
              alt='ParkBot'
              width={100}
              height={100}
            />
            <Typography
              variant='overline'
              align='center'
              // className={classes.description}
              // paragraph
            >
              Hello, I am your robotic assistant!
            </Typography>
            <Typography className={classes.title} variant='h1' component='h2'>
              ParkBot
            </Typography>
            <Typography className={classes.subtitle} variant='h2' gutterBottom>
              The full stack solution for robotic parking systems.
            </Typography>
            <Button
              className={classes.startButton}
              color='primary'
              variant='outlined'
              size='large'
              href='/signin'
            >
              Start
            </Button>
            {/* <Typography
            variant='subtitle1'
            align='center'
            className={classes.description}
            // paragraph
          >
            Parkbot gives you the best user experience with all the features you
            need for monitoring and servicing your system.
          </Typography> */}
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </>
  )
}

export const getStaticProps = ({ locale, locales }) => {
  const ns = ['common']

  return {
    props: {
      locale,
      locales,
      ns
    }
  }
}
