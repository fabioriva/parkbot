import React from 'react'
import { format, compareDesc, endOfDay, startOfDay } from 'date-fns'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Stack from '@material-ui/core/Stack'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import useTranslation from 'next-translate/useTranslation'
import DateTimePicker from 'src/components/pickers/DateTimePicker'

export default function HistoryQueryDialog ({
  locale,
  onCancel,
  onConfirm,
  open
}) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const { t } = useTranslation('history')

  const [from, setFrom] = React.useState(startOfDay(new Date()))
  const [to, setTo] = React.useState(endOfDay(new Date()))
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    console.log('compareDesc', compareDesc(from, to), from, to)
    compareDesc(from, to) === -1 ? setError(true) : setError(false)
  }, [from, to])

  const handleConfirm = (from, to) => {
    console.log(typeof from, from)
    console.log(typeof to, to)
    onConfirm(
      format(from, "yyyy-MM-dd'T'HH:mm"),
      format(to, "yyyy-MM-dd'T'HH:mm")
    )
  }

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby='history-query'
      fullScreen={isMobile}
    >
      <DialogTitle id='dialog-title'>{t('dialog-title')}</DialogTitle>
      <DialogContent>
        <Stack direction={isMobile ? 'column' : 'row'} spacing={3} mt={1}>
          <DateTimePicker
            label={t('dialog-date-from')}
            locale={locale}
            value={from}
            error={error}
            onChange={dt => setFrom(dt)}
          />
          <DateTimePicker
            label={t('dialog-date-to')}
            locale={locale}
            value={to}
            error={error}
            onChange={dt => setTo(dt)}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onCancel}>
          {t('dialog-cancel')}
        </Button>
        <Button
          color='primary'
          onClick={() => handleConfirm(from, to)}
          disabled={error}
        >
          {t('dialog-confirm')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
