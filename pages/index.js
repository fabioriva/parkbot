import * as React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import useTranslation from 'next-translate/useTranslation'
import Footer from 'src/components/Footer'

export default function Home (props) {
  const { t } = useTranslation()
  const router = useRouter()

  const handleSignin = () =>
    router.push('/signin', '/signin', { locale: props.__lang })

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        textAlign: 'center'
        // backgroundColor: '#212121'
      }}
    >
      <Toolbar sx={{ mb: 4 }}>
        <Box>
          <Button size='default' href='https://www.sotefin.com'>
            Sotefin
          </Button>
        </Box>
        <Box sx={{ marginLeft: 'auto' }}>
          <Button variant='outlined' size='default' href='/signin'>
            Sign in
          </Button>
        </Box>
      </Toolbar>
      <Container component='main' maxWidth='md'>
        <Typography
          sx={{
            color: '#ff9800',
            fontSize: { xs: 64, md: 100 },
            fontWeight: 500
          }}
          variant='h2'
          component='h1'
          // gutterBottom
        >
          <Box
            sx={{
              // bgcolor: '#212121',
              display: 'inline-block',
              px: 1.5,
              py: 0
            }}
          >
            Park<span style={{ color: '#212121', paddingLeft: 3 }}>Bot</span>
          </Box>
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 16, md: 24 }, fontWeight: 300 }}
          variant='h6'
          component='h2'
          // gutterBottom
        >
          {t('common:home-title')}
        </Typography>
        <Box
          sx={{
            m: 3
          }}
        >
          <Image src='/bot.svg' alt='ParkBot' width={100} height={100} />
          <Typography
            // sx={{ display: { xs: 'none', md: 'block' } }}
            sx={{ fontSize: { xs: 10, md: 14 } }}
            variant='overline'
            display='block'
          >
            {t('common:home-text')}
          </Typography>
        </Box>
        <Button
          // sx={{ width: 200 }}
          variant='outlined'
          size='large'
          onClick={handleSignin}
        >
          {t('common:home-button')}
        </Button>
      </Container>
      <Footer />
    </Box>
  )
}
