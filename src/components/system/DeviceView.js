import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useData } from 'src/lib/useWebSocket'
import Layout from 'src/components/Layout'
import Error from 'src/components/Error'
import Actuator from 'src/components/system/Actuator'
import Motor from 'src/components/system/Motor'
import Silomat from './SilomatInfo'
import Vfd from 'src/components/system/Vfd'
// material-ui
import Grid from '@material-ui/core/Grid'

export default function Cards (props) {
  const { definitions, json } = props

  if (json.err) {
    return <Error {...props} message='Error 500' />
  }

  const router = useRouter()
  const { id } = router.query

  const [device, setDevice] = useState(json)

  const { data } = useData(`${definitions.websockUrl}?channel=diagnostic`, {
    initialData: null,
    page: 'diagnostic'
  })
  useEffect(() => {
    if (data) {
      setDevice(data[id])
    }
  }, [data])

  return (
    <Layout {...props}>
      <Grid container spacing={3}>
        {device.f?.map((item, key) => (
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
        )}
      </Grid>
    </Layout>
  )
}
