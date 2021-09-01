import React from 'react'
import fetch from 'src/lib/fetch'
import { getCookies, getTokenCookie } from 'src/lib/authCookies'
import { aps } from 'src/constants/aps'
import Dashboard from 'src/components/dashboard/Dashboard'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <Dashboard {...props} />

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

  // TODO: check user role for this page
  // we need user.roles also!
  // corrige user-role is verified in the backend uws so we don't need to check here

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

  // var start = new Date()
  var hrstart = process.hrtime()

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/dashboard`
  const json = await fetch(url, {
    headers: { Authorization: 'Bearer ' + token }
  })

  // var end = new Date() - start
  var hrend = process.hrtime(hrstart)
  // console.info('Execution time: %dms', end)
  // console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)

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
