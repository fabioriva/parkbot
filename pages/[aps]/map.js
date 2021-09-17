import React from 'react'
import dynamic from 'next/dynamic'
import fetch from 'src/lib/fetch'
import { getCookies } from 'src/lib/authCookies'
import { aps_ } from 'src/constants/aps'
import withMap from 'src/hocs/withMap'
import withAuthSync from 'src/hocs/withAuthSync'

const componentList = {
  bmc: dynamic(() => import('src/components/map/bmc')),
  chandan: dynamic(() => import('src/components/map/chandan')),
  ironbank: dynamic(() => import('src/components/map/ironbank')),
  nhidcl: dynamic(() => import('src/components/map/nhidcl')),
  trumpeldor: dynamic(() => import('src/components/map/trumpeldor')),
  vl: dynamic(() => import('src/components/map/vl')),
  wallstreet: dynamic(() => import('src/components/map/wallstreet')),
  washingtonblvd: dynamic(() => import('src/components/map/washingtonblvd'))
}

const Page = props => {
  const DynamicComponent = componentList[props.aps]
  return <DynamicComponent {...props} />
}

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

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/map`
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

export default withAuthSync(withMap(Page))
