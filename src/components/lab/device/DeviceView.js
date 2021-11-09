import React from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import Layout from 'src/components/Layout'
import DeviceInfo from 'src/components/device/DeviceInfo'
import Inverter from 'src/components/device/Inverter'
import Motor from 'src/components/device/Motor'
import { useData } from 'src/lib/useWebSocket'

import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import BoltIcon from '@mui/icons-material/OfflineBolt'
// import RestoreIcon from '@mui/icons-material/Restore'
import AutorenewIcon from '@mui/icons-material/Autorenew'
// import FavoriteIcon from '@mui/icons-material/Favorite'
import CarRepairIcon from '@mui/icons-material/CarRepair'
// import LocationOnIcon from '@mui/icons-material/LocationOn'

// import Image from 'next/image'
// import profilePic from 'public/silomat_top.jpg'

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps (index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  }
}

export default function DeviceView (props) {
  const router = useRouter()
  const { id } = router.query
  const { t } = useTranslation('overview')
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

  if (props.json.err)
    return (
      <Layout {...props} pageTitle={'device.a.name'}>
        <div>Fetch Error</div>
      </Layout>
    )

  const [deviceView, setDeviceView] = React.useState(props.json)

  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/diagnostic/${id}`
  const { data, loading } = useData(url, {
    initialData: deviceView,
    page: 'diagnostic'
  })
  React.useEffect(() => setDeviceView(data), [data])

  const { device, inverters, motors, silomat } = deviceView

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Layout
      {...props}
      pageTitle={t('device-view-title', { name: device.a.name })}
    >
      {/* <Box sx={{ width: '100%' }}> */}
      {/* <DeviceInfo alarms={device.alarms} /> */}
      {/* <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}> */}
      {!isMobile && (
        <Tabs
          sx={{ mb: 3 }}
          value={value}
          onChange={handleChange}
          aria-label='device info'
          variant={!isMobile ? 'standard' : 'fullWidth'}
        >
          <Tab label='Drives' {...a11yProps(0)} />
          <Tab label='Motors' {...a11yProps(1)} />
          <Tab label='Silomat' {...a11yProps(2)} />
        </Tabs>
      )}
      {/* </Box> */}

      <TabPanel value={value} index={0}>
        <Grid container spacing={1.5}>
          {inverters.map((item, key) => (
            <Grid item key={key} xs={12} md={6} lg={4} xl={3}>
              <Inverter {...item} loading={loading} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container spacing={1.5}>
          {motors.map((item, key) => (
            <Grid item key={key} xs={12} md={6} lg={4} xl={3}>
              <Motor
                {...item}
                loading={loading}
                subheader={t('motor-nr', { nr: item.id })}
                // subheader={<span>Motor</span>}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Grid container spacing={1.5}>
          <React.Fragment>
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <Motor
                {...silomat.M1}
                loading={loading}
                subheader={<span>Silomat&trade;</span>}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <Motor
                {...silomat.M2}
                loading={loading}
                subheader={<span>Silomat&trade;</span>}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <Motor
                {...silomat.M3}
                loading={loading}
                subheader={<span>Silomat&trade;</span>}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <Motor
                {...silomat.M4}
                loading={loading}
                subheader={<span>Silomat&trade;</span>}
              />
            </Grid>
          </React.Fragment>
        </Grid>
        {/* <img className='silomat-img' src='/silomat_view.png' alt='' /> */}
        {/* <h4>Silomat View</h4>
          <Image
            src={profilePic}
            alt='Silomat'
          /> */}
      </TabPanel>

      {isMobile && (
        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
          >
            <BottomNavigationAction label='Drives' icon={<BoltIcon />} />
            <BottomNavigationAction label='Motors' icon={<AutorenewIcon />} />
            <BottomNavigationAction label='Silomat' icon={<CarRepairIcon />} />
          </BottomNavigation>
        </Paper>
      )}
      {/* </Box> */}
    </Layout>
  )
}
