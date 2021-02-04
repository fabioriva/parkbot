import { CARDS, EDIT_CARD } from 'src/constants/roles'
import fetchJson from 'src/lib/fetchJson'
import Cards from 'src/components/cards/Cards'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => {
  return <Cards {...props} />
}

export async function getServerSideProps ({ params }) {
  const { APS_NAME, BACKEND_URL, WEBSOCK_URL } = await import(
    `src/constants/${params.aps}`
  )
  const json = await fetchJson(`${BACKEND_URL}/cards`)
  return {
    props: {
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        pageRole: CARDS,
        userRole: EDIT_CARD
      },
      json
    }
  }
}

export default withAuthSync(Page)
