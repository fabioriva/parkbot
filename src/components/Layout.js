import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import useMediaQuery from '@mui/material/useMediaQuery'
// import Alert from 'src/components/Alert'
import Drawer from 'src/components/Drawer'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Navbar from 'src/components/Navbar'
import Snackbar from 'src/components/Snackbar'
import { useComm } from 'src/lib/useWebSocket'

export default function AppLayout (props) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

  const { comm, diag, map, message } = useComm(
    `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/info`
  )

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: theme =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.background.default
      }}
    >
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Drawer
        aps={props.aps}
        locale={props.locale !== undefined ? props.locale : 'en'}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <Box
        component='main'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100%'
        }}
        // maxWidth='xl' // drawer responsive
      >
        <Container maxWidth='xl'>
          <Toolbar />
          <Header
            aps={props.aps}
            apsName={props.apsName}
            pageTitle={props.pageTitle}
            comm={comm}
            diag={diag}
            map={map}
          />
          {!comm && <Alert severity='error'>APS is offline.</Alert>}
          {/* <Alert severity='info'>
            Execution time (SSR): {props.executionTime[0]}
            {'s '}
            {props.executionTime[1] / 1000000}ms
          </Alert> */}
        </Container>
        {isMobile && props.children}
        {!isMobile && (
          <Container
            maxWidth='xl'
            sx={{
              mb: 3
              // display: { xs: isMobile ? 'none' : 'block', md: 'block' }
            }}
          >
            {props.children}
            <Snackbar message={message} />
          </Container>
        )}

        <Box sx={{ mb: 3 }} />
        <Footer />
      </Box>
    </Box>
  )
}
