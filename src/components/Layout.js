import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
// import Alert from 'src/components/Alert'
import Drawer from 'src/components/Drawer'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Navbar from 'src/components/Navbar'
import Snackbar from 'src/components/Snackbar'
import fetch from 'src/lib/fetch'
import { useComm } from 'src/lib/useWebSocket'

export default function AppLayout (props) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

  const { comm, diag, map, message, loading, expired } = useComm(
    `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/info`
  )

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleKeyDown = async e => {
    if (e.keyCode == 13) {
      const code = e.target.value
      // console.log('Activation Key:', code)
      // post activation code
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/activate`
      const json = await fetch(url, {
        method: 'POST',
        // withCredentials: true,
        // credentials: 'include',
        headers: {
          Authorization: 'Bearer ' + props.token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      })
      // console.log(json)
      if (json.severity !== 'success') e.target.value = null
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: '#f3f6f9'
        // backgroundColor: theme =>
        //   theme.palette.mode === 'light'
        //     ? theme.palette.grey[200]
        //     : theme.palette.background.default
      }}
    >
      <Navbar user={props.user} handleDrawerToggle={handleDrawerToggle} />
      <Drawer
        aps={props.aps}
        locale={props.locale !== undefined ? props.locale : 'en'}
        user={props.user}
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
        <Container maxWidth='false'>
          <Toolbar />
          <Header
            aps={props.aps}
            apsName={props.apsName}
            pageTitle={props.pageTitle}
            comm={comm}
            diag={diag}
            map={map}
            loading={loading}
          />
          {/* {!comm && <Alert severity='error'>APS is offline.</Alert>} */}
          {/* <Alert severity='info'>
            Execution time (SSR): {props.executionTime[0]}
            {'s '}
            {props.executionTime[1] / 1000000}ms
          </Alert> */}
        </Container>
        {isMobile && props.children}
        {!isMobile && (
          <Container
            maxWidth='false'
            sx={{
              mb: 3
              // display: { xs: isMobile ? 'none' : 'block', md: 'block' }
            }}
          >
            {props.children}
          </Container>
        )}
        <Snackbar message={message} />
        <Box sx={{ mb: 3 }} />
        <Footer />
      </Box>
      <Modal
        open={expired}
        onClose={() => console.log('close')}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          // component='form'
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #ff0000',
            boxShadow: 24,
            p: 4,
            textAlign: 'center'
          }}
        >
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            License has expired.
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Enter license key to unlock the service.
          </Typography>
          <TextField
            id='standard-basic'
            variant='standard'
            sx={{ my: 2 }}
            onKeyDown={handleKeyDown}
          />
        </Box>
      </Modal>
    </Box>
  )
}
