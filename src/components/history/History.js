import React from 'react'
import useTranslation from 'next-translate/useTranslation'
// import useJson from 'src/lib/useData'
import { fetchHistory } from 'src/lib/fetchJson'
import Layout from 'src/components/Layout_'
import ParBot from 'src/components/ParkBot'
import List from 'src/components/history/HistoryList'
import Table from 'src/components/history/HistoryTable'
import Query from 'src/components/history/HistoryQuery'
import QueryDialog from 'src/components/history/HistoryQueryDialog'
// material ui
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'

export default function History ({ definitions, json, user }) {
  const { t } = useTranslation('history')

  const { apsId, apsName, backendUrl, websockUrl } = definitions

  const [history, setHistory] = React.useState(json)
  const [open, setOpen] = React.useState(false)

  const handleCancel = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleConfirm = async data => {
    const json = await fetchHistory(apsId, backendUrl, {
      filter: 'a',
      dateFrom: data['datetime-from'],
      dateTo: data['datetime-to']
    })
    console.log(json)
    setHistory(json)
    setOpen(false)
  }

  return (
    <Layout
      apsName={apsName}
      pageTitle={t('title')}
      socket={`${websockUrl}?channel=ch2`}
      user={user}
    >
      <Query onQuery={handleOpen} query={history} />
      <QueryDialog
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        open={open}
      />
      <Container maxWidth='xl'>
        <Hidden implementation='css' xsDown>
          {history.count > 0 ? (
            <Table count={history.count} query={history.query} />
          ) : (
            <ParBot message='No records found.' />
          )}
        </Hidden>
      </Container>
      <Hidden implementation='css' smUp>
        {history.count > 0 ? (
          <>
            <Container maxWidth='xl'>
              <Typography variant='subtitle2' gutterBottom>
                {t('history-total-count', { count: history.count })}
              </Typography>
            </Container>
            <List query={history.query} user={user} />
          </>
        ) : (
          <ParBot message='No records found.' />
        )}
      </Hidden>
    </Layout>
  )
}
