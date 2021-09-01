import React from 'react'
import useTranslation from 'next-translate/useTranslation'
// material-ui
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default function OperationDialog ({ onCancel, onConfirm, open, value }) {
  const fullScreen = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const { t } = useTranslation('overview')

  const { card, id, minCard, maxCard } = value

  const [data, setData] = React.useState({ id, card })
  const [error, setError] = React.useState(false)

  React.useEffect(() => setData({ id, card }), [])

  const handleChange = e => {
    // console.log(e.target.name, e.target.value)
    const val = e.target.value
    val < minCard || val > maxCard ? setError(true) : setError(false)
    setData({ ...data, card: val })
  }

  const handleConfirm = e => {
    // console.log(data)
    e.preventDefault()
    onConfirm(data)
  }

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby='operation-dialog'
      fullScreen={fullScreen}
    >
      <DialogTitle id='dialog-title'>
        {t(id === 0 ? 'dialog-exit' : 'dialog-entry')}
      </DialogTitle>
      <DialogContent>
        <Input name='id' type='hidden' defaultValue={id} />
        <TextField
          sx={{ mt: 1 }}
          autoFocus
          fullWidth
          variant='filled'
          label={t('dialog-card')}
          type='number'
          name='card'
          defaultValue={card}
          // inputProps={{ style: { textTransform: 'capitalize' } }}
          error={!!error}
          helperText={`Min ${minCard} - Max ${maxCard}`}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onCancel}>
          {t('dialog-cancel')}
        </Button>
        <Button
          autoFocus
          onClick={handleConfirm}
          disabled={error}
          // type='submit'
        >
          {t('dialog-confirm')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
