import React from 'react'
import useData from 'src/lib/useData'
import Error from 'src/components/Error'
import Layout from 'src/components/Layout'
// material-ui
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

  return (
    <Layout {...props}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        variant='scrollable' // variant='fullWidth'
        scrollButtons='auto'
        // className={classes.tabs}
        style={{ marginBottom: 16 }}
      >
        {alarms.map((item, key) => (
          <Tab
            key={key}
            label={
              <Badge badgeContent={item.active.length} color='secondary'>
                <span>{item.name}</span>
              </Badge>
            }
            disabled={item.active.length === 0}
          />
        ))}
      </Tabs>
      {alarms.map((item, key) => (
        <TabPanel key={key} value={value} index={key}>
          <Paper>
            <List>
              {item.active.map((item, key) => (
                <ListItem key={key}>
                  <ListItemText primary={item.label} secondary={item.date} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </TabPanel>
      ))}
    </Layout>
  )
}
