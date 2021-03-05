import { useEffect } from 'react'
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
import { useForm } from 'react-hook-form'

export default function OperationDialog (props) {
  const { t } = useTranslation('system')

  const { onCancel, onConfirm, open, value } = props

  const { card, id, minCard, maxCard } = value

  const { register, handleSubmit, errors, clearErrors } = useForm()

  useEffect(() => clearErrors(), [])

  const onSubmit = data => {
    onConfirm({ ...data, conn: value.conn })
  }

  return (
    <Dialog open={open} onClose={onCancel} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>{t('dialog-title')}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          {/* <DialogContentText>{t('dialog-content')}</DialogContentText> */}
          <Input
            id='id'
            name='id'
            type='hidden'
            defaultValue={id}
            inputRef={register({
              required: true
            })}
          />
          <TextField
            autoFocus
            fullWidth
            id='card'
            name='card'
            label={t('device-card')}
            type='number'
            defaultValue={card}
            inputRef={register({
              required: true,
              min: minCard,
              max: maxCard
            })}
            error={!!errors.card}
            helperText={`Min ${minCard} Max ${maxCard}`}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color='default'>
            {t('dialog-cancel')}
          </Button>
          <Button type='submit' color='primary'>
            {t('dialog-confirm')}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
