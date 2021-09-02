import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import useMediaQuery from '@mui/material/useMediaQuery'
import useTranslation from 'next-translate/useTranslation'
import { useForm, Controller } from 'react-hook-form'

const CardEditDialog = ({ onCancel, onConfirm, open, value }) => {
  const fullScreen = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const { t } = useTranslation('cards')

  const { card, code } = value

  const { register, handleSubmit, control, formState, setValue } = useForm({
    mode: 'onChange'
  })

  React.useEffect(() => {
    setValue('card', card)
    setValue('code', code)
  }, [card, code])

  // const currentName = watch('code')

  const onSubmit = async data => {
    console.log(data)
    // reset()
    onConfirm(data)
  }

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby='card-edit'
      fullScreen={fullScreen}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle id='dialog-title'>
          {t('dialog-title', { number: card })}
        </DialogTitle>

        <DialogContent>
          <input type='hidden' {...register('card')} />
          <Controller
            name='code'
            control={control}
            // defaultValue={code}
            rules={{
              required: 'PIN code required',
              pattern: /^[a-fA-F0-9]{3}$/
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                autoFocus
                fullWidth
                label={t('dialog-code')}
                variant='filled'
                value={value}
                onChange={onChange}
                error={!!error}
                helperText='3 digits, pattern [a-fA-F0-9]'
                type='string'
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onCancel}>
            {t('dialog-cancel')}
          </Button>
          <Button color='primary' disabled={!formState.isValid} type='submit'>
            {t('dialog-confirm')}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default CardEditDialog
