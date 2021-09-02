import React from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import Grid from '@mui/material/Grid'
import Layout from 'src/components/Layout'

import DeviceInfo from 'src/components/device/DeviceInfo'
import Inverter from 'src/components/device/Inverter'
import Motor from 'src/components/device/Motor'
import { useData } from 'src/lib/useWebSocket'

export default function DeviceView (props) {
  const { t } = useTranslation('overview')

  const router = useRouter()
  const { id } = router.query

  const [deviceView, setDeviceView] = React.useState(props.json)

  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/diagnostic/${id}`
  const { data } = useData(url, {
    initialData: deviceView,
    page: 'diagnostic'
  })
  React.useEffect(() => setDeviceView(data), [data])

  const { device, inverters, motors } = deviceView
  // console.log(deviceView)
  return (
    <Layout
      {...props}
      pageTitle={device.a.name}
      // pageTitle={t('device-view-title', { name: device.a.name })}
    >
      <DeviceInfo alarms={device.alarms} />

      <Grid container spacing={1}>
        {inverters.map((item, key) => (
          <Grid item key={key} xs={12} md={6} lg={3} xl={3}>
            <Inverter {...item} />
          </Grid>
        ))}
        {motors.map((item, key) => (
          <Grid item key={key} xs={12} md={6} lg={4} xl={3}>
            <Motor {...item} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}
