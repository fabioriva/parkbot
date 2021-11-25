import React from 'react'
import fetch from 'src/lib/fetch'
import authSSR from 'src/lib/authSSR'
import { RACKS } from '/src/constants/auth'
import Racks from 'src/components/racks/Racks'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <Racks {...props} />

export async function getServerSideProps (ctx) {
  const hrstart = process.hrtime()

  const props = await authSSR(ctx, ctx.params.aps, RACKS)
  if (props.notFound || props.redirect) return props

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/racks`
  const json = await fetch(url, {
    headers: { Authorization: 'Bearer ' + props.token }
  })

  const hrend = process.hrtime(hrstart)

  return { props: { ...props, json, executionTime: hrend } }
}

export default withAuthSync(Page)
