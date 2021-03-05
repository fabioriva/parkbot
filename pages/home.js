import React from 'react'
import Image from 'next/image'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    marginBottom: 80
  },
  mainTitle: {
    color: '#ff9800',
    [theme.breakpoints.down('sm')]: {
      fontSize: '4rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem'
    },
    fontWeight: 500
  },
  mainSubtitle: {
    color: '#1976d2',
    [theme.breakpoints.down('sm')]: {
      fontSize: 24
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 24
    },
    // fontSize: 32,
    fontWeight: 400
  },
  startButton: {
    marginTop: 32
    // width: 200
  }
}))

export default function Home () {
  const classes = useStyles()
  return (
    <>
      {/* <AppBar position='static'> */}
      <Toolbar className={classes.appBar}>
        <Button color='inherit' href='https://www.sotefin.com'>
          ParkBot
        </Button>
        <Typography variant='h6' className={classes.title} />
        <Button color='inherit' variant='outlined'>
          Sign In
        </Button>
      </Toolbar>
      {/* </AppBar> */}
      <Container maxWidth='md'>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          spacing={3}
        >
          <Grid item xs={12} lg={4}>
            <Image src='/bot.svg' alt='ParkBot' width={100} height={100} />

            {/* <Typography
              variant='overline'
              align='center'
              // className={classes.description}
              paragraph
            >
              Hello, I am your robotic assistant!
            </Typography> */}
          </Grid>
          <Grid item xs={12} lg={8}>
            <div>
              <Typography
                className={classes.mainTitle}
                variant='h3'
                gutterBottom
              >
                PARK-BOT
              </Typography>
              <Typography
                className={classes.mainSubtitle}
                variant='h5'
                gutterBottom
              >
                The full stack solution for robotic parking systems.
              </Typography>
              <Button
                className={classes.startButton}
                color='primary'
                variant='outlined'
                size='large'
                // onClick={handleSignin}
              >
                Get Started
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
