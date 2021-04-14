import { useState } from 'react'
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
  const { t } = useTranslation('statistics')
  const { definitions, json } = props

  if (json.err) {
    return <Error {...props} message='Error 500' />
  }

  const [statistics, setStatistics] = useState(json)

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Layout {...props}>
      <Hidden implementation='css' xsDown>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          // className={classes.tabs}
          style={{ marginBottom: 16 }}
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
              <Operations data={item} />
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
