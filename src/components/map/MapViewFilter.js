import useTranslation from 'next-translate/useTranslation'
// material-ui
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export default function MapViewFilter ({ filter, handleChange }) {
  const { t } = useTranslation('map')

  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>{t('filter-label')}</FormLabel>
      <RadioGroup
        aria-label='filter'
        name='filter'
        value={filter}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value='SHOW_NUMBERS'
          control={<Radio />}
          label={t('filter-number')}
        />
        <FormControlLabel
          value='SHOW_CARDS'
          control={<Radio />}
          label={t('filter-card')}
        />
        <FormControlLabel
          value='SHOW_SIZES'
          control={<Radio />}
          label={t('filter-size')}
        />
      </RadioGroup>
    </FormControl>
  )
}
