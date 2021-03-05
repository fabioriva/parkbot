import { useState } from 'react'
import AppBar from 'src/components/AppBar'
import Drawer from 'src/components/Drawer'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import { useComm } from 'src/lib/websocket'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  sticky: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%'
  },
  toolbar: theme.mixins.toolbar
}))

export default function AppLayout ({
  children,
  apsName,
  pageTitle,
  socket,
  user
}) {
  const classes = useStyles()

  const { comm, diag, map } = useComm(socket)

  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>
      <AppBar position='fixed' handleDrawerToggle={handleDrawerToggle} />
      <Drawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        diag={diag}
        user={user}
      />
      <main className={classes.sticky}>
        <Container maxWidth='xl'>
          <div className={classes.toolbar} />
          <Header
            aps={apsName}
            pageTitle={pageTitle}
            comm={comm}
            diag={diag}
            map={map}
          />
          {children}
        </Container>
        <Footer />
      </main>
    </div>
  )
}
