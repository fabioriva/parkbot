import * as React from 'react'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
// import DeviceActive from 'src/components/device/DeviceActive'
import useTranslation from 'next-translate/useTranslation'

export default function DeviceInfo ({ alarms, href }) {
  const { t } = useTranslation('alarms')
  const [open, setOpen] = React.useState(true)

  return (
    <React.Fragment>
      {/* {alarms.length === 0 && open && (
        <Alert severity='success' onClose={() => setOpen(false)}>
          {t('al-ready')}
        </Alert>
      )} */}
      {alarms.length > 0 && (
        <Alert
          severity='error'
          action={
            <Button color='inherit' size='small' href={href}>
              MORE
            </Button>
          }
        >
          {t('al-count', { count: alarms.length })}
        </Alert>
      )}
      {/* {alarms.length > 0 && <DeviceActive alarms={alarms} />} */}
    </React.Fragment>
  )
}
