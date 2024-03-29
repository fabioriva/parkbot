import React from 'react'
// import fetch from 'src/lib/fetch'
import authSSR from 'src/lib/authSSR'
import { NOTIFICATIONS } from '/src/constants/auth'
import MailingList from 'src/components/notifications/MailingList'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <MailingList {...props} />

export async function getServerSideProps (ctx) {
  const hrstart = process.hrtime()

  const props = await authSSR(ctx, ctx.params.aps, NOTIFICATIONS)
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
