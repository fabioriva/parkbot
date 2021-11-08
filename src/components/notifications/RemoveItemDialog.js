import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useTranslation from 'next-translate/useTranslation'

export default function AlertDialog ({ onCancel, onConfirm, open, value }) {
  const { t } = useTranslation('notifications')

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby='dialog-title'
      aria-describedby='dialog-description'
    >
      <DialogTitle id='dialog-title'>{t('dialog-remove-title')}</DialogTitle>
      <DialogContent>
        <DialogContentText id='dialog-description'>
          {t('dialog-remove-content')}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color='primary'>
          {t('dialog-cancel')}
        </Button>
        <Button onClick={() => onConfirm(value)} color='primary' autoFocus>
          {t('dialog-confirm')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
