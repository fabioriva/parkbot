import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import useMediaQuery from '@material-ui/core/useMediaQuery'
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
