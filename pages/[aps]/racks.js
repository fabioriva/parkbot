import React from 'react'
import fetch from 'src/lib/fetch'
import { getCookies } from 'src/lib/authCookies'
import { aps_ } from 'src/constants/aps'
import Racks from 'src/components/racks/Racks'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => <Racks {...props} />

export async function getServerSideProps (ctx) {
  const APS = aps_(ctx.params.aps)

  if (APS === undefined || ctx.params.aps !== APS.ns) {
    return {
      notFound: true
    }
  }

  const { aps, i18n, token } = await getCookies(ctx.req)

  if (ctx.params.aps !== aps || !token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  var hrstart = process.hrtime()

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/racks`
  const json = await fetch(url, {
    headers: { Authorization: 'Bearer ' + token }
  })

  var hrend = process.hrtime(hrstart)

  return {
    props: {
      aps: APS.ns,
      apsName: APS.name,
      locale: i18n,
      json,
      token,
      executionTime: hrend
    }
  }
}

export default withAuthSync(Page)
