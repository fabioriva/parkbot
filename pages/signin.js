import React from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
// material-ui
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Container from '@material-ui/core/Container'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
// import IconButton from '@material-ui/core/IconButton'
// import InputLabel from '@material-ui/core/InputLabel'
// import InputAdornment from '@material-ui/core/InputAdornment'
// import OutlinedInput from '@material-ui/core/OutlinedInput'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
// import Visibility from '@material-ui/icons/Visibility'
// import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Copyright from 'src/components/Copyright'
import useTranslation from 'next-translate/useTranslation'

const START_PAGE = 'overview'

export default function Signin () {
  const { t } = useTranslation('signin')
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [error, setError] = React.useState(null)

  // const [values, setValues] = React.useState({
  //   amount: '',
  //   password: '',
  //   weight: '',
  //   weightRange: '',
  //   showPassword: false
  // })

  // const handleChange = prop => event => {
  //   setValues({ ...values, [prop]: event.target.value })
  // }

  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword
  //   })
  // }

  // const handleMouseDownPassword = event => {
  //   event.preventDefault()
  // }

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
        // const url = aps !== undefined ? `/${aps}/${START_PAGE}` : '/'
        const url = `/${aps}/${START_PAGE}`
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
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // minHeight: '100vh',
          alignItems: 'center',
          mt: 8
        }}
      >
        <Avatar
          sx={{ mb: 1, height: 56, width: 56 }}
          alt='ParkBot'
          src='/bot.svg'
        />
        <Typography component='h1' variant='h5'>
          {t('title')}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off'>
          <TextField
            autoFocus
            fullWidth
            // autoComplete='username'
            // variant='outlined'
            margin='normal'
            id='username'
            name='username'
            label='Username'
            error={!!(errors.username || error)}
            helperText={error}
            {...register('username', { required: true })}
          />
          {/* {errors.username && 'Username is required'} */}

          {/* <InputLabel htmlFor='password'>Password</InputLabel>
          <OutlinedInput
            fullWidth
            id='password'
            name='password'
            type={values.showPassword ? 'text' : 'password'}
            // value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
            error={!!(errors.password || error)}
            helperText={error}
            {...register('password', { required: true })}
          /> */}

          <TextField
            autoComplete='current-password'
            variant='outlined'
            margin='normal'
            fullWidth
            id='password'
            name='password'
            label='Password'
            type='password'
            // inputRef={register({
            //   required: true
            // })}
            error={!!(errors.password || error)}
            helperText={error}
            {...register('password', { required: true })}
          />
          {/* {errors.password && 'Password is required'} */}
          <br />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label={t('remember')}
          />
          <Button
            sx={{ mb: 3, mt: 3 }}
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            size='large'
          >
            {t('signin')}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                {t('forgot')}
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {t('signup')}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
