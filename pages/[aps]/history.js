import { aps, apsPaths } from 'src/constants/aps'
import { HISTORY } from 'src/constants/roles'
import { fetchHistory } from 'src/lib/fetchJson'
import History from 'src/components/history/History'
import withAuthSync from 'src/hocs/withAuthSync'
import { withSnackbar } from 'notistack'

const Page = props => {
  return <History {...props} />
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

  const { APS_ID, APS_NAME, BACKEND_URL, WEBSOCK_URL } = await import(
    `src/constants/${params.aps}`
  )
  const json = await fetchHistory(APS_ID, BACKEND_URL, { filter: 'a' })

  return {
    props: {
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        pageRole: HISTORY,
        pageTitle: 'title-history'
      },
      json
    }
  }
}

export default withAuthSync(withSnackbar(Page))
