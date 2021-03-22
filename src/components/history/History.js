import React from 'react'
import useTranslation from 'next-translate/useTranslation'
// import useJson from 'src/lib/useData'
import { fetchHistory } from 'src/lib/fetchJson'
import Layout from 'src/components/Layout_'
import ParBot from 'src/components/ParkBot'
import List from 'src/components/history/HistoryList'
import Table from 'src/components/history/HistoryTable'
import Query from 'src/components/history/HistoryQuery'
// material ui
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'

export default function History ({ definitions, json, user }) {
  const { t } = useTranslation('history')

  const { apsId, apsName, backendUrl, websockUrl } = definitions

  const [history, setHistory] = React.useState(json)

  const handleConfirm = async data => {
    console.log(typeof data['datetime-from'], data['datetime-to'])
    const json = await fetchHistory(apsId, backendUrl, {
      filter: 'a',
      dateFrom: data['datetime-from'],
      dateTo: data['datetime-to']
    })
    console.log(json)
    setHistory(json)
  }

  return (
    <Layout
      apsName={apsName}
      pageTitle={t('title')}
      socket={`${websockUrl}?channel=ch2`}
      user={user}
    >
      <Query onConfirm={handleConfirm} />
      <Container maxWidth='xl'>
        <Hidden implementation='css' xsDown>
          {/* <Typography variant='subtitle2' gutterBottom>
            {t('history-query-result', {
              count: history.count,
              from: history.dateFrom,
              to: history.dateTo
            })}
          </Typography> */}
          {history.count > 0 ? (
            <Table count={history.count} query={history.query} />
          ) : (
            <ParBot
              message={t('history-query-result', {
                count: history.count,
                from: history.dateFrom,
                to: history.dateTo
              })}
            />
          )}
        </Hidden>
      </Container>
      <Hidden implementation='css' smUp>
        <Container maxWidth='xl'>
          <Typography variant='subtitle2' gutterBottom>
            {t('history-total-count', { count: history.count })}
          </Typography>
        </Container>
        {history.count > 0 ? (
          <List query={history.query} user={user} />
        ) : (
          <ParBot message='No records!' />
        )}
      </Hidden>
    </Layout>
  )
}
