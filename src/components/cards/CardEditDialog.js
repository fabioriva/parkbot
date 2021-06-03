import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import useTranslation from 'next-translate/useTranslation'
// material-ui
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

export default function EditDialog ({ onCancel, onConfirm, open, value }) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const { t } = useTranslation('cards')

  const { card, minCard, maxCard } = value

  const {
    // register,
    control,
    handleSubmit,
    formState: { errors },
    clearErrors
  } = useForm()

  // React.useEffect(() => clearErrors(), [])

  React.useEffect(() => {
    console.log(value)
    clearErrors()
  }, [])
  // const onSubmit = data => onConfirm({ ...data })
  const onSubmit = data => {
    console.log(data)
    onConfirm({ ...data })
  }
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby='form-dialog-title'
      fullScreen={fullScreen}
    >
      <DialogTitle id='form-dialog-title'>
        {t('dialog-title', { number: card.nr })}
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          {/* <DialogContentText>{t('dialog-content')}</DialogContentText> */}
          {/* <Input
            id='nr'
            name='nr'
            type='hidden'
            // defaultValue={card.nr}
            // inputRef={register({
            //   required: true,
            //   min: minCard,
            //   max: maxCard
            // })}
            {...register('nr', { required: true, min: minCard, max: maxCard })}
          />
          <TextField
            autoFocus
            fullWidth
            id='code'
            name='code'
            label={t('dialog-code')}
            type='string'
            // defaultValue={card.code}
            inputProps={{ style: { textTransform: 'capitalize' } }}
            // inputRef={register({
            //   required: true,
            //   maxLength: 3,
            //   pattern: /^[a-fA-F0-9]{3}$/
            // })}
            error={!!errors.code}
            helperText='3 digits, pattern [a-fA-F0-9]'
            {...register('code', {
              required: true,
              maxLength: 3,
              pattern: /^[a-fA-F0-9]{3}$/
            })}
          /> */}
          <Controller
            render={({ field }) => <Input {...field} type='hidden' />}
            name='nr'
            control={control}
            // defaultValue={card.nr}
            // rules={{ required: true, min: minCard, max: maxCard }}
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                autoFocus
                fullWidth
                // defaultValue={card.code}
                error={!!errors.code}
                helperText='3 digits, pattern [a-fA-F0-9]'
                label={t('dialog-code')}
                type='string'
                // value={card.code}
              />
            )}
            name='code'
            control={control}
            // defaultValue={card.code}
            rules={{
              required: true,
              maxLength: 3,
              pattern: /^[a-fA-F0-9]{3}$/
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color='default'>
            {t('dialog-cancel')}
          </Button>
          {/* <Button onClick={handleSubmit(onSubmit)} color='primary'> */}
          <Button color='primary' type='submit'>
            {t('dialog-confirm')}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
