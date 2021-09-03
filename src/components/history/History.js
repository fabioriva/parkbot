import React from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import SearchIcon from '@mui/icons-material/Search'
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
      <Fab
        color='primary'
        aria-label='search'
        onClick={() => setOpen(true)}
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <SearchIcon />
      </Fab>
      <HistoryQueryDialog
        locale={props.__lang}
        open={open}
        onCancel={() => setOpen(false)}
        onConfirm={handleConfirm}
      />
      {/* <Paper sx={{ width: '100%' }}>
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
          <AlertTitle sx={{ display: { xs: 'none', md: 'block' } }}>
            {t('history-summary')}
          </AlertTitle>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {t('history-query', { from: history.dateFrom, to: history.dateTo })}
            .&nbsp;
          </Box>
          <Box>{t('history-count', { count: history.count })}.</Box>
        </Alert>
        <HistoryQueryDialog
          locale={props.__lang}
          open={open}
          onCancel={() => setOpen(false)}
          onConfirm={handleConfirm}
        />
      </Paper> */}
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
