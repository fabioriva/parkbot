import React from 'react'
import { format, subDays } from 'date-fns'
import { fetchOperations } from 'src/lib/fetchJson'
import Layout from 'src/components/Layout'
import Error from 'src/components/Error'
import useTranslation from 'next-translate/useTranslation'
import Operations from 'src/components/statistics/BarChart'
import Table from 'src/components/statistics/StatisticsTable'
// material-ui
import Hidden from '@material-ui/core/Hidden'
import Paper from '@material-ui/core/Paper'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { makeStyles } from '@material-ui/core/styles'
import { DatePicker } from '@material-ui/pickers'

const useStyles = makeStyles(theme => ({
  datePicker: {
    marginBottom: theme.spacing(2)
  },
  tabs: {
    marginBottom: theme.spacing(2)
  }
}))

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  )
}

export default function Statistics (props) {
  const classes = useStyles()
  const { t } = useTranslation('statistics')
  const { definitions, json } = props

  if (json.err) {
    return <Error {...props} message='Error 500' />
  }

  const [statistics, setStatistics] = React.useState(json)

  const [selectedDate, handleDateChange] = React.useState(
    format(subDays(new Date(), 1), 'yyyy-MM-dd')
  )

  React.useEffect(() => fetch(selectedDate), [])

  const handleConfirm = async date => {
    handleDateChange(date)
    fetch(format(date, 'yyyy-MM-dd'))
  }

  const fetch = async date => {
    const json = await fetchOperations(definitions.backendUrl, date)
    if (!json.err) setStatistics(json)
  }

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Layout {...props}>
      {/* <DatePicker date={yesterday} onConfirm={handleConfirm} /> */}
      {/* <MuiDatePicker date={yesterday} onConfirm={handleConfirm} /> */}
      <DatePicker
        format='yyyy-MM-dd'
        label='Select a date'
        value={selectedDate}
        onChange={date => handleConfirm(date)}
        className={classes.datePicker}
      />
      <Hidden implementation='css' xsDown>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          className={classes.tabs}
        >
          {statistics.map((item, key) => (
            <Tab
              key={key}
              label={item.i18n !== undefined ? t(item.i18n) : item.title}
            />
          ))}
        </Tabs>
        {statistics.map((item, key) => (
          <TabPanel key={key} value={value} index={key}>
            <Paper>
              <Operations data={item} height={480} />
            </Paper>
          </TabPanel>
        ))}
      </Hidden>
      <Hidden implementation='css' smUp>
        {statistics.map(
          (item, key) =>
            item.data.length > 0 && <Table key={key} statistics={item} />
        )}
      </Hidden>
    </Layout>
  )
}
