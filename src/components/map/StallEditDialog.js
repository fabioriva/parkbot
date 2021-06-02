import React from 'react'
import { useForm } from 'react-hook-form'
import useTranslation from 'next-translate/useTranslation'
// material-ui
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
// import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

export default function EditDialog (props) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const { t } = useTranslation('map')

  const { onCancel, onConfirm, open, value } = props

  const { card, stall, minCard, maxCard } = value

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors
  } = useForm()

  React.useEffect(() => clearErrors(), [])

  const onSubmit = data => {
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
        {t('dialog-title', { number: stall })}
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          {/* <DialogContentText>{t('dialog-content')}</DialogContentText> */}
          <Input
            id='stall'
            name='stall'
            type='hidden'
            defaultValue={stall}
            // inputRef={register({
            //   required: true
            // })}
            {...register('stall', { required: true })}
          />
          <TextField
            autoFocus
            fullWidth
            id='card'
            name='card'
            label={t('dialog-card')}
            type='number'
            defaultValue={card}
            // inputRef={register({
            //   required: true,
            //   min: minCard,
            //   max: maxCard
            // })}
            error={!!errors.card}
            helperText={`Min ${minCard} Max ${maxCard}`}
            {...register('card', {
              required: true,
              min: minCard,
              max: maxCard
            })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color='default'>
            {t('dialog-cancel')}
          </Button>
          <Button onClick={handleSubmit(onSubmit)} color='primary'>
            {/* <Button type='submit' color='primary'> */}
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
