import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useForm, Controller } from 'react-hook-form'

export default function AddItemList ({ onConfirm }) {
  const {
    // register,
    handleSubmit,
    control,
    formState,
    reset,
    setValue
  } = useForm({
    mode: 'onChange'
  })

  React.useEffect(() => {
    setValue('email', '')
    setValue('name', '')
    setValue('phone', '')
  }, [])

  const onSubmit = async data => {
    console.log(data)
    reset()
    onConfirm(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        // component='form'
        sx={{
          '& > :not(style)': { mr: 3, width: '25ch' }
        }}
        noValidate
        autoComplete='off'
      >
        <Controller
          name='email'
          control={control}
          rules={{
            required: 'E-mail address is required',
            pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              required
              id='email'
              label='E-mail'
              variant='outlined'
              type='email'
              value={value}
              onChange={onChange}
              error={!!error}
              helperText='E-mail address'
            />
          )}
        />
        <Controller
          name='name'
          control={control}
          rules={{
            required: 'Name is required'
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              required
              id='name'
              label='Name'
              variant='outlined'
              type='string'
              value={value}
              onChange={onChange}
              error={!!error}
              helperText='Full name'
            />
          )}
        />
        <Controller
          name='phone'
          control={control}
          // rules={{
          //   required: 'Name is required'
          // }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              // required
              id='phone'
              label='Phone'
              variant='outlined'
              type='tel'
              value={value}
              onChange={onChange}
              error={!!error}
              helperText='Phone number'
            />
          )}
        />
        <Button
          // sx={{ float: 'right' }}
          color='primary'
          disabled={!formState.isValid}
          type='submit'
        >
          Add Item
        </Button>
      </Box>
    </form>
  )
}
