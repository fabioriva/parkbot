import React from 'react'
import { useForm } from 'react-hook-form'
import useTranslation from 'next-translate/useTranslation'
import { format, endOfDay, startOfDay } from 'date-fns'
// material ui
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
// import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  dialogTitle: {
    // backgroundColor: '#24292e',
    // color: '#fff'
  },

  textField: {
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}))

export default function HistoryQueryDialog ({ onCancel, onConfirm, open }) {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const { t } = useTranslation('history')
  const { register, handleSubmit, errors, clearErrors } = useForm()

  React.useEffect(() => clearErrors(), [])

  const onSubmit = data => {
    console.log(typeof data['datetime-to'], data['datetime-to'])
    console.log(
      format(
        startOfDay(new Date(data['datetime-to'])),
        "yyyy-MM-dd'T'HH:mm" // 'yyyy-MM-dd HH:mm:ss'
      )
    )
    onConfirm({ ...data })
  }

  const dateFrom = format(startOfDay(new Date()), "yyyy-MM-dd'T'HH:mm")
  const dateTo = format(endOfDay(new Date()), "yyyy-MM-dd'T'HH:mm")

  return (
    <form>
      <Dialog
        fullScreen={isMobile}
        open={open}
        onClose={onCancel}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle
          id='responsive-dialog-title'
          className={classes.dialogTitle}
        >
          {t('dialog-title')}
        </DialogTitle>

        <DialogContent>
          <TextField
            id='datetime-from'
            name='datetime-from'
            label={t('dialog-date-from')}
            type='datetime-local'
            defaultValue={dateFrom}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              className: classes.input
            }}
            inputRef={register({
              required: true
            })}
            error={!!errors.code}
            size='small'
          />
          <TextField
            id='datetime-to'
            name='datetime-to'
            label={t('dialog-date-to')}
            type='datetime-local'
            defaultValue={dateTo}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              className: classes.input
            }}
            inputRef={register({
              required: true
            })}
            error={!!errors.code}
            size='small'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color='default' autoFocus>
            {t('dialog-cancel')}
          </Button>
          <Button onClick={handleSubmit(onSubmit)} color='primary' autoFocus>
            {t('dialog-confirm')}
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  )
}
