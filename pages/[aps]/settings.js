import React from 'react'
// import fetch from 'src/lib/fetch'
import authSSR from 'src/lib/authSSR'
import { DASHBOARD } from '/src/constants/auth'
import Password from 'src/components/settings/Password'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <Password {...props} />

export async function getServerSideProps (ctx) {
  const hrstart = process.hrtime()

  const props = await authSSR(ctx, ctx.params.aps, DASHBOARD)
  if (props.notFound || props.redirect) return props

  // const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/mailingList`
  // const json = await fetch(url, {
  //   headers: { Authorization: 'Bearer ' + props.token }
  // })
  const json = {}

  const hrend = process.hrtime(hrstart)

  return { props: { ...props, json, executionTime: hrend } }
}

export default withAuthSync(Page)
