import { useRouter } from 'next/router'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Copyright from 'src/components/Copyright'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // height: 'calc(100vh - 64px)',
    textAlign: 'center'
  },
  toolbar: {
    // borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flexGrow: 1,
    color: '#eceff1'
  },
  // toolbarSecondary: {
  //   justifyContent: 'space-between',
  //   overflowX: 'auto'
  // },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  main: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
    // transform: 'translateY(-10%)'
  },
  title: {
    color: '#ff9800',
    [theme.breakpoints.down('sm')]: {
      fontSize: '5rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '6rem'
    },
    fontWeight: 500
  },
  subtitle: {
    color: '#000',
    [theme.breakpoints.down('sm')]: {
      fontSize: 24
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 32
    },
    // fontSize: 32,
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
  },
  paper: {
    padding: theme.spacing(3)
  }
}))

export default function Home (props) {
  const classes = useStyles()

  const router = useRouter()

  const { t } = useTranslation('common')

  const handleSignin = () =>
    router.push('/signin', '/signin', { locale: props.locale })

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Button size='small' href='https://www.sotefin.com'>
          Sotefin
        </Button>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          className={classes.toolbarTitle}
        >
          {t('I18N_TEST')}
        </Typography>
        <Button variant='outlined' size='small' onClick={handleSignin}>
          Sign in
        </Button>
      </Toolbar>
      <div className={classes.root}>
        <Container component='main' maxWidth='md'>
          <div className={classes.main}>
            <Typography className={classes.title} variant='h1' component='h2'>
              ParkBot
            </Typography>
            <Typography className={classes.subtitle} variant='h2' gutterBottom>
              The full stack solution for robotic parking systems.
            </Typography>
            <Image src='/bot.svg' alt='ParkBot' width={120} height={120} />
            <Typography
              variant='overline'
              align='center'
              // className={classes.description}
              // paragraph
            >
              Hello, I am your robotic parking assistant!
            </Typography>
            <Button
              className={classes.startButton}
              color='primary'
              variant='contained'
              size='large'
              onClick={handleSignin}
            >
              Get Started
            </Button>
          </div>
          {/* <Grid
            container
            // direction='row'
            // justify='center'
            // alignItems='center'
            spacing={3}
          >
            <Grid item xs={12} lg={4}>
              <Box>
                <Paper className={classes.paper}>Feature 1</Paper>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box>
                <Paper className={classes.paper}>Feature 2</Paper>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box>
                <Paper className={classes.paper}>Feature 3</Paper>
              </Box>
            </Grid>
          </Grid> */}
          <Box mt={0}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </>
  )
}

// export async function getServerSideProps (context) {
//   return {
//     props: {
//       locale: context.locale
//     }
//   }
// }
