import React from 'react'
import useTranslation from 'next-translate/useTranslation'
// material ui
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(1)
  },
  text: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 12
    }
    // [theme.breakpoints.up('sm')]: {
    //   fontSize: 14
    // }
  }
}))

export default function HistoryQuery ({ onQuery, query }) {
  const classes = useStyles()
  const { t } = useTranslation('history')

  return (
    <div style={{ width: '100%' }}>
      <Box display='flex' alignItems='center' mb={1}>
        <Box flexGrow={1}>
          <Typography className={classes.text} variant='subtitle1'>
            {t('history-query-result', {
              // count: query.count,
              from: query.dateFrom,
              to: query.dateTo
            })}
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={onQuery}
            color='primary'
            variant='outlined'
            size='small'
            startIcon={<SearchIcon />}
          >
            {t('history-query')}
          </Button>
        </Box>
      </Box>
    </div>
  )
}
