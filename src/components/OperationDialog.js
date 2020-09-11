import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useForm } from 'react-hook-form'

export default function OperationDialog (props) {
  const { onClose, open, value } = props

  const { card, id, minCard, maxCard } = value

  const { register, handleSubmit, errors, clearErrors } = useForm()

  React.useEffect(() => clearErrors(), [])

  const onSubmit = (data) => {
    onClose(data)
  }

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>Operation request</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <DialogContentText>
            Insert a valid card number and confirm to start.
          </DialogContentText>
          <Input
            id='id'
            name='id'
            type='hidden'
            defaultValue={id}
            inputRef={register({
              required: true
            })}
          />
          <TextField
            autoFocus
            fullWidth
            margin='dense'
            variant='outlined'
            id='card'
            name='card'
            label='Card'
            type='number'
            defaultValue={card}
            helperText='Insert card number here.'
            // inputProps={{
            //   min: minCard,
            //   max: maxCard
            // }}
            inputRef={register({
              required: true,
              min: minCard,
              max: maxCard
            })}
            error={errors.card ? true : false}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color='primary'>
            Cancel
          </Button>
          <Button type='submit' color='primary'>
            Confirm
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
