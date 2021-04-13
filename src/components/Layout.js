import { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'
import useTranslation from 'next-translate/useTranslation'
import AppBar from 'src/components/AppBar'
import Drawer from 'src/components/Drawer'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import { useComm } from 'src/lib/useWebSocket'
import snackbar from 'src/lib/notification'
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

  const { enqueueSnackbar } = useSnackbar()

  const { t } = useTranslation('common')

  const { comm, diag, map, notification } = useComm(socket)

  useEffect(() => {
    if (notification) {
      console.log(notification)
      const snack = snackbar(notification, user.locale)
      enqueueSnackbar(snack)
    }
  }, [notification])

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
