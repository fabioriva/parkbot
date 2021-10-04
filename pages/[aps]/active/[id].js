import React from 'react'
import { useRouter } from 'next/router'
import { useData } from 'src/lib/useWebSocket'
import fetch, { profile } from 'src/lib/fetch'
import { getCookies } from 'src/lib/authCookies'
import { aps_ } from 'src/constants/aps'
import { ALARMS, hasRole } from 'src/constants/auth'
import Layout from 'src/components/Layout'
import DeviceInfo from 'src/components/device/DeviceInfo'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => {
  const router = useRouter()
  const { id } = router.query

  if (props.json.err)
    return (
      <Layout {...props} pageTitle={'device.a.name'}>
        <div>Fetch Error</div>
      </Layout>
    )

  const [overview, setOverview] = React.useState(props.json)

  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/overview`
  const { data } = useData(url, {
    initialData: overview,
    page: 'overview'
  })
  React.useEffect(() => setOverview(data), [data])

  // const device = props.json.devices[id]
  const device = overview.devices[id]

  // return props.json.err ? (
  //   <Error {...props} error='Error 500' />
  // ) : (
  //   <Layout {...props} pageTitle={device.a.name}>
  //     <DeviceInfo alarms={device.alarms} />
  //   </Layout>
  // )

  return (
    <Layout {...props} pageTitle={device.a.name}>
      <DeviceInfo alarms={device.alarms} />
    </Layout>
  )
}

export async function getServerSideProps (ctx) {
  const APS = aps_(ctx.params.aps)

  if (APS === undefined) {
    return {
      notFound: true
    }
  }

  const { aps, i18n, token } = await getCookies(ctx.req)

  if (ctx.params.aps !== aps || !token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const user = await profile(token)

  if (!hasRole(user, [ALARMS])) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  var hrstart = process.hrtime()

  // const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/device/${ctx.params.id}`
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/overview`
  const json = await fetch(url, {
    headers: { Authorization: 'Bearer ' + token }
  })

  var hrend = process.hrtime(hrstart)

  return {
    props: {
      aps: APS.ns,
      apsName: APS.name,
      locale: i18n,
      json,
      user,
      token,
      executionTime: hrend
    }
  }
}

export default withAuthSync(Page)
