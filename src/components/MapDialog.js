import { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export default function OperationDialog (props) {
  const { t } = useTranslation('map')

  const { onCancel, onConfirm, open, data } = props

  const { stall, value, minCard, maxCard } = data

  const { register, handleSubmit, errors, clearErrors } = useForm()

  useEffect(() => clearErrors(), [])

  const onSubmit = data => {
    onConfirm({ stall: stall, value: parseInt(data.value) })
  }

  return (
    <Dialog open={open} onClose={onCancel} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>
        {t('dialog-title', { number: stall })}
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <DialogContentText>{t('dialog-content')}</DialogContentText>
          <Input
            id='stall'
            name='stall'
            type='hidden'
            defaultValue={stall}
            inputRef={register({
              required: true
            })}
          />
          <TextField
            autoFocus
            fullWidth
            id='value'
            name='value'
            label={t('dialog-card')}
            type='number'
            defaultValue={value}
            inputRef={register({
              required: true,
              min: minCard,
              max: maxCard,
              maxLength: 3
            })}
            error={!!errors.value}
            helperText={`Min ${minCard} Max ${maxCard}`}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color='default'>
            {t('dialog-cancel')}
          </Button>
          <Button type='submit' color='primary'>
            {t('dialog-card')}
          </Button>
          <Button
            onClick={() => onConfirm({ stall: stall, value: 0 })}
            color='primary'
          >
            {t('dialog-clear')}
          </Button>
          <Button
            onClick={() => onConfirm({ stall: stall, value: 999 })}
            color='primary'
          >
            {t('dialog-lock')}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
