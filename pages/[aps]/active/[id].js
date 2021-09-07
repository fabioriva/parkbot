import React from 'react'
import fetch from 'src/lib/fetch'
import { getCookies, getTokenCookie } from 'src/lib/authCookies'
import { aps } from 'src/constants/aps'
import Error from 'src/components/Error'
import Layout from 'src/components/Layout'
import DeviceInfo from 'src/components/device/DeviceInfo'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props =>
  props.json.err ? (
    <Error {...props} error='Error 500' />
  ) : (
    <Layout {...props} pageTitle={props.json.device.a.name}>
      <DeviceInfo alarms={props.json.device.alarms} />
    </Layout>
  )

export async function getServerSideProps (ctx) {
  if (aps(ctx.params.aps) === -1) {
    return {
      notFound: true
    }
  }

  const cookies = await getCookies(ctx.req)

  if (ctx.params.aps !== cookies.aps) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const token = await getTokenCookie(ctx.req)
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const { APS_NAME } = await import(`src/constants/${ctx.params.aps}`)

  var hrstart = process.hrtime()

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/device/${ctx.params.id}`
  const json = await fetch(url, {
    headers: { Authorization: 'Bearer ' + token }
  })

  var hrend = process.hrtime(hrstart)

  return {
    props: {
      aps: cookies.aps, // ctx.params.aps,
      apsName: APS_NAME,
      locale: cookies.i18n,
      json,
      token,
      executionTime: hrend
    }
  }
}

export default withAuthSync(Page)
