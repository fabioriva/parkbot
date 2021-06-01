import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { fetchHistory } from 'src/lib/fetchJson'
// import Layout from 'src/components/Layout'
import Layout from 'src/components/LayoutResponsive'
import ParkBot from 'src/components/ParkBot'
import List from 'src/components/history/HistoryList'
import Table from 'src/components/history/HistoryTable'
import Query from 'src/components/history/HistoryQuery'
import QueryDialog from 'src/components/history/HistoryQueryDialog'
// material ui
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'

export default function History (props) {
  const { t } = useTranslation('history')
  const { definitions, json, user } = props
  const { apsId, backendUrl } = definitions

  const [history, setHistory] = React.useState(json)
  const [open, setOpen] = React.useState(false)

  React.useEffect(async () => {
    const json = await fetchHistory(apsId, backendUrl, { filter: 'a' })
    setHistory(json)
  }, [])

  const handleCancel = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleConfirm = async data => {
    const json = await fetchHistory(apsId, backendUrl, {
      filter: 'a',
      dateFrom: data['dateFrom'],
      dateTo: data['dateTo']
    })
    setHistory(json)
    setOpen(false)
  }

  return (
    <Layout {...props}>
      <QueryDialog
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        open={open}
      />
      <Container maxWidth='xl'>
        <Hidden implementation='css' xsDown>
          <Query onQuery={handleOpen} query={history} />
          {history.count > 0 ? (
            <Table count={history.count} query={history.query} />
          ) : (
            <ParkBot message={t('no-records')} />
          )}
        </Hidden>
      </Container>
      <Hidden implementation='css' smUp>
        <Container maxWidth='xl'>
          <Query onQuery={handleOpen} query={history} />
        </Container>
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
          <ParkBot message={t('no-records')} />
        )}
      </Hidden>
    </Layout>
  )
}
