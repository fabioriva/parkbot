import React from 'react'
import Alert from '@material-ui/core/Alert'
import AlertTitle from '@material-ui/core/AlertTitle'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import SearchIcon from '@material-ui/icons/Search'
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
          <AlertTitle>
            {t('op-summary', { date: operations[0].label })}
          </AlertTitle>
          <ul>
            <li>
              {t('op-total', {
                count: operations[0].data.reduce((p, c) => p + c.total, 0)
              })}
              .&nbsp;
            </li>
            <li>
              {t('op-entries', {
                count: operations[0].data.reduce((p, c) => p + c.entries, 0)
              })}
              .&nbsp;
            </li>
            <li>
              {t('op-exits', {
                count: operations[0].data.reduce((p, c) => p + c.exits, 0)
              })}
              .&nbsp;
            </li>
          </ul>
        </Alert>
        <OperationsQueryDialog
          locale={props.__lang}
          open={open}
          onCancel={() => setOpen(false)}
          onConfirm={handleConfirm}
        />
      </Paper>
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
                      height={'30%'}
                      width={'100%'}
                      data={element.data}
                      labels={[t('entries'), t('exits'), t('total')]}
                      // title={`${t(element.i18n)}: ${element.label}`}
                      title={`${element.title}: ${element.label}`}
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
