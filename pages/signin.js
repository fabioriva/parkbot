import React from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
// material-ui
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
// import IconButton from '@mui/material/IconButton'
// import InputLabel from '@mui/material/InputLabel'
// import InputAdornment from '@mui/material/InputAdornment'
// import OutlinedInput from '@mui/material/OutlinedInput'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
// import Visibility from '@mui/icons-material/Visibility'
// import VisibilityOff from '@mui/icons-material/VisibilityOff'
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
