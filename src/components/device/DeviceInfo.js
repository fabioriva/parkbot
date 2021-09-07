import React from 'react'
import Alert from '@mui/material/Alert'
import Paper from '@mui/material/Paper'
import DeviceActive from 'src/components/device/DeviceActive'
import useTranslation from 'next-translate/useTranslation'

export default function DeviceInfo ({ alarms }) {
  const { t } = useTranslation('alarms')

  return (
    <React.Fragment>
      <Paper sx={{ mb: 3 }}>
        {alarms.length === 0 && (
          <Alert severity='success'>{t('al-ready')}</Alert>
        )}
      </Paper>
      {alarms.length > 0 && <DeviceActive alarms={alarms} />}
    </React.Fragment>
  )
}
