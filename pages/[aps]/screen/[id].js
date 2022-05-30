import React from 'react'
import fetch from 'src/lib/fetch'
import authSSR from 'src/lib/authSSR'
import { DSS } from '/src/constants/auth'
import Screen from 'src/components/dss/Screen';
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <Screen {...props} />

export async function getServerSideProps (ctx) {
  const props = await authSSR(ctx, ctx.params.aps, DSS)
  if (props.notFound || props.redirect) return props

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/dss/${ctx.params.id}`
  const json = await fetch(url, {
    headers: { Authorization: 'Bearer ' + props.token }
  })

  return { props: { ...props, json } }
}

export default withAuthSync(Page)
