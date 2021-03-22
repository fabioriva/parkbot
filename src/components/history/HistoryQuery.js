import React from 'react'
import useTranslation from 'next-translate/useTranslation'
// material ui
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(1)
  },
  textField: {
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      width: 170
    },
    [theme.breakpoints.up('sm')]: {
      width: 200
    }
    // width: 190
  },
  input: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 14
    }
    // [theme.breakpoints.up('sm')]: {
    //   backgroundColor: theme.palette.primary.main,
    // },
  }
}))

export default function HistoryQuery ({ onQuery, query }) {
  const classes = useStyles()
  const { t } = useTranslation('history')

  return (
    <Container maxWidth='xl' className={classes.container}>
      <Box flexGrow={1}>
        <Typography variant='subtitle2' gutterBottom>
          {t('history-query-result', {
            count: query.count,
            from: query.dateFrom,
            to: query.dateTo
          })}
        </Typography>
      </Box>
      <Button onClick={onQuery} color='primary' variant='outlined' size='small'>
        {t('history-query')}
      </Button>
    </Container>
  )
}
