import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import LoginIcon from '@mui/icons-material/Login'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Footer from 'src/components/Footer'

import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  minHeight: 100
}))

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
            mb: { xs: 4, md: 8 },
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
          }}
          disableGutters
        >
          <Container maxWidth='md'>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/* <IconButton sx={{ mr: 1 }} disabled>
                <Avatar src='/bot.svg' />
              </IconButton> */}
              <Box sx={{ flexGrow: 1 }}>
                <Link
                  href='https://www.sotefin.com'
                  underline='hover'
                  sx={{
                    flexGrow: 1,
                    color: 'inherit',
                    textTransform: 'uppercase'
                  }}
                >
                  Sotefin{' '}
                  <Box display={{ xs: 'none', md: 'inline' }}>
                    Computerized Parking Systems
                  </Box>
                </Link>
              </Box>
              <IconButton
                size='large'
                aria-label='login'
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
              Parkbot is a progressive web app. It provides an easy, robust, and
              accessible library of foundational and advanced components,
              enabling you to remotely monitor and service your automatic
              parking systems faster.
            </Box>
          </Box>
          <Button
            sx={{
              mb: 4,
              borderRadius: 2,
              boxShadow: 'none',
              fontSize: 16,
              textTransform: 'none',
              height: 56,
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
          <Grid container mb={4} spacing={2}>
            <Grid item xs={12} md={6}>
              <Item>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom>
                  Real-time communication
                </Typography>
                Enables real-time bidirectional event-based communication
                featuring the fastest and most reliable real-time engine.
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom>
                  Analytics
                </Typography>
                Push data to clients that gets represented as real-time
                messages, charts or logs.
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom>
                  Web based
                </Typography>
                Web applications are popular due to the ubiquity of web
                browsers, and the convenience of using a web browser as a
                client.
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom>
                  Mobile first
                </Typography>
                It works on every platform, modern browser or device, focusing
                equally on reliability and speed.
              </Item>
            </Grid>
          </Grid>
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
