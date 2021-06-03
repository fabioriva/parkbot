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
import { useTheme } from '@material-ui/core/styles'

export default function EditDialog ({ onCancel, onConfirm, open, value }) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const { t } = useTranslation('cards')

  const { card, code, minCard, maxCard } = value
  console.log(value)
  const [data, setData] = React.useState({ card, code })
  const [error, setError] = React.useState(false)
  console.log(data)
  React.useEffect(() => setData({ card, code }), [])

  const handleChange = e => {
    console.log('onChange:', e.target.name, e.target.value)
    const val = e.target.value
    const regexp = /^[a-fA-F0-9]{3}$/ // new RegExp('^[a-fA-F0-9]{3}$')
    !regexp.test(val) || val.length !== 3 ? setError(true) : setError(false)
    setData({ ...data, code: val })
  }

  const handleEnter = () => {
    console.log('onEnter', value)
    const regexp = /^[a-fA-F0-9]{3}$/ // new RegExp('^[a-fA-F0-9]{3}$')
    !regexp.test(code) || code.length !== 3 ? setError(true) : setError(false)
    setData({ card, code })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(data)
    // if (!error) window.alert(JSON.stringify(data))
    if (!error) onConfirm({ ...data })
  }

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      onEnter={handleEnter}
      aria-labelledby='form-dialog-title'
      fullScreen={fullScreen}
    >
      <DialogTitle id='form-dialog-title'>
        {t('dialog-title', { number: card })}
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Input name='nr' type='hidden' defaultValue={card} />
          <TextField
            autoFocus
            fullWidth
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
          <Button onClick={onCancel} color='default'>
            {t('dialog-cancel')}
          </Button>
          <Button type='submit' color='primary' disabled={error}>
            {t('dialog-confirm')}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
