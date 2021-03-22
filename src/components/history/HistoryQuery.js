import React from 'react'
import { useForm } from 'react-hook-form'
import useTranslation from 'next-translate/useTranslation'
import { format, endOfDay, startOfDay } from 'date-fns'
// material ui
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(1)
  },
  textField: {
    marginRight: theme.spacing(1),
    width: 200
  }
}))

export default function HistoryQuery ({ onConfirm }) {
  const classes = useStyles()
  const { t } = useTranslation('history')
  const { register, handleSubmit, errors, clearErrors } = useForm()

  React.useEffect(() => clearErrors(), [])

  const onSubmit = data => {
    console.log(typeof data['datetime-to'], data['datetime-to'])
    console.log(
      format(
        startOfDay(new Date(data['datetime-to'])),
        "yyyy-MM-dd'T'HH:mm" // 'yyyy-MM-dd HH:mm:ss'
      )
    )
    onConfirm({ ...data })
  }

  const dateFrom = format(
    startOfDay(new Date('2020-01-01')),
    "yyyy-MM-dd'T'HH:mm"
  )
  const dateTo = format(endOfDay(new Date('2020-12-01')), "yyyy-MM-dd'T'HH:mm")

  return (
    <Container maxWidth='xl'>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.container}>
        <Box flexGrow={1}>
          <TextField
            id='datetime-from'
            name='datetime-from'
            label='From date'
            type='datetime-local'
            defaultValue={dateFrom}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            inputRef={register({
              required: true
            })}
            error={!!errors.code}
          />
          <TextField
            id='datetime-to'
            name='datetime-to'
            label='To date'
            type='datetime-local'
            defaultValue={dateTo}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            inputRef={register({
              required: true
            })}
            error={!!errors.code}
          />
        </Box>
        <Button type='submit' color='primary' variant='outlined'>
          {t('history-query')}
        </Button>
      </form>
    </Container>
  )
}
