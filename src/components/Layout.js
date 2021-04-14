import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import AppBar from 'src/components/AppBar'
import Drawer from 'src/components/Drawer'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import snackbar from 'src/lib/notification'
import { useComm } from 'src/lib/useWebSocket'
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

export default function AppLayout (props) {
  const classes = useStyles()
  const { t } = useTranslation('common')

  const { definitions, user } = props
  const { apsName, pageTitle, websockUrl } = definitions

  const { comm, diag, map, notification } = useComm(
    websockUrl.concat('?channel=ch2')
  )

  React.useEffect(async () => {
    if (notification) {
      const snack = await snackbar(notification, user.locale)
      console.log(snack)
      props.enqueueSnackbar(snack.message, snack.options)
    }
  }, [notification])

  const [mobileOpen, setMobileOpen] = React.useState(false)

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
            pageTitle={t(pageTitle)}
            comm={comm}
            diag={diag}
            map={map}
          />
          {props.children}
        </Container>
        <Footer />
      </main>
    </div>
  )
}
