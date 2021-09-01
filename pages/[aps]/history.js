import React from 'react'
import { format, endOfDay, startOfDay } from 'date-fns'
import fetch from 'src/lib/fetch'
import { getCookies, getTokenCookie } from 'src/lib/authCookies'
import { aps } from 'src/constants/aps'
import History from 'src/components/history/History'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <History {...props} />

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

  const { APS_NAME, DEVICES, MODES, OPERATIONS } = await import(
    `src/constants/${ctx.params.aps}`
  )

  var hrstart = process.hrtime()

  const dateFrom = format(startOfDay(new Date()), 'yyyy-MM-dd HH:mm:ss')
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
      aps: cookies.aps, // ctx.params.aps,
      apsName: APS_NAME,
      locale: cookies.i18n,
      json,
      token,
      executionTime: hrend
      // devices: DEVICES,
      // modes: MODES,
      // operations: OPERATIONS
    }
  }
}

export default withAuthSync(Page)
