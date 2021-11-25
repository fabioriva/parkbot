import React from 'react'
import { format, endOfDay, startOfDay, subDays } from 'date-fns'
import fetch from 'src/lib/fetch'
import authSSR from 'src/lib/authSSR'
import { HISTORY } from '/src/constants/auth'
import History from 'src/components/history/History'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <History {...props} />

export async function getServerSideProps (ctx) {
  const hrstart = process.hrtime()

  const props = await authSSR(ctx, ctx.params.aps, HISTORY)
  if (props.notFound || props.redirect) return props

  const dateFrom = format(
    subDays(startOfDay(new Date()), 1),
    'yyyy-MM-dd HH:mm:ss'
  )
  const dateTo = format(endOfDay(new Date()), 'yyyy-MM-dd HH:mm:ss')
  const filter = 'a'
  const query = `system=0&dateFrom=${dateFrom}&dateTo=${dateTo}&filter=${filter}&device=0&number=0`
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/history?${query}`
  const json = await fetch(url, {
    headers: { Authorization: 'Bearer ' + props.token }
  })

  const hrend = process.hrtime(hrstart)

  return { props: { ...props, json, executionTime: hrend } }
}

export default withAuthSync(Page)
