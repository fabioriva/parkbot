import React from 'react'
import fetch, { profile } from 'src/lib/fetch'
import { getCookies } from 'src/lib/authCookies'
import { aps_ } from 'src/constants/aps'
import { OVERVIEW, hasRole } from '/src/constants/auth'
import Overview from 'src/components/overview/muse'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <Overview {...props} />

export async function getServerSideProps (ctx) {
  const APS = aps_('muse')

  if (APS === undefined) {
    return {
      notFound: true
    }
  }

  const { aps, i18n, token } = await getCookies(ctx.req)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const user = await profile(token)

  if (!hasRole(user, [OVERVIEW])) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  var hrstart = process.hrtime()

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/muse/overview`
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
