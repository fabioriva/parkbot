import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import useTranslation from 'next-translate/useTranslation'
// material-ui
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
// import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

export default function EditDialog (props) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const { t } = useTranslation('map')

  const { onCancel, onConfirm, open, value } = props

  const { card, stall, minCard, maxCard } = value

  const {
    // register,
    control,
    handleSubmit,
    formState: { errors },
    clearErrors
    // setValue
  } = useForm()

  const [data, setData] = React.useState({ card, stall })
  // console.log(data)
  // React.useEffect(() => clearErrors(), [])
  React.useEffect(() => {
    clearErrors()
  }, [])

  const handleChange1 = e => {
    console.log('onChange 1:', e.target.name, e.target.value)
    setData({ ...data, stall: e.target.value })
    // console.log('onChange 1', event.target.value, child)
    // setValue('stall', event.target.value)
  }

  const handleChange2 = e => {
    console.log('onChange 2:', e.target.name, e.target.value)
    setData({ ...data, card: e.target.value })
    // setValue('card', event.target.value)
    // setData({ stall: data.stall, card: event.target.value })
  }

  const onEnter = () => {
    console.log('onEnter', value)
    const { card, stall } = value
    setData({ card, stall })
  }

  const onSubmit = d => {
    console.log(d, typeof data.card)
    window.alert(JSON.stringify(data))
    // onConfirm({ ...data })
  }
  const onError = (errors, e) => console.log(errors, e)

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      onEnter={onEnter}
      aria-labelledby='form-dialog-title'
      fullScreen={fullScreen}
    >
      <DialogTitle id='form-dialog-title'>
        {t('dialog-title', { number: stall })}
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <DialogContent>
          <Controller
            render={({ field }) => <Input {...field} type='number' />}
            name='stall'
            control={control}
            defaultValue={data.stall}
            // rules={{ required: true}}
          />
          <Controller
            render={({ field: { onChange, onBlur, value, name, ref } }) => {
              console.log(value, name, ref)
              return (
                <TextField
                  // {...field}
                  autoFocus
                  fullWidth
                  label={t('dialog-card')}
                  type='number'
                  // value={data.card}
                  error={!!errors.card}
                  helperText={`Min ${minCard} Max ${maxCard}`}
                  // onChange={handleChange1}
                  // value={data.card}
                  inputRef={ref}
                />
              )
            }}
            name='card'
            control={control}
            defaultValue={data.card}
            rules={{ required: true, min: minCard, max: maxCard }}
          />
          {/* <Input
            name='stall'
            onChange={handleChange1}
            defaultValue={stall}
            // inputRef={register({
            //   required: true,
            //   min: minCard,
            //   max: maxCard
            // })}
            {...register('stall', { required: true })}
          />
          <TextField
            name='card'
            defaultValue={card}
            // inputRef={register({
            //   required: true,
            //   min: minCard,
            //   max: maxCard
            // })}
            error={!!errors.card}
            {...register('card', {
              required: true,
              min: minCard,
              max: maxCard
            })}
          /> */}
          {/* <TextField
            autoFocus
            fullWidth
            label={t('dialog-card')}
            type='number'
            name='card'
            defaultValue={card}
            error={!!errors.card}
            helperText={`Min ${minCard} Max ${maxCard}`}
            onChange={handleChange2}
            {...register('card', {
              required: true,
              min: minCard,
              max: maxCard
            })}
          /> */}
          {/* <Controller
            render={({ field }) => <Input {...field} type='hidden' />}
            name='stall'
            control={control}
            defaultValue={stall}
          /> */}
          {/* <TextField
            autoFocus
            fullWidth
            id='card'
            name='card'
            label={t('dialog-card')}
            type='number'
            defaultValue={card}
            // inputRef={register({
            //   required: true,
            //   min: minCard,
            //   max: maxCard
            // })}
            error={!!errors.card}
            helperText={`Min ${minCard} Max ${maxCard}`}
            {...register('card', {
              required: true
              // min: minCard,
              // max: maxCard
            })}
          /> */}
          {/* <Controller
            render={({ field }) => (
              <TextField
                {...field}
                autoFocus
                fullWidth
                // defaultValue={card}
                error={!!errors.card}
                helperText={`Min ${minCard} Max ${maxCard}`}
                label={t('dialog-card')}
                type='number'
                // value={field.value}
                onChange={onChange}
              />
            )}
            name='card'
            control={control}
            defaultValue={card}
            // value={card}
            rules={{ required: true, min: minCard, max: maxCard }}
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color='default'>
            {t('dialog-cancel')}
          </Button>
          <Button color='primary' type='submit'>
            {t('dialog-card')}
          </Button>
          <Button
            color='primary'
            onClick={() => onConfirm({ card: 0, stall: stall })}
          >
            {t('dialog-clear')}
          </Button>
          <Button
            color='primary'
            onClick={() => onConfirm({ card: 999, stall: stall })}
          >
            {t('dialog-lock')}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
