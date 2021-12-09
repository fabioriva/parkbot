import * as React from 'react'
import { useRouter } from 'next/router'
// import Image from 'next/image'
import { styled } from '@mui/material/styles'
// import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import LoginIcon from '@mui/icons-material/Login'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Footer from 'src/components/Footer'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(3),
  // paddingLeft: theme.spacing(1.5),
  // paddingRight: theme.spacing(1.5),
  // fontFamily: '"IBM Plex Sans", sans-serif',
  // textAlign: 'left',
  // backgroundColor: '#F3F6F9',
  color: theme.palette.text.secondary
  // display: 'flex',
  // justifyContent: 'center',
  // flexDirection: 'column',
  // minHeight: 100
}))

export default function Home () {
  const router = useRouter()
  // redirect to https://sotefinservice.com
  if (
    global.window !== undefined &&
    global.window.location.hostname === 'parkbot.vercel.app'
  ) {
    router.push('https://sotefinservice.com')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <Toolbar
        sx={{
          mb: { xs: 3, md: 4 },
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
                underline='none'
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
      <div className='silomat-wrap'>
        <Container maxWidth='md'>
          {/* <div className='silomat-wrap'> */}
          {/* <Image
            className='silomat-img'
            src='/silomat.jpg'
            alt='Silomat'
            width={750}
            height={349}
          /> */}
          <img className='silomat-img' src='/silomat.jpg' alt='' />
          <div className='silomat-content'>
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Box
                sx={{
                  mb: { xs: 3, md: 4 },
                  color: '#0A1929',
                  fontSize: { xs: '2.7rem', md: 72 },
                  fontWeight: { xs: 700, md: 700 },
                  letterSpacing: -0.85,
                  lineHeight: 1.05
                }}
              >
                <span className='parkbot'>Parkbot</span>
                &nbsp;the full stack solution for robotic parking systems
              </Box>
              <Box
                // display={{ xs: 'none', md: 'block' }}
                sx={{
                  mb: { xs: 3, md: 4 },
                  color: '#000'
                  // color: '#0A1929',
                  // fontFamily: '"IBM Plex Sans", sans-serif',
                  // typography: 'body1'
                }}
              >
                Web based access to Parkbot in the cloud allows customers to use
                the application from any location. All you need is an internet
                access, up-to-date browser, PC or smartphone.{' '}
                <Box display={{ xs: 'none', md: 'inline' }}>
                  Users simply sign in to immediately access the latest version
                  of Parkbot from anywhere, with no time or effort spent on
                  installation, enabling users to remotely control and monitor
                  the automatic parking systems faster.
                </Box>
              </Box>
            </Box>
            <Button
              sx={{
                mb: { xs: 3, md: 4 },
                borderRadius: 2,
                boxShadow: 'none',
                fontSize: 17,
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
          </div>
          {/* </div> */}
        </Container>
      </div>
      <Box sx={{ bgcolor: '#f3f6f9', flexGrow: 1, pt: { xs: 3, md: 4 } }}>
        <Container maxWidth='md'>
          <Grid container sx={{ mb: { xs: 3, md: 4 } }} spacing={3}>
            <Grid item xs={12} sm={6}>
              <Item>
                <Typography
                  variant='h6'
                  sx={{ fontWeight: 'bold' }}
                  gutterBottom
                >
                  Analytics
                </Typography>
                Push data to clients that gets represented as real-time
                messages, charts or logs.
              </Item>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Item>
                <Typography
                  variant='h6'
                  sx={{ fontWeight: 'bold' }}
                  gutterBottom
                >
                  Mobile first
                </Typography>
                It works on every platform, modern browser or device, focusing
                equally on reliability and speed.
              </Item>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Item>
                <Typography
                  variant='h6'
                  sx={{ fontWeight: 'bold' }}
                  gutterBottom
                >
                  Real-time communication
                </Typography>
                Enables real-time bidirectional event-based communication
                featuring the fastest and most reliable real-time engine.
              </Item>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Item>
                <Typography
                  variant='h6'
                  sx={{ fontWeight: 'bold' }}
                  gutterBottom
                >
                  Web based
                </Typography>
                Web applications are popular due to the ubiquity of web
                browsers, and the convenience of using a web browser as a
                client.
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ bgcolor: '#f3f6f9' }}>
        <Footer />
      </Box>
      <style jsx global>
        {`
          .parkbot {
            /* background: -webkit-linear-gradient(left, #007fff, #0059b2); */
            background: -webkit-linear-gradient(left, #ff9933, #e9692c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .silomat-wrap {
            overflow: hidden;
            position: relative;
          }
          .silomat-img {
            /* background-image: url(/silomat.jpg);
            background-repeat: no-repeat;
            background-position: center;
            opacity: 0.6; */
            opacity: 0.3;
            position: absolute;
            left: 0;
            top: 0;
            width: 1200px;
            height: auto;
            left: 50%;
            margin-left: -600px;
          }
          .silomat-content {
            position: relative;
          }
        `}
      </style>
    </Box>
  )
}
