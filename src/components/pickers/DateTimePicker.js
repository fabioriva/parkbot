import React from 'react'
import enLocale from 'date-fns/locale/en-US'
import itLocale from 'date-fns/locale/it'
import TextField from '@material-ui/core/TextField'
import AdapterDateFns from '@material-ui/lab/AdapterDateFns'
import LocalizationProvider from '@material-ui/lab/LocalizationProvider'
import DesktopDateTimePicker from '@material-ui/lab/DesktopDateTimePicker'
import MobileDateTimePicker from '@material-ui/lab/MobileDateTimePicker'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const localeMap = {
  en: enLocale,
  it: itLocale
}

export default function DateTimePicker ({
  label,
  locale,
  value,
  error,
  onChange
}) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

  const mobilePicker = (
    <MobileDateTimePicker
      sx={{ flexGrow: 1 }}
      label={label}
      value={value}
      onChange={onChange}
      renderInput={params => <TextField {...params} error={!!error} />}
    />
  )

  const desktopPicker = (
    <DesktopDateTimePicker
      sx={{ flexGrow: 1 }}
      label={label}
      value={value}
      onChange={onChange}
      renderInput={params => <TextField {...params} error={!!error} />}
    />
  )

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      locale={localeMap[locale]}
    >
      {isMobile ? mobilePicker : desktopPicker}
    </LocalizationProvider>
  )
}
