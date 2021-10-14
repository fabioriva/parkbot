import React from 'react'
import useTranslation from 'next-translate/useTranslation'
// material-ui
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function MapEditDialog ({
  onCancel,
  onConfirm,
  open,
  stallStatus,
  value
}) {
  const fullScreen = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const { t } = useTranslation('map')

  const { card, stall, minCard, maxCard } = value

  const [data, setData] = React.useState({ card, stall })
  const [error, setError] = React.useState(false)

  React.useEffect(() => setData({ card, stall }), [])

  const handleChange = e => {
    // console.log(e.target.name, e.target.value)
    const val = e.target.value
    val < minCard || val > maxCard ? setError(true) : setError(false)
    setData({ ...data, card: val, stall })
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
      aria-labelledby='map-edit'
      fullScreen={fullScreen}
    >
      <DialogTitle id='dialog-title'>
        {t('dialog-title', { number: stall })}
      </DialogTitle>
      <DialogContent>
        <Input name='stall' type='hidden' defaultValue={stall} />
        <TextField
          sx={{ mt: 1 }}
          autoFocus
          fullWidth
          variant='filled'
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
        <Button autoFocus onClick={onCancel}>
          {t('dialog-cancel')}
        </Button>
        <Button
          color='primary'
          // onClick={() => onConfirm({ ...data })}
          onClick={handleConfirm}
          disabled={error}
        >
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
          onClick={() => onConfirm({ card: stallStatus.LOCK, stall: stall })}
        >
          {t('dialog-lock')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
