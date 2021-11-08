import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import useMediaQuery from '@mui/material/useMediaQuery'
import useTranslation from 'next-translate/useTranslation'
import { useForm, Controller } from 'react-hook-form'

export default function AddItemDialog ({ onCancel, onConfirm, open }) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const { t } = useTranslation('notifications')

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

  // const handleConfirm = (email, name, phone) => {
  //   console.log(email, name, phone)
  //   // onConfirm(data)
  // }
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
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby='add-item'
      fullScreen={isMobile}
    >
      <DialogTitle id='dialog-add'>{t('dialog-add')}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Stack direction={isMobile ? 'column' : 'row'} spacing={3} mt={1}>
            <Controller
              name='email'
              control={control}
              rules={{
                required: 'E-mail address is required',
                pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              }}
              render={({
                field: { onChange, value },
                fieldState: { error }
              }) => (
                <TextField
                  required
                  id='email'
                  label='E-mail'
                  variant='outlined'
                  type='email'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={t('helper-email')}
                />
              )}
            />
            <Controller
              name='name'
              control={control}
              rules={{
                required: 'Name is required',
                patter: /^[a-z ,.'-]+$/
              }}
              render={({
                field: { onChange, value },
                fieldState: { error }
              }) => (
                <TextField
                  required
                  id='name'
                  label='Name'
                  variant='outlined'
                  type='string'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={t('helper-name')}
                />
              )}
            />
            <Controller
              name='phone'
              control={control}
              // rules={{
              //   required: 'Name is required'
              // }}
              render={({
                field: { onChange, value },
                fieldState: { error }
              }) => (
                <TextField
                  // required
                  id='phone'
                  label='Phone'
                  variant='outlined'
                  type='tel'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={t('helper-phone')}
                />
              )}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onCancel}>
            {t('dialog-cancel')}
          </Button>
          {/* <Button
          color='primary'
          onClick={() => handleConfirm(email, name, phone)}
          // disabled={error}
        >
          {t('dialog-confirm')}
        </Button> */}
          <Button
            // sx={{ float: 'right' }}
            color='primary'
            disabled={!formState.isValid}
            type='submit'
          >
            {t('dialog-confirm')}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
