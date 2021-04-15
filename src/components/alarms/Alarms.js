import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import useData from 'src/lib/useData'
import Error from 'src/components/Error'
import Layout from 'src/components/Layout'
import ParkBot from 'src/components/ParkBot'
// material-ui
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Badge from '@material-ui/core/Badge'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
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

export default function Alarms (props) {
  const { t } = useTranslation('alarms')
  const { definitions, json } = props

  if (json.err) {
    return <Error {...props} message='Error 500' />
  }

  const [alarms, setAlarms] = React.useState(json)

  const { data } = useData(`${definitions.backendUrl}/alarms`, {
    initialData: alarms,
    refreshInterval: 1000
  })

  React.useEffect(() => setAlarms(data), [data])

  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Layout {...props}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        variant={matches ? 'fullWidth' : 'scrollable'}
        scrollButtons={matches ? 'auto' : 'on'}
        centered={matches}
        // className={classes.tabs}
        style={{
          // backgroundColor: theme.palette.background.paper,
          marginBottom: 16
        }}
      >
        {alarms.map((item, key) => (
          <Tab
            key={key}
            label={
              <Badge badgeContent={item.active.length} color='secondary'>
                <span>{item.name}</span>
              </Badge>
            }
            // disabled={item.active.length === 0}
          />
        ))}
      </Tabs>
      {alarms.map((item, key) => (
        <TabPanel key={key} value={value} index={key}>
          {item.active.length > 0 ? (
            <Paper>
              <List>
                {item.active.map((item, key) => (
                  <ListItem key={key}>
                    <ListItemText
                      primary={item.label}
                      secondary={`${item.date}: ${t(item.info)}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          ) : (
            <ParkBot message={t('no-alarms')} />
          )}
        </TabPanel>
      ))}
    </Layout>
  )
}
