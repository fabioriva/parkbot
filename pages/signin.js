import React from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import useTranslation from 'next-translate/useTranslation'
import Copyright from 'src/components/Copyright'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Container from '@material-ui/core/Container'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const START_PAGE = 'dashboard'

const useStyles = makeStyles(theme => ({
  root: {
    // height: '100vh'
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function Signin () {
  const classes = useStyles()

  const router = useRouter()

  const { t } = useTranslation('common')

  const { register, handleSubmit, errors } = useForm()

  const [error, setError] = React.useState(null)

  const onSubmit = async body => {
    try {
      const res = await global.fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      if (res.status === 200) {
        // const { aps } = await res.json()
        const { aps, locale } = await res.json()
        const url = aps !== undefined ? `/${aps}/${START_PAGE}` : '/'
        console.log(aps, locale, url)
        router.push(url, url, { locale: locale })
      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error)
      // setError(error.message)
      setError('Unauthorized')
    }
  }

  return (
    <Container component='main' maxWidth='xs' className={classes.root}>
      <div className={classes.paper}>
        <Avatar alt='ParkBot' className={classes.avatar} src='/bot.svg' />
        <Typography component='h1' variant='h5'>
          {t('SIGNIN_TITLE')}
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          autoComplete='off'
        >
          <TextField
            variant='outlined'
            margin='normal'
            autoFocus
            fullWidth
            id='username'
            name='username'
            label='Username'
            inputRef={register({
              required: true
            })}
            error={!!(errors.username || error)}
            helperText={error}
          />
          {/* {errors.username && 'Username is required'} */}
          <TextField
            variant='outlined'
            margin='normal'
            // required
            fullWidth
            id='password'
            name='password'
            label='Password'
            type='password'
            inputRef={register({
              required: true
            })}
            error={!!(errors.password || error)}
            helperText={error}
          />
          {/* {errors.password && 'Password is required'} */}
          <br />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label={t('SIGNIN_REMEMBER')}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {t('SIGNIN_BUTTON')}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                {t('SIGNIN_FORGOT')}
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {t('SIGNIN_SIGNUP')}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

// export async function getStaticProps (context) {
//   return {
//     props: {
//       locale: context.locale
//     }
//   }
// }
