import React from 'react'
import dynamic from 'next/dynamic'
import fetch from 'src/lib/fetch'
import { getCookies, getTokenCookie } from 'src/lib/authCookies'
import { aps } from 'src/constants/aps'
import withMap from 'src/hocs/withMap'
import withAuthSync from 'src/hocs/withAuthSync'

const componentList = {
  // bassano: dynamic(() => import('src/aps/bassano/Map')),
  bmc: dynamic(() => import('src/components/map/bmc')),
  // chandan: dynamic(() => import('src/aps/chandan/Map')),
  // vl: dynamic(() => import('src/aps/vl/Map')),
  wallstreet: dynamic(() => import('src/components/map/wallstreet')),
  washingtonblvd: dynamic(() => import('src/components/map/washingtonblvd'))
}

const Page = props => {
  const DynamicComponent = componentList[props.aps]
  return <DynamicComponent {...props} />
}

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

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/map`
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

export default withAuthSync(withMap(Page))
