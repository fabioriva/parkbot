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

  const cookies = await getCookies(ctx.req)

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

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/ssr`
  const json = await fetch(url, {
    headers: { Authorization: 'Bearer ' + token }
  })

  // var end = new Date() - start
  var hrend = process.hrtime(hrstart)
  // console.info('Execution time: %dms', end)
  // console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)

  return {
    props: {
      aps: ctx.params.aps, // cookies.aps,
      apsName: APS_NAME,
      locale: cookies.i18n,
      json,
      token,
      executionTime: hrend
    }
  }
}

export default withSnackbar(Page)
