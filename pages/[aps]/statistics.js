import React from 'react'
import { format, subDays } from 'date-fns'
import fetch from 'src/lib/fetch'
import authSSR from 'src/lib/authSSR'
import { STATISTICS } from '/src/constants/auth'
import Operations from 'src/components/statistics/Operations'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <Operations {...props} />

export async function getServerSideProps (ctx) {
  const hrstart = process.hrtime()

  const props = await authSSR(ctx, ctx.params.aps, STATISTICS)
  if (props.notFound || props.redirect) return props

  const date = format(subDays(new Date(), 1), 'yyyy-MM-dd')

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/statistics?dateString=${date}`
  const json = await fetch(url, {
    headers: { Authorization: 'Bearer ' + props.token }
  })

  const hrend = process.hrtime(hrstart)

  return { props: { ...props, json, executionTime: hrend } }
}

export default withAuthSync(Page)
