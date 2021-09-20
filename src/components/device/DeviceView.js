import React from 'react'
import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid'
import Layout from 'src/components/Layout'
import DeviceInfo from 'src/components/device/DeviceInfo'
import Inverter from 'src/components/device/Inverter'
import Motor from 'src/components/device/Motor'
import { useData } from 'src/lib/useWebSocket'

export default function DeviceView (props) {
  const router = useRouter()
  const { id } = router.query

  const [deviceView, setDeviceView] = React.useState(props.json)

  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/diagnostic/${id}`
  const { data, loading } = useData(url, {
    initialData: deviceView,
    page: 'diagnostic'
  })
  React.useEffect(() => setDeviceView(data), [data])

  const { device, inverters, motors, silomat } = deviceView

  return (
    <Layout
      {...props}
      pageTitle={device.a.name}
      // pageTitle={t('device-view-title', { name: device.a.name })}
    >
      <DeviceInfo alarms={device.alarms} />
      {/* <Divider textAlign='left'>Inverters</Divider> */}
      <Grid container spacing={1} mt={0}>
        {inverters.map((item, key) => (
          <Grid item key={key} xs={12} md={6} lg={3} xl={3}>
            <Inverter {...item} loading={loading} />
          </Grid>
        ))}
      </Grid>

      {/* <Divider textAlign='left'>Motors</Divider> */}
      <Grid container spacing={1} mt={0}>
        {motors.map((item, key) => (
          <Grid item key={key} xs={12} md={6} lg={4} xl={3}>
            <Motor {...item} loading={loading} subheader={<span>Motor</span>} />
          </Grid>
        ))}
      </Grid>
      {/* <Divider textAlign='left'>Silomat&trade;</Divider> */}
      {silomat !== undefined && (
        <Grid container spacing={1} mt={0}>
          <React.Fragment>
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <Motor
                {...silomat.M1}
                loading={loading}
                subheader={<span>Silomat&trade;</span>}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <Motor
                {...silomat.M2}
                loading={loading}
                subheader={<span>Silomat&trade;</span>}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <Motor
                {...silomat.M3}
                loading={loading}
                subheader={<span>Silomat&trade;</span>}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <Motor
                {...silomat.M4}
                loading={loading}
                subheader={<span>Silomat&trade;</span>}
              />
            </Grid>
          </React.Fragment>
        </Grid>
      )}

      {/* <Grid container spacing={1}>
        {inverters.map((item, key) => (
          <Grid item key={key} xs={12} md={6} lg={3} xl={3}>
            <Inverter {...item} />
          </Grid>
        ))}
        {motors.map((item, key) => (
          <Grid item key={key} xs={12} md={6} lg={4} xl={3}>
            <Motor {...item} subheader={<span>Motor</span>} />
          </Grid>
        ))}
        <React.Fragment>
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <Motor {...silomat.M1} subheader={<span>Silomat&trade;</span>} />
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <Motor {...silomat.M2} subheader={<span>Silomat&trade;</span>} />
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <Motor {...silomat.M3} subheader={<span>Silomat&trade;</span>} />
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <Motor {...silomat.M4} subheader={<span>Silomat&trade;</span>} />
          </Grid>
        </React.Fragment>
      </Grid> */}
    </Layout>
  )
}
