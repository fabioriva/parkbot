import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import useTranslation from 'next-translate/useTranslation'

export default function AlertDialog ({ onCancel, onConfirm, open, value }) {
  const { t } = useTranslation('system')

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
