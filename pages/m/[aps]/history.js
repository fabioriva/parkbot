import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { HISTORY } from 'src/constants/roles'
import fetchHistory from 'src/lib/fetchHistory'
import Layout from 'src/components/Mobile'
import History from 'src/components/history/HistoryList'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => {
  const { t } = useTranslation('history')

  const { definitions, json, user } = props
  const { apsId, apsName, backendUrl, websockUrl, userRole } = definitions

  const [history, setHistory] = useState(json)

  return (
    <Layout
      apsName={apsName}
      pageTitle={t('title')}
      socket={`${websockUrl}?channel=ch2`}
      user={user}
    >
      <History query={history.query} user={user} />
    </Layout>
  )
}

export async function getServerSideProps ({ params, req }) {
  const { APS_ID, APS_NAME, BACKEND_URL, WEBSOCK_URL } = await import(
    `src/constants/${params.aps}`
  )
  const json = await fetchHistory(APS_ID, BACKEND_URL, { filter: 'a' })

  return {
    props: {
      definitions: {
        apsId: APS_ID,
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        pageRole: HISTORY
        // userRole: {}
      },
      json
    }
  }
}

export default withAuthSync(Page)
