import React from 'react'
import fetch, { profile } from 'src/lib/fetch'
import { getCookies } from 'src/lib/authCookies'
import { aps_ } from 'src/constants/aps'
import { DEVICE, hasRole } from '/src/constants/auth'
// import DeviceView from 'src/components/device/DeviceView'
import DeviceView from 'src/components/lab/device/DeviceView'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <DeviceView {...props} />

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

  if (!hasRole(user, [DEVICE])) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  var hrstart = process.hrtime()

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/device/${ctx.params.id}`
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
