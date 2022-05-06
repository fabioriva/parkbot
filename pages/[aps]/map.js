import React from 'react'
import dynamic from 'next/dynamic'
import fetch from 'src/lib/fetch'
import authSSR from 'src/lib/authSSR'
import { MAP } from '/src/constants/auth'
import withMap from 'src/hocs/withMap'
import withAuthSync from 'src/hocs/withAuthSync'

const componentList = {
  alumim: dynamic(() => import('src/components/map/alumim')),
  bmc: dynamic(() => import('src/components/map/bmc')),
  chandan: dynamic(() => import('src/components/map/chandan')),
  chiattone: dynamic(() => import('src/components/map/chiattone')),
  donini: dynamic(() => import('src/components/map/donini')),
  ironbank: dynamic(() => import('src/components/map/ironbank')),
  knl: dynamic(() => import('src/components/map/kn')),
  knr: dynamic(() => import('src/components/map/kn')),
  muse: dynamic(() => import('src/components/map/muse')),
  nhidcl: dynamic(() => import('src/components/map/nhidcl')),
  nyu: dynamic(() => import('src/components/map/nyu')),
  qihe1: dynamic(() => import('src/components/map/qihe')),
  qihe2: dynamic(() => import('src/components/map/qihe')),
  teenmurty: dynamic(() => import('src/components/map/teenmurty')),
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
  const hrstart = process.hrtime()

  const props = await authSSR(ctx, ctx.params.aps, MAP)
  if (props.notFound || props.redirect) return props

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/map`
  const json = await fetch(url, {
    headers: { Authorization: 'Bearer ' + props.token }
  })

  const hrend = process.hrtime(hrstart)

  return { props: { ...props, json, executionTime: hrend } }
}

export default withAuthSync(withMap(Page))
