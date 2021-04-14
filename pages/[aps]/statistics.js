import { format, subDays } from 'date-fns'
import { aps, apsPaths } from 'src/constants/aps'
import { STATISTICS } from 'src/constants/roles'
import { fetchOperations } from 'src/lib/fetchJson'
import Statistics from 'src/components/statistics/Statistics'
import withAuthSync from 'src/hocs/withAuthSync'
import { withSnackbar } from 'notistack'

const Page = props => {
  return <Statistics {...props} />
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

  const yesterday = format(subDays(new Date(), 1), 'yyyy-MM-dd')

  const json = await fetchOperations(BACKEND_URL, yesterday)

  return {
    props: {
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        pageRole: STATISTICS,
        pageTitle: 'title-statistics'
      },
      json
    }
  }
}

export default withAuthSync(withSnackbar(Page))
