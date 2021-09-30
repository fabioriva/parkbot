import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LoginIcon from '@mui/icons-material/Login'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Footer from 'src/components/Footer'

export default function Home () {
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Toolbar
          sx={{
            mb: { xs: 6, md: 8 }
            // borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
          }}
          disableGutters
        >
          <Container maxWidth='md'>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Avatar src='/bot.svg' sx={{ mr: 2 }} />
              </Box>
              {/* <Link
                href='https://www.sotefin.com'
                underline='none'
                sx={{ flexGrow: 1, color: 'inherit' }}
              >
                SOTEFIN
              </Link> */}
              {/* <Button href='/signin'>Login</Button> */}
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='primary-search-account-menu'
                aria-haspopup='true'
                color='inherit'
                href='/signin'
              >
                <LoginIcon />
              </IconButton>
            </Box>
          </Container>
        </Toolbar>
        <Container maxWidth='md'>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box
              sx={{
                mb: { xs: 4, md: 4 },
                color: '#0A1929',
                fontSize: { xs: '2.6rem', md: 72 },
                fontWeight: { xs: 700, md: 700 },
                letterSpacing: -0.85,
                lineHeight: 1.05
              }}
            >
              <span className='main'>Parkbot</span>
              &nbsp;the full stack solution for robotic parking systems
            </Box>
            <Box
              sx={{
                mb: { xs: 4, md: 4 },
                color: '#2F3A45',
                maxWidth: 500,
                typography: 'subtitle1'
              }}
            >
              MUI provides a robust, customizable, and accessible library of
              foundational and advanced components, enabling you to build your
              own design system and develop React applications faster.
            </Box>
          </Box>
          <Button
            sx={{
              borderRadius: 2,
              boxShadow: 'none',
              fontSize: 16,
              textTransform: 'none',
              width: { xs: '100%', sm: 200 },
              '&:hover': {
                boxShadow: 'none'
              }
            }}
            variant='contained'
            size='large'
            endIcon={<KeyboardArrowRightIcon />}
            href='/signin'
          >
            Get started
          </Button>
        </Container>
        <Footer />
      </Box>
      <style jsx global>
        {`
          .main {
            background: -webkit-linear-gradient(left, #ff9933, #e9692c);
            /* background: -webkit-linear-gradient(left, #007fff, #0059b2); */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>
    </div>
  )
}
