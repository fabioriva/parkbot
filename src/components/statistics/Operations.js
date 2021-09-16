import React from 'react'
import Alert from '@mui/material/Alert'
// import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Fab from '@mui/material/Fab'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import SearchIcon from '@mui/icons-material/Search'
import Layout from 'src/components/Layout'
import Operations from 'src/components/charts/Operations'
import OperationsMobileView from 'src/components/statistics/OperationsMobileView'
import OperationsQueryDialog from 'src/components/statistics/OperationsQueryDialog'
import fetch from 'src/lib/fetch'
import useTranslation from 'next-translate/useTranslation'

export default function Statistics (props) {
  const { t } = useTranslation('statistics')

  const [operations, setOperations] = React.useState(props.json)
  const [open, setOpen] = React.useState(false)

  const handleConfirm = async date => {
    console.log(typeof date, date)
    const query = `dateString=${date}`
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/statistics?${query}`
    const json = await fetch(url, {
      headers: { Authorization: 'Bearer ' + props.token }
    })
    setOperations(!json.err ? json : operations)
    setOpen(false)
  }

  return (
    <Layout {...props} pageTitle={t('header-title')}>
      <OperationsQueryDialog
        locale={props.__lang}
        open={open}
        onCancel={() => setOpen(false)}
        onConfirm={handleConfirm}
      />
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
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
        <Paper sx={{ width: '100%' }}>
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
            severity='info'
            sx={{ mb: 2 }}
          >
            {/* <AlertTitle>
              {t('op-summary', { date: operations[0].label })}
            </AlertTitle> */}
            <div>
              {t('op-summary', { date: operations[0].label })}.&nbsp;
              {t('op-total', {
                count: operations[0].data.reduce((p, c) => p + c.total, 0)
              })}
              .&nbsp;
              {t('op-entries', {
                count: operations[0].data.reduce((p, c) => p + c.entries, 0)
              })}
              .&nbsp;
              {t('op-exits', {
                count: operations[0].data.reduce((p, c) => p + c.exits, 0)
              })}
              .&nbsp;
            </div>
          </Alert>
        </Paper>
      </Box>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {operations.map(
          (element, index) =>
            element.data.length > 0 && (
              <Grid item xs={12} key={index}>
                <Paper sx={{ p: 1 }}>
                  <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <OperationsMobileView key={index} statistics={element} />
                  </Box>
                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Operations
                      key={index}
                      animation
                      data={element.data}
                      labels={[t('entries'), t('exits'), t('total')]}
                      // title={`${t(element.i18n)}: ${element.label}`}
                      title={`${element.title}: ${element.label}`}
                      height={'30%'}
                      width={'100%'}
                    />
                  </Box>
                </Paper>
              </Grid>
            )
        )}
      </Grid>
    </Layout>
  )
}
