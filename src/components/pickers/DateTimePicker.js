import React from "react";
import enLocale from "date-fns/locale/en-US";
import itLocale from "date-fns/locale/it";
// import AdapterDateFns from '@mui/lab/AdapterDateFns'
// import LocalizationProvider from '@mui/lab/LocalizationProvider'
// import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker'
// import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker'
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";

const localeMap = {
  en: enLocale,
  it: itLocale,
};

export default function DateTimePicker({
  label,
  locale,
  value,
  error,
  onChange,
}) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const mobilePicker = (
    <MobileDateTimePicker
      sx={{ flexGrow: 1 }}
      label={label}
      value={value}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} error={!!error} />}
    />
  );

  const desktopPicker = (
    <DesktopDateTimePicker
      sx={{ flexGrow: 1 }}
      label={label}
      value={value}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} error={!!error} />}
    />
  );

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      locale={localeMap[locale]}
    >
      {isMobile ? mobilePicker : desktopPicker}
    </LocalizationProvider>
  );
}
