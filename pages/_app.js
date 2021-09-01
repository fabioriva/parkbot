import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import theme from 'src/theme'

const cache = createCache({ key: 'css' })
cache.compat = true

export default function MyApp ({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        />
        <meta name='description' content='Sotefin Web Service' />
        <meta name='keywords' content='Sotefin, Robotic, Parking, System' />
        <title>Park-Bot</title>
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/apple-icon.png' />
        <meta name='theme-color' content='#317EFB' />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
