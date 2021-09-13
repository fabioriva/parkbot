import React from 'react'
import { format, subDays } from 'date-fns'
import fetch from 'src/lib/fetch'
import { getCookies } from 'src/lib/authCookies'
import { aps_ } from 'src/constants/aps'
import Operations from 'src/components/statistics/Operations'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <Operations {...props} />

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

  const date = format(subDays(new Date(), 1), 'yyyy-MM-dd')

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/statistics?dateString=${date}`
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
