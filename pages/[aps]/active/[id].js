import React from 'react'
import { useRouter } from 'next/router'
import { useData } from 'src/lib/useWebSocket'
import useTranslation from 'next-translate/useTranslation'
import fetch from 'src/lib/fetch'
import authSSR from 'src/lib/authSSR'
import { ALARMS } from 'src/constants/auth'
import Error from 'src/components/Error'
import Layout from 'src/components/Layout'
import AlarmsActive from 'src/components/device/AlarmsActive'
// import DeviceInfo from 'src/components/device/DeviceInfo'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => {
  const router = useRouter()
  const { id } = router.query
  const { t } = useTranslation('alarms')

  if (props.json.err) return <Error {...props} pageTitle={t('page-title')} />

  const [overview, setOverview] = React.useState(props.json)

  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/overview`
  const { data } = useData(url, {
    initialData: overview,
    page: 'overview'
  })
  React.useEffect(() => setOverview(data), [data])

  // const device = props.json.devices[id]
  const device = overview.devices[id]

  return (
    <Layout {...props} pageTitle={t('al-title', { device: device.a.name })}>
      {/* <DeviceInfo alarms={device.alarms} /> */}
      {device.alarms.length > 0 && <AlarmsActive alarms={device.alarms} />}
    </Layout>
  )
}

export async function getServerSideProps (ctx) {
  const hrstart = process.hrtime()

  const props = await authSSR(ctx, ctx.params.aps, ALARMS)
  if (props.notFound || props.redirect) return props

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/overview`
  const json = await fetch(url, {
    headers: { Authorization: 'Bearer ' + props.token }
  })

  const hrend = process.hrtime(hrstart)

  return { props: { ...props, json, executionTime: hrend } }
}

export default withAuthSync(Page)
