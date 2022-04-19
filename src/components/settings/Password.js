import * as React from 'react'
import { useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
// import Error from 'src/components/Error'
import Layout from 'src/components/Layout'
import useTranslation from 'next-translate/useTranslation'

const isMatch = (p1, p2) => {
  // console.log(p1, p2, p1 === p2)
  return p1 === p2
}

export default function Password(props) {
  const { t } = useTranslation('settings')

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset
  } = useForm()

  const [error, setError] = React.useState(null)

  const onSubmit = async body => {
    console.log(body)
    try {
      // if (!isMatch(body.password, body.confirm)) {
      //   return console.log('Password does not match')
      // }
      const res = await global.fetch('/api/password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const json = await res.json()
      if (res.status === 200) {
        // const json = await res.json()
        // console.log('!!!!!!!!!!', json)
        setError(null)
        reset()
      } else {
        // throw new Error(await res.text())
        setError('Unauthorized')
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error)
      // setError(error.message)
      setError('Unauthorized (network)')
    }
  }

  return (
    // <Layout {...props} pageTitle={t('page-title')}>
    <Layout {...props} pageTitle={'Settings'}>
      <Box
        component='div'
        sx={{
          '& > :not(style)': { m: 0, width: '25ch' },
          marginLeft: { xs: 2, md: 0 }
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off'>
          <Input
            id='username'
            name='username'
            type='hidden'
            defaultValue={props.user.username}
            {...register('username', { required: true })}
          />
          <Stack spacing={2}>
            <TextField
              id='current'
              name='current'
              label='Current password'
              type='password'
              variant='filled'
              {...register('current', {
                required: {
                  value: true,
                  message: 'Current password is required'
                }
              })}
              error={!!(errors.current || error)}
              helperText={
                (errors.current && errors.current.type === 'required' && (
                  <span>{errors.current.message}</span>
                )) ||
                error
              }
            />
            <TextField
              id='password'
              name='password'
              label='New password'
              type='password'
              variant='filled'
              {...register('password', {
                required: true
                // validate: value => isMatch(value, getValues('confirm'))
              })}
              error={!!(errors.password || error)}
              helperText={
                errors.password &&
                errors.password.type === 'validate' && (
                  <span>New password does not match</span>
                )
              }
            />
            <TextField
              id='confirm'
              name='confirm'
              label='Confirm new password'
              type='password'
              variant='filled'
              {...register('confirm', {
                required: true,
                validate: value => isMatch(value, getValues('password'))
              })}
              error={!!(errors.confirm || error)}
              helperText={
                errors.confirm &&
                errors.confirm.type === 'validate' && (
                  <span>New password does not match</span>
                )
              }
            />
            <Button variant='contained' size='large' type='submit'>
              Change password
            </Button>
          </Stack>
        </form>
      </Box>
    </Layout>
  )
}
