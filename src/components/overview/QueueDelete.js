import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useTranslation from 'next-translate/useTranslation'

export default function AlertDialog ({ onCancel, onConfirm, open, value }) {
  const { t } = useTranslation('overview')

  return (
    <div>
      <Dialog
        open={open}
        onClose={onCancel}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {t('queue-dialog-title', { number: value.card })}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {t('queue-dialog-content')}
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
    </div>
  )
}
