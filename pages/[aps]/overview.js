import React from 'react'
import fetch, { profile } from 'src/lib/fetch'
import { getCookies, getTokenCookie } from 'src/lib/authCookies'
import { aps } from 'src/constants/aps'
import Overview from 'src/components/overview/Overview'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <Overview {...props} />

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

  const user = await profile(token)

  const { APS_NAME } = await import(`src/constants/${ctx.params.aps}`)

  var hrstart = process.hrtime()

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/overview`
  const json = await fetch(url, {
    headers: { Authorization: 'Bearer ' + token }
  })

  var hrend = process.hrtime(hrstart)

  if (json.err) {
    return {
      redirect: {
        destination: `/${ctx.params.aps}/error`,
        permanent: false
      }
    }
  }

  return {
    props: {
      aps: cookies.aps, // ctx.params.aps,
      apsName: APS_NAME,
      locale: cookies.i18n,
      json,
      token,
      user,
      executionTime: hrend
    }
  }
}

export default withAuthSync(Page)
