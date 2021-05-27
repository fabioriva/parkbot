import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useData } from 'src/lib/useWebSocket'
import Layout from 'src/components/Layout'
import Error from 'src/components/Error'
// import Alarms from 'src/components/alarms/AlarmsList'
// import Actuator from 'src/components/system/Actuator'
// import Motor from 'src/components/system/Motor'
// import Silomat from './SilomatInfo'
// import Vfd from 'src/components/system/Vfd'
import Inverter from 'src/components/system/Inverter'
import Motor from 'src/components/system/Motor'
import Silomat from './Silomat'
import Widget from './Widget'
// material-ui
import Grid from '@material-ui/core/Grid'

export default function Cards (props) {
  const { definitions, json } = props

  if (json.err) {
    return <Error {...props} message='Error 500' />
  }

  const router = useRouter()
  const { id } = router.query

  // console.log(json)

  const [device, setDevice] = useState(json)

  // console.log(device.device)

  // const { data } = useData(`${definitions.websockUrl}?channel=diagnostic`, {
  const { data } = useData(definitions.websockUrl.concat('/diagnostic/' + id), {
    initialData: json,
    page: 'diagnostic'
  })
  useEffect(() => {
    // if (data) {
    setDevice(data) // [id])
    // }
  }, [data])

  const { inverters, motors } = device

  return (
    <Layout {...props}>
      <Grid container spacing={3}>
        {/* <Grid item xs={12}>
          <Widget action={[]} motion={false} title='Active Alarms'>
            <Alarms alarms={device.device.alarms} />
          </Widget>
        </Grid> */}
        {inverters.map((item, key) => (
          <Grid item key={key} xs={12} md={6} lg={3} xl={3}>
            <Inverter {...item} />
          </Grid>
        ))}
        {motors.map((item, key) => (
          <Grid item key={key} xs={12} md={6} lg={3} xl={3}>
            <Motor {...item} />
          </Grid>
        ))}
        <Grid item xs={12} md={6} lg={3} xl={3}>
          <Widget
            action={[]}
            motion={
              device.device.e[8].status ||
              device.device.e[9].status ||
              device.device.e[10].status
            }
            title='Silomat'
          >
            <Silomat data={device.device.e} />
          </Widget>
        </Grid>
        {/* {device.f?.map((item, key) => (
          <Grid item key={key} xs={12} md={6} lg={4} xl={3}>
            <Actuator item={item} />
          </Grid>
        ))}
        {device.g?.map((item, key) => (
          <Grid item key={key} xs={12} md={6} lg={4} xl={3}>
            <Motor item={item} />
          </Grid>
        ))}
        {device.h?.map((item, key) => (
          <Grid item key={key} xs={12} md={6} lg={4} xl={3}>
            <Vfd item={item} />
          </Grid>
        ))}
        {device.i !== undefined && (
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <Silomat item={device.i} />
          </Grid>
        )} */}
      </Grid>
    </Layout>
  )
}
