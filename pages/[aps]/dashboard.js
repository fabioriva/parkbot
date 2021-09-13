import React from 'react'
import fetch from 'src/lib/fetch'
import { getCookies } from 'src/lib/authCookies'
import { aps_ } from 'src/constants/aps'
import Dashboard from 'src/components/dashboard/Dashboard'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <Dashboard {...props} />

export async function getServerSideProps (ctx) {
  // TODO: check user role for this page
  // we need user.roles also!
  // corrige user-role is verified in the backend uws so we don't need to check here
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

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/dashboard`
  const json = await fetch(url, {
    headers: { Authorization: 'Bearer ' + token }
  })

  var hrend = process.hrtime(hrstart)
  // console.info('Execution time: %dms', end)
  // console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)

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
