import React from 'react'
import fetch from 'src/lib/fetch'
import authSSR from 'src/lib/authSSR'
import { OVERVIEW } from '/src/constants/auth'
import Overview from 'src/components/overview/qihe'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <Overview {...props} />

export async function getServerSideProps (ctx) {
  const hrstart = process.hrtime()

  const props = await authSSR(ctx, 'qihe2', OVERVIEW)
  if (props.notFound || props.redirect) return props

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/qihe2/overview`
  const json = await fetch(url, {
    headers: { Authorization: 'Bearer ' + props.token }
  })

  const hrend = process.hrtime(hrstart)

  return { props: { ...props, json, executionTime: hrend } }
}

export default withAuthSync(Page)
