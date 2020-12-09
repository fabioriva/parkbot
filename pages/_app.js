// import App from 'next/app'
import Head from 'next/head'
import React from 'react'
// i18n
import i18n from 'src/lib/i18n'
import { I18nextProvider } from 'react-i18next'
// material-ui
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from 'src/theme'
// notistack
import { SnackbarProvider } from 'notistack'

function MyApp ({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const { locale, locales, ns } = pageProps
  return (
    <>
      <Head>
        <title>ParkBot</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <I18nextProvider i18n={i18n(locale, locales, ns)}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarProvider maxSnack={3}>
            <Component {...pageProps} />
          </SnackbarProvider>
        </ThemeProvider>
      </I18nextProvider>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async appContext => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext)
//   return { ...appProps }
// }

export default MyApp
