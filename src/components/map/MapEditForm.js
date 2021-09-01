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

const MapEditDialog = ({ onCancel, onConfirm, open, value }) => {
  const fullScreen = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const { t } = useTranslation('map')

  const { card, stall, minCard, maxCard } = value

  const { register, handleSubmit, control, formState, setValue } = useForm({
    mode: 'onChange'
  })

  React.useEffect(() => {
    setValue('card', card)
    setValue('stall', stall)
  }, [card, stall])

  const onSubmit = async data => {
    console.log(data)
    onConfirm(data)
  }

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby='map-edit'
      fullScreen={fullScreen}
    >
      <DialogTitle id='dialog-title'>
        {t('dialog-title', { number: stall })}
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <input type='hidden' {...register('stall')} />
          <Controller
            name='card'
            control={control}
            rules={{
              min: minCard,
              max: maxCard,
              required: 'Card number required'
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                autoFocus
                fullWidth
                label={t('dialog-card')}
                variant='filled'
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={`Min ${minCard} Max ${maxCard}`}
                type='number'
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onCancel}>
            {t('dialog-cancel')}
          </Button>
          <Button color='primary' disabled={!formState.isValid} type='submit'>
            {t('dialog-card')}
          </Button>
          <Button
            color='primary'
            onClick={() => onConfirm({ card: 0, stall: stall })}
          >
            {t('dialog-clear')}
          </Button>
          <Button
            color='primary'
            onClick={() => onConfirm({ card: 999, stall: stall })}
          >
            {t('dialog-lock')}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default MapEditDialog
