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

export default function EditDialog (props) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const { t } = useTranslation('map')

  const { onCancel, onConfirm, open, value } = props

  const { card, stall, minCard, maxCard } = value

  const [data, setData] = React.useState({ card, stall })
  const [error, setError] = React.useState(false)

  React.useEffect(() => setData({ card, stall }), [])

  const handleChange = e => {
    console.log('onChange:', e.target.name, e.target.value)
    const val = e.target.value
    val < minCard || val > maxCard ? setError(true) : setError(false)
    setData({ ...data, card: val })
  }

  const handleEnter = () => {
    console.log('onEnter', value)
    card < minCard || card > maxCard ? setError(true) : setError(false)
    setData({ card, stall })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(data, typeof data.card)
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
        {t('dialog-title', { number: stall })}
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Input name='stall' type='hidden' defaultValue={stall} />
          <TextField
            autoFocus
            fullWidth
            label={t('dialog-card')}
            type='number'
            name='card'
            defaultValue={card}
            error={!!error}
            helperText={`Min ${minCard} Max ${maxCard}`}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color='default'>
            {t('dialog-cancel')}
          </Button>
          <Button type='submit' color='primary' disabled={error}>
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
