import { useState } from 'react'
// import useJson from 'src/lib/useData'
import Layout from 'src/components/Layout'
import Table from 'src/components/history/HistoryTable'
import useTranslation from 'next-translate/useTranslation'
import Typography from '@material-ui/core/Typography'

import { format, endOfDay, startOfDay } from 'date-fns'

export default function History ({ definitions, json, user }) {
  const { t } = useTranslation('history')

  const { apsId, apsName, backendUrl, websockUrl, userRole } = definitions

  // const filter = 'a'
  // const dateFrom = format(
  //   startOfDay(new Date('2020-01-01')),
  //   'yyyy-MM-dd HH:mm:ss'
  // )
  // const dateTo = format(endOfDay(new Date('2020-12-01')), 'yyyy-MM-dd HH:mm:ss')
  // const number = 0
  // const query = `system=${apsId}&dateFrom=${dateFrom}&dateTo=${dateTo}&filter=${filter}&device=0&number=${number}`
  // const { data, isLoading, isError } = useJson(
  //   backendUrl.concat('/history?', query),
  //   json
  // )
  // if (isError) return <div>Failed to load</div>
  // if (isLoading) return <div>Loading...</div>

  const [history, setHistory] = useState(json)

  console.log(history)

  return (
    <Layout
      apsName={apsName}
      pageTitle={t('title')}
      socket={`${websockUrl}?channel=ch2`}
      user={user}
    >
      <Typography variant='subtitle2' gutterBottom>
        {t('history-query', {
          count: history.count,
          from: history.dateFrom,
          to: history.dateTo
        })}
      </Typography>
      <Table count={history.count} query={history.query} />
    </Layout>
  )
}
