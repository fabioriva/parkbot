import React from 'react'
import { format, endOfDay, startOfDay, subDays } from 'date-fns'
import fetch, { profile } from 'src/lib/fetch'
import { getCookies } from 'src/lib/authCookies'
import { aps_ } from 'src/constants/aps'
import { HISTORY, hasRole } from '/src/constants/auth'
import History from 'src/components/history/History'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <History {...props} />

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

  if (!hasRole(user, [HISTORY])) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  var hrstart = process.hrtime()

  const dateFrom = format(
    subDays(startOfDay(new Date()), 1),
    'yyyy-MM-dd HH:mm:ss'
  )
  const dateTo = format(endOfDay(new Date()), 'yyyy-MM-dd HH:mm:ss')
  const filter = 'a'
  const query = `system=0&dateFrom=${dateFrom}&dateTo=${dateTo}&filter=${filter}&device=0&number=0`
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/history?${query}`
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
