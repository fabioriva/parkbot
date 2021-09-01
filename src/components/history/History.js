import React from 'react'
import Alert from '@material-ui/core/Alert'
import AlertTitle from '@material-ui/core/AlertTitle'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import SearchIcon from '@material-ui/icons/Search'
// material-ui
import Layout from 'src/components/Layout'
import HistoryList from 'src/components/history/HistoryListVirtualized'
import HistoryQueryDialog from 'src/components/history/HistoryQueryDialog'
import HistoryTable from 'src/components/history/HistoryTable'
import fetch from 'src/lib/fetch'
import useTranslation from 'next-translate/useTranslation'

export default function History (props) {
  const { t } = useTranslation('history')

  const [history, setHistory] = React.useState(props.json)

  const [open, setOpen] = React.useState(false)

  const handleConfirm = async (dateFrom, dateTo) => {
    console.log(typeof dateFrom, dateFrom, typeof dateTo, dateTo)
    const filter = 'a'
    const query = `system=0&dateFrom=${dateFrom}&dateTo=${dateTo}&filter=${filter}&device=0&number=0`
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/history?${query}`
    const json = await fetch(url, {
      headers: { Authorization: 'Bearer ' + props.token }
    })
    setHistory(!json.err ? json : history)
    setOpen(false)
  }

  return (
    <Layout {...props} pageTitle={t('header-title')}>
      <Paper sx={{ width: '100%' }}>
        <Alert
          action={
            <IconButton
              size='small'
              aria-label='query'
              onClick={() => setOpen(true)}
            >
              <SearchIcon color='primary' fontSize='inherit' />
            </IconButton>
          }
          severity='info'
          sx={{ mb: 2 }}
        >
          <AlertTitle>{t('history-summary')}</AlertTitle>
          <div>
            {t('history-query', { from: history.dateFrom, to: history.dateTo })}
            .&nbsp;{t('history-count', { count: history.count })}.
          </div>
        </Alert>
        <HistoryQueryDialog
          locale={props.__lang}
          open={open}
          onCancel={() => setOpen(false)}
          onConfirm={handleConfirm}
        />
      </Paper>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <HistoryList count={history.count} query={history.query} />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <HistoryTable
          count={history.count}
          query={history.query}
          // devices={props.devices}
          // modes={props.modes}
          // operations={props.operations}
        />
      </Box>
    </Layout>
  )
}
