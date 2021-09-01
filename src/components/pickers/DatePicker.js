import React from 'react'
import enLocale from 'date-fns/locale/en-US'
import itLocale from 'date-fns/locale/it'
import TextField from '@material-ui/core/TextField'
import AdapterDateFns from '@material-ui/lab/AdapterDateFns'
import LocalizationProvider from '@material-ui/lab/LocalizationProvider'
import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker'
import MobileDatePicker from '@material-ui/lab/MobileDatePicker'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const localeMap = {
  en: enLocale,
  it: itLocale
}

export default function DatePicker ({ label, locale, value, error, onChange }) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

  const mobilePicker = (
    <MobileDatePicker
      sx={{ flexGrow: 1 }}
      label={label}
      value={value}
      onChange={onChange}
      renderInput={params => <TextField {...params} error={!!error} />}
    />
  )

  const desktopPicker = (
    <DesktopDatePicker
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
