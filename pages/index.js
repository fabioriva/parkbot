import { useRouter } from 'next/router'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Copyright from 'src/components/Copyright'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100vh',
    textAlign: 'center'
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  paper: {
    marginTop: theme.spacing(4),
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
          <div className={classes.paper}>
            <Image src='/bot.svg' alt='ParkBot' width={100} height={100} />
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
              onClick={handleSignin}
            >
              Start
            </Button>
          </div>
          <Box mt={8}>
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
