import { useState, useEffect } from 'react'
import Error from 'next/error'
import { useRouter } from 'next/router'
import { useData } from 'src/lib/websocket'
import Layout from 'src/components/Layout'
import Actuator from 'src/components/system/Actuator'
import Motor from 'src/components/system/Motor'
import Vfd from 'src/components/system/Vfd'
// material-ui
import Grid from '@material-ui/core/Grid'

export default function Cards ({ definitions, json, user }) {
  const router = useRouter()
  const { aps, device } = router.query
  console.log(aps, device)
  const { apsName, backendUrl, websockUrl, userRole } = definitions

  if (json.err) return <Error statusCode={500} />

  const [overview, setOverview] = useState(json)
  const { mesg } = useData('overview', `${websockUrl}?channel=ch1`)

  useEffect(() => {
    if (mesg) {
      setOverview(mesg)
    }
  }, [mesg])

  console.log(overview.devices[device])

  const d = overview.devices[device]

  return (
    <Layout
      apsName={apsName}
      pageTitle={d.a.name} // {t('title')}
      socket={`${websockUrl}?channel=ch2`}
      user={user}
    >
      <Grid container spacing={3}>
        {d.g?.map((item, key) => (
          <Grid item key={key} xs={12} md={6} lg={4} xl={3}>
            <Motor item={item} />
          </Grid>
        ))}
        {d.h?.map((item, key) => (
          <Grid item key={key} xs={12} md={6} lg={4} xl={3}>
            <Vfd item={item} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {d.f?.map((item, key) => (
          <Grid item key={key} xs={12} md={6} lg={4} xl={3}>
            <Actuator item={item} />
          </Grid>
        ))}
      </Grid>

      {/* <Grid container spacing={3}>
        {d.h?.map((item, key) => (
          <Grid item key={key} xs={12} md={6} lg={4} xl={3}>
            <Vfd item={item} />
          </Grid>
        ))}
      </Grid> */}
    </Layout>
  )
}
