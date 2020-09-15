import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker
} from '@material-ui/pickers'
import { useForm, Controller } from 'react-hook-form'

export default function QueryForm({ queryHistory }) {
  const { handleSubmit, control, errors, register } = useForm()

  const onSubmit = data => {
    console.log('onSubmit', data)
    const { filter, from, to } = data
    queryHistory({ range: [from, to], filter: filter })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: 24 }}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={3}>
          <Grid item xs={3}>
            <Controller
              as={
                <KeyboardDateTimePicker
                  ampm
                  margin='normal'
                  label='From'
                  format='yyyy-MM-dd HH:mm:ss'
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  error={errors.from ? true : false}
                />
              }
              name='from'
              control={control}
              defaultValue={new Date().setHours(0,0,0,0)}
              rules={{
                required: true
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <Controller
              as={
                <KeyboardDateTimePicker
                  ampm
                  margin='normal'
                  label='To'
                  format='yyyy-MM-dd HH:mm:ss'
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  error={errors.to ? true : false}
                />
              }
              name='to'
              control={control}
              defaultValue={new Date().setHours(23,59,59,59)}
              rules={{
                required: true
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Filter</FormLabel>
              <RadioGroup aria-label="filter" name="filter" defaultValue={'a'} row>
                <FormControlLabel value="a" control={<Radio inputRef={register()} />} label="All" />
                <FormControlLabel value="b" control={<Radio inputRef={register()} />} label="Alarms" />
                <FormControlLabel value="c" control={<Radio inputRef={register()} />} label="Card" />
                <FormControlLabel value="d" control={<Radio inputRef={register()} />} label="Stall" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <Button
              id='submit'
              name='submit'
              type='submit'
              variant='contained'
              color='primary'
              // fullWidth
            >
              Query
            </Button>
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </form>
  )
}