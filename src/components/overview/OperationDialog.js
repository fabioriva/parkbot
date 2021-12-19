import React from 'react'
import useTranslation from 'next-translate/useTranslation'
// material-ui
import Button from '@mui/material/Button'
// import Input from '@mui/material/Input'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function OperationDialog ({
  onCancel,
  onConfirm,
  open,
  // card,
  id,
  minCard,
  maxCard
}) {
  const fullScreen = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const { t } = useTranslation('overview')

  // const { card, id, minCard, maxCard } = value

  // const [data, setData] = React.useState({ id, card })
  const [card, setCard] = React.useState(1)
  const [error, setError] = React.useState(false)

  // React.useEffect(() => setData({ id, card }), [])

  const handleChange = e => {
    // console.log(e.target.name, e.target.value)
    const value = e.target.value
    value < minCard || value > maxCard ? setError(true) : setError(false)
    // setData({ ...data, card: val })
    setCard(value)
  }

  const handleConfirm = e => {
    // console.log('card: ', card, 'id: ', id)
    e.preventDefault()
    onConfirm(card)
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
        {/* <Input name='id' type='hidden' defaultValue={id} /> */}
        <TextField
          sx={{ minWidth: 240, mt: 1 }}
          autoFocus
          fullWidth
          variant='filled'
          label={t('dialog-card')}
          type='number'
          name='card'
          defaultValue={card}
          inputProps={{
            min: minCard,
            max: maxCard
          }}
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
