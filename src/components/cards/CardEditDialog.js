import React from 'react'
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

export default function EditDialog (props) {
  const { t } = useTranslation('cards')

  const { onCancel, onConfirm, open, value } = props

  const { card, minCard, maxCard } = value

  const { register, handleSubmit, errors, clearErrors } = useForm()

  React.useEffect(() => clearErrors(), [])

  const onSubmit = data => {
    onConfirm({ ...data })
  }

  return (
    <Dialog open={open} onClose={onCancel} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>
        {t('dialog-title', { number: card.nr })}
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          {/* <DialogContentText>{t('dialog-content')}</DialogContentText> */}
          <Input
            id='nr'
            name='nr'
            type='hidden'
            defaultValue={card.nr}
            inputRef={register({
              required: true,
              min: minCard,
              max: maxCard
            })}
          />
          <TextField
            autoFocus
            fullWidth
            id='code'
            name='code'
            label={t('dialog-code')}
            type='string'
            defaultValue={card.code}
            inputProps={{ style: { textTransform: 'capitalize' } }}
            inputRef={register({
              required: true,
              pattern: /^[a-fA-F0-9]{3}$/
            })}
            error={!!errors.code}
            helperText='3 digits, pattern [a-fA-F0-9]'
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
