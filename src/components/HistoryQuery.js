import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker
} from '@material-ui/pickers'
import { useForm, Controller } from 'react-hook-form'

export default function QueryForm({ queryHistory }) {

  const { handleSubmit, control, errors, register, watch } = useForm()

  const onSubmit = data => {
    const { filter, from, to, number } = data
    queryHistory({ range: [from, to], filter: filter, number: number })
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: 24 }}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container direction='row' justify='space-between' alignItems='center' spacing={1}>
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
            <FormControl component='fieldset'>
              <FormLabel component='legend'>Filter</FormLabel>
              <RadioGroup aria-label='filter' name='filter' defaultValue={'a'} row>
                <FormControlLabel value='a' control={<Radio inputRef={register()} />} label='All' />
                <FormControlLabel value='b' control={<Radio inputRef={register()} />} label='Alarms' />
                <FormControlLabel value='c' control={<Radio inputRef={register()} />} label='Card' />
                <FormControlLabel value='d' control={<Radio inputRef={register()} />} label='Stall' />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <TextField
              fullWidth
              margin='dense'
              id='number'
              name='number'
              label={'Card'}
              type='number'
              defaultValue={0}
              inputRef={register()}
              error={errors.card ? true : false}
              disabled={watch('filter') !== 'c'}
            />
          </Grid>
          <Grid item>
            <IconButton aria-label='search' type='submit' color='primary'>
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </form>
  )
}