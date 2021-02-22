import Error from 'next/error'
import { useState, useEffect } from 'react'
import { useData } from 'src/lib/websocket'
import Layout from 'src/components/Layout'
import Motor from 'src/components/device/Motor'
import useTranslation from 'next-translate/useTranslation'
// material-ui
import Grid from '@material-ui/core/Grid'

export default function Cards ({ definitions, json, user }) {
  const { t } = useTranslation('system')

  const { apsName, backendUrl, websockUrl, userRole } = definitions

  if (json.err) return <Error statusCode={500} />

  const { mesg } = useData('overview', `${websockUrl}?channel=ch1`)

  const [overview, setOverview] = useState(json)

  useEffect(() => {
    if (mesg) {
      setOverview(mesg)
    }
  }, [mesg])

  // console.log(overview.devices[0])

  // const flap = overview.devices[3].f[0]
  // const lock = overview.devices[3].f[1]

  return (
    <Layout
      apsName={apsName}
      pageTitle={overview.devices[0].a.name} // {t('title')}
      socket={`${websockUrl}?channel=ch2`}
      user={{ locale: 'it' }} // !!!!!!!!!!!!!!!!!!!!!!! dummy user
    >
      <Grid container>
        {overview.devices[0].f.map((item, key) => (
          <Grid item key={key} xs={12} lg={6}>
            <Motor motor={item} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}
