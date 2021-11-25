import React from 'react'
import fetch from 'src/lib/fetch'
import authSSR from 'src/lib/authSSR'
import { CARDS } from '/src/constants/auth'
import Cards from 'src/components/cards/Cards'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <Cards {...props} />

export async function getServerSideProps (ctx) {
  const hrstart = process.hrtime()

  const props = await authSSR(ctx, ctx.params.aps, CARDS)
  if (props.notFound || props.redirect) return props

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/cards`
  const json = await fetch(url, {
    headers: { Authorization: 'Bearer ' + props.token }
  })

  const hrend = process.hrtime(hrstart)

  return { props: { ...props, json, executionTime: hrend } }
}

export default withAuthSync(Page)
