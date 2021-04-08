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

export default function Cards ({ definitions, json, user }) {
  const { apsName, backendUrl, websockUrl } = definitions

  if (json.err) {
    return (
      <Error
        definitions={definitions}
        message='Error 500'
        title='Device Info'
        user={user}
      />
    )
  }

  const router = useRouter()
  const { aps, device } = router.query

  const [data, setData] = useState(json)
  const { mesg } = useData('diagnostic', `${websockUrl}?channel=ch1`)

  // const index = device.a.id - 1

  useEffect(() => {
    if (mesg) {
      setData(mesg[device])
    }
  }, [mesg])

  return (
    <Layout
      apsName={apsName}
      pageTitle={data.a.name} // {t('title')}
      socket={`${websockUrl}?channel=ch2`}
      user={user}
    >
      <Grid container spacing={3}>
        {data.f?.map((item, key) => (
          <Grid item key={key} xs={12} md={6} lg={4} xl={3}>
            <Actuator item={item} />
          </Grid>
        ))}
        {data.g?.map((item, key) => (
          <Grid item key={key} xs={12} md={6} lg={4} xl={3}>
            <Motor item={item} />
          </Grid>
        ))}
        {data.h?.map((item, key) => (
          <Grid item key={key} xs={12} md={6} lg={4} xl={3}>
            <Vfd item={item} />
          </Grid>
        ))}
        {data.i !== undefined && (
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <Silomat item={data.i} />
          </Grid>
        )}
      </Grid>
    </Layout>
  )
}
