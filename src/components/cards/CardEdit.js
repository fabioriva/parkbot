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

export default function CardEditDialog ({ onCancel, onConfirm, open, value }) {
  const fullScreen = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const { t } = useTranslation('cards')

  const { card, code } = value

  const [data, setData] = React.useState({ card, code })
  const [error, setError] = React.useState(false)

  React.useEffect(() => setData({ card, code }), [])

  const handleChange = e => {
    // console.log(e.target.name, e.target.value)
    const val = e.target.value
    const regexp = /^[a-fA-F0-9]{3}$/ // new RegExp('^[a-fA-F0-9]{3}$')
    !regexp.test(val) || val.length !== 3 ? setError(true) : setError(false)
    setData({ ...data, code: val })
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
      aria-labelledby='card-edit'
      fullScreen={fullScreen}
    >
      <DialogTitle id='dialog-title'>
        {t('dialog-title', { number: card })}
      </DialogTitle>
      <DialogContent>
        <Input name='nr' type='hidden' defaultValue={card} />
        <TextField
          sx={{ mt: 1 }}
          autoFocus
          fullWidth
          variant='filled'
          label={t('dialog-code')}
          type='string'
          name='code'
          defaultValue={code}
          inputProps={{ style: { textTransform: 'capitalize' } }}
          error={!!error}
          helperText='3 digits, pattern [a-fA-F0-9]'
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
          type='submit'
        >
          {t('dialog-confirm')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
