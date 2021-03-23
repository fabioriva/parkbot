import { useState } from 'react'
import Layout from 'src/components/Layout'
import Error from 'src/components/Error'
import useTranslation from 'next-translate/useTranslation'
import BarChart from 'src/components/statistics/BarChart'
import Table from 'src/components/statistics/StatisticsTable'
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

export default function Statistics ({ definitions, json, user }) {
  const { t } = useTranslation('statistics')

  const { apsName, backendUrl, websockUrl, userRole } = definitions

  if (json.err) {
    return (
      <Error
        definitions={definitions}
        message='Error 500'
        title={t('title')}
        user={user}
      />
    )
  }

  const [statistics, setStatistics] = useState(json)

  console.log(statistics)

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Layout
      apsName={apsName}
      pageTitle={t('title')}
      socket={`${websockUrl}?channel=ch2`}
      user={user}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        variant='fullWidth'
        // className={classes.tabs}
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
          <BarChart data={item} />
          <br />
          <Table key={key} data={item.data} />
        </TabPanel>
      ))}
    </Layout>
  )
}
