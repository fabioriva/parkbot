import { format, subDays } from 'date-fns'
import paths from 'src/constants/aps'
import { STATISTICS } from 'src/constants/roles'
import fetchOperations from 'src/lib/fetchOperations'
import Statistics from 'src/components/statistics/Statistics'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => {
  console.log(props)
  return <Statistics {...props} />
}

export async function getStaticPaths ({ locales }) {
  return {
    paths: await paths(locales),
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const { APS_NAME, BACKEND_URL, WEBSOCK_URL } = await import(
    `src/constants/${params.aps}`
  )
  const yesterday = subDays(new Date(), 1)
  const json = await fetchOperations(BACKEND_URL, yesterday)
  return {
    props: {
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        pageRole: STATISTICS
        // userRole: EDIT_CARD
      },
      json
    }
  }
}

export default withAuthSync(Page)
