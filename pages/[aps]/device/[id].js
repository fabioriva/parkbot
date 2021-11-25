import React from 'react'
import fetch from 'src/lib/fetch'
import authSSR from 'src/lib/authSSR'
import { DEVICE } from '/src/constants/auth'
// import DeviceView from 'src/components/device/DeviceView'
import DeviceView from 'src/components/lab/device/DeviceView'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <DeviceView {...props} />

export async function getServerSideProps (ctx) {
  const hrstart = process.hrtime()

  const props = await authSSR(ctx, ctx.params.aps, DEVICE)
  if (props.notFound || props.redirect) return props

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/device/${ctx.params.id}`
  const json = await fetch(url, {
    headers: { Authorization: 'Bearer ' + props.token }
  })

  const hrend = process.hrtime(hrstart)

  return { props: { ...props, json, executionTime: hrend } }
}

export default withAuthSync(Page)
