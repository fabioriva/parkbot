import React from 'react'
import Alert from '@mui/material/Alert'
import DeviceActive from 'src/components/device/DeviceActive'
import useTranslation from 'next-translate/useTranslation'

export default function DeviceInfo ({ alarms }) {
  const { t } = useTranslation('alarms')

  return (
    <React.Fragment>
      {alarms.length === 0 && <Alert severity='success'>{t('al-ready')}</Alert>}
      {alarms.length > 0 && <DeviceActive alarms={alarms} />}
    </React.Fragment>
  )
}
