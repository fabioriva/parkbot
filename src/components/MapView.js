import { useTranslation } from 'react-i18next'
// material-ui
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

export default function MapViewFilter ({ filter, handleChange }) {
  const { t } = useTranslation(['map'])

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
