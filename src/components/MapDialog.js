import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm } from "react-hook-form";

export default function OperationDialog (props) {
  const { onCancel, onClose, open, data } = props;

  const { stall, value, minCard, maxCard, minStall, maxStall } = data

  const { register, handleSubmit, errors, clearErrors, setValue } = useForm();

  React.useEffect(() => clearErrors(), []);

  const onSubmit = (data) => {
    // console.log('onSubmit', data)
    // onClose({ ...data, stall: stall })
    onClose({ stall: stall, value: parseInt(data.value) })
  }

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Edit stall {stall}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          {/* <DialogContentText>
            Edit stall {stall}.
          </DialogContentText> */}
          <Input
            id="stall"
            name='stall'
            type='hidden'
            defaultValue={stall}
            inputRef={register({
              required: true
            })}
          />
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            variant='outlined'
            id="value"
            name='value'
            label="Card number"
            type="number"
            defaultValue={value}
            helperText='Insert card number here.'
            // inputProps={{
            //   min: minCard,
            //   max: maxCard
            // }}
            inputRef={register({
              required: true,
              min: minCard,
              max: maxCard,
              maxLength: 3
            })}
            error={errors.value ? true : false}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Card
          </Button>
          <Button onClick={() => onClose({ stall: stall, value: 0 })} color="primary">
            Clear
          </Button>
          <Button onClick={() => onClose({ stall: stall, value: 999 })} color="primary">
            Lock
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
