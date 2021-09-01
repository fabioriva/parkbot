import React from 'react'
import Alert from '@material-ui/core/Alert'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import DeviceActive from 'src/components/device/DeviceActive'
import useTranslation from 'next-translate/useTranslation'

export default function DeviceInfo ({ alarms }) {
  const { t } = useTranslation('alarms')

  return (
    <Paper sx={{ mb: 3 }}>
      {alarms.length === 0 && <Alert severity='success'>{t('al-ready')}</Alert>}
      {alarms.length > 0 && <DeviceActive alarms={alarms} />}
    </Paper>
  )
}
