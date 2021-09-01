import React from 'react'
import { format, startOfDay } from 'date-fns'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import useTranslation from 'next-translate/useTranslation'
import DatePicker from 'src/components/pickers/DatePicker'

export default function OperationsQueryDialog ({
  locale,
  onCancel,
  onConfirm,
  open
}) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const { t } = useTranslation('statistics')

  const [date, setDate] = React.useState(startOfDay(new Date()))

  const [error, setError] = React.useState(false)

  const handleConfirm = date => {
    console.log(typeof date, date)
    onConfirm(format(date, 'yyyy-MM-dd'))
  }

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby='statistics-query'
      fullScreen={isMobile}
    >
      <DialogTitle id='dialog-title'>{t('dialog-title')}</DialogTitle>
      <DialogContent>
        <Box mt={1}>
          <DatePicker
            label={t('dialog-date')}
            locale={locale}
            value={date}
            error={error}
            onChange={d => setDate(d)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onCancel}>
          {t('dialog-cancel')}
        </Button>
        <Button
          color='primary'
          onClick={() => handleConfirm(date)}
          disabled={error}
        >
          {t('dialog-confirm')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
