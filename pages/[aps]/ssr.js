import React from 'react'
import fetch from 'src/lib/fetchJson'
import { withSnackbar } from 'notistack'
import { getCookies, getTokenCookie } from 'src/lib/auth-cookies'
import { aps } from 'src/constants/aps'
import Cards from 'src/components/cards/CardSSR'

const Page = props => <Cards {...props} />

export async function getServerSideProps (ctx) {
  if (aps(ctx.params.aps) === -1) {
    return {
      notFound: true
    }
  }

  const token = await getTokenCookie(ctx.req)
  // const { aps, locale, token } = await getCookies(ctx.req)
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const { APS_NAME } = await import(`src/constants/${ctx.params.aps}`)

  const cookies = await getCookies(ctx.req)

  var start = new Date()
  var hrstart = process.hrtime()

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${cookies['parkbot-aps']}/ssr`
  const json = await fetch(url, {
    headers: { Authorization: 'Bearer ' + token }
  })
  // const res = await global.fetch(url, {
  //   headers: { Authorization: 'Bearer ' + token }
  // })
  // console.log(res)
  // const json = await res.json()
  // console.log(json)

  var end = new Date() - start,
    hrend = process.hrtime(hrstart)

  console.info('Execution time: %dms', end)
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)

  return {
    props: {
      aps: cookies['parkbot-aps'],
      apsName: APS_NAME,
      locale: cookies['parkbot-i18n'],
      // pageTitle: 'title-cards',
      json,
      executionTime: end
    }
  }
}

export default withSnackbar(Page)
