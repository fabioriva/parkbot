import React from 'react'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import Error from 'src/components/Error'
import Layout from 'src/components/Layout'
import HistoryList from 'src/components/history/HistoryListVirtualized'
import HistoryQueryDialog from 'src/components/history/HistoryQueryDialog'
import HistoryTable from 'src/components/history/HistoryTable'
import fetch from 'src/lib/fetch'
import useTranslation from 'next-translate/useTranslation'

export default function History (props) {
  const { t } = useTranslation('history')

  if (props.json.err) return <Error {...props} pageTitle={t('page-title')} />

  const [history, setHistory] = React.useState(props.json)

  const [open, setOpen] = React.useState(false)

  const handleConfirm = async (dateFrom, dateTo) => {
    console.log(typeof dateFrom, dateFrom, typeof dateTo, dateTo)
    setOpen(false)
    const filter = 'a'
    const query = `system=0&dateFrom=${dateFrom}&dateTo=${dateTo}&filter=${filter}&device=0&number=0`
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/history?${query}`
    const json = await fetch(url, {
      headers: { Authorization: 'Bearer ' + props.token }
    })
    setHistory(!json.err ? json : history)
    // setOpen(false)
  }

  return (
    <Layout {...props} pageTitle={t('page-title')}>
      <HistoryQueryDialog
        locale={props.__lang}
        open={open}
        onCancel={() => setOpen(false)}
        onConfirm={handleConfirm}
      />

      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        {history.count > 0 && (
          <HistoryList count={history.count} query={history.query} />
        )}
        {history.count === 0 && (
          <Alert severity='info'>{t('history-no-found')}</Alert>
        )}
        <Fab
          color='primary'
          aria-label='search'
          onClick={() => setOpen(true)}
          sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1299 }}
        >
          <SearchIcon />
        </Fab>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Alert
          action={
            <Button
              color='primary'
              size='small'
              // variant='outlined'
              endIcon={<SearchIcon />}
              onClick={() => setOpen(true)}
            >
              {t('dialog-title')}
            </Button>
          }
          // action={
          //   <IconButton
          //     size='small'
          //     aria-label='query'
          //     onClick={() => setOpen(true)}
          //   >
          //     <SearchIcon color='primary' fontSize='inherit' />
          //   </IconButton>
          // }
          severity='info'
          sx={{ mb: 2 }}
        >
          {t('history-query', {
            from: history.dateFrom,
            to: history.dateTo
          })}
          .&nbsp;{t('history-count', { count: history.count })}.
        </Alert>
        {history.count > 0 && (
          <HistoryTable count={history.count} query={history.query} />
        )}
      </Box>
    </Layout>
  )
}
