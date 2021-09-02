import React from 'react'
import { format, startOfDay } from 'date-fns'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
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
