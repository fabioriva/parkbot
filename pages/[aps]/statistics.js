import React from 'react'
import { format, subDays } from 'date-fns'
import fetch from 'src/lib/fetch'
import { getCookies, getTokenCookie } from 'src/lib/authCookies'
import { aps } from 'src/constants/aps'
import Operations from 'src/components/statistics/Operations'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <Operations {...props} />

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

  const date = format(subDays(new Date(), 1), 'yyyy-MM-dd')

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/statistics?dateString=${date}`
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
