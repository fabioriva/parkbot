import React from 'react'
import { useRouter } from 'next/router'
import fetch from 'src/lib/fetch'
import { getCookies } from 'src/lib/authCookies'
import { aps_ } from 'src/constants/aps'
import Error from 'src/components/Error'
import Layout from 'src/components/Layout'
import DeviceInfo from 'src/components/device/DeviceInfo'
import withAuthSync from 'src/hocs/withAuthSync'

// const Page = props =>
//   props.json.err ? (
//     <Error {...props} error='Error 500' />
//   ) : (
//     <Layout {...props} pageTitle={props.json.device.a.name}>
//       <DeviceInfo alarms={props.json.device.alarms} />
//     </Layout>
//   )

const Page = props => {
  const router = useRouter()
  const { id } = router.query
  const device = props.json.devices[id]

  return props.json.err ? (
    <Error {...props} error='Error 500' />
  ) : (
    <Layout {...props} pageTitle={device.a.name}>
      <DeviceInfo alarms={device.alarms} />
    </Layout>
  )
}

export async function getServerSideProps (ctx) {
  const APS = aps_(ctx.params.aps)

  if (APS === undefined || ctx.params.aps !== APS.ns) {
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
      token,
      executionTime: hrend
    }
  }
}

export default withAuthSync(Page)
