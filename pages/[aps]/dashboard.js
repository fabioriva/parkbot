import { aps, apsPaths } from 'src/constants/aps'
import { DASHBOARD, ACTIONS } from 'src/constants/roles'
import fetchJson from 'src/lib/fetchJson'
import Dashboard from 'src/components/Dashboard'
import withAuthSync from 'src/hocs/withAuthSync'
import { withSnackbar } from 'notistack'

const Page = props => {
  return <Dashboard {...props} />
}
export async function getStaticPaths ({ locales }) {
  return {
    paths: await apsPaths(locales),
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  if (aps(params.aps) === -1) {
    return {
      notFound: true
    }
  }

  const { APS_NAME, BACKEND_URL, WEBSOCK_URL } = await import(
    `src/constants/${params.aps}`
  )
  const json = await fetchJson(`${BACKEND_URL}/dashboard`)

  return {
    props: {
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        pageRole: DASHBOARD,
        pageTitle: 'title-dashboard',
        userRole: ACTIONS
      },
      json
    }
  }
}

export default withAuthSync(withSnackbar(Page))
