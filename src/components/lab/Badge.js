import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import Brightness1Rounded from '@mui/icons-material/Brightness1Rounded'

const Item = ({ loading, title, value }) => (
  <Box>
    <Typography
      component='h1'
      variant='body2'
      fontFamily='"IBM Plex Sans", sans-serif'
      color='textSecondary'
    >
      {title}
    </Typography>
    <Typography
      component='h2'
      variant='subtitle2'
      fontFamily='"IBM Plex Sans", sans-serif'
      sx={{ color: 'info.dark', fontSize: 18, fontWeight: 'bold' }}
    >
      {loading ? <Skeleton variant='text' animation='wave' /> : value}
    </Typography>
  </Box>
)

const Led = styled(Box)(() => ({
  paddingBottom: 32,
  fontFamily: '"IBM Plex Sans", sans-serif',
  fontSize: 12,
  fontWeight: 600,
  textTransform: 'uppercase',
  height: 30,
  lineHeight: 1
}))

const Key = styled(Button)(() => ({
  fontFamily: '"IBM Plex Sans", sans-serif',
  fontSize: 16,
  fontWeight: 600,
  width: '100%'
  // borderWidth: 1,
  // '&:hover': { borderWidth: 1 }
}))

export default function Badge (props) {
  return (
    <Paper
      sx={{
        backgroundColor: '#f3f6f9',
        textAlign: 'center',
        width: { xs: '100%', md: 315 },
        p: 1.5
      }}
    >
      <Grid container>
        <Grid item xs={3}>
          <Led>Ready</Led>
          <Brightness1Rounded sx={{ color: 'success.main' }} />
        </Grid>
        <Grid item xs={3}>
          <Led>
            Enter
            <br />
            code
          </Led>
          <Brightness1Rounded sx={{ color: 'warning.main' }} />
        </Grid>
        <Grid item xs={3}>
          <Led>Error</Led>
          <Brightness1Rounded sx={{ color: 'error.main' }} />
        </Grid>
        <Grid item xs={3}>
          <Led>
            In
            <br />
            operation
          </Led>
          <Brightness1Rounded sx={{ color: 'info.main' }} />
        </Grid>
      </Grid>

      {/* Keyboard */}
      <Grid container spacing={1} my={3}>
        <Grid item xs={3}>
          <Key variant='outlined'>1</Key>
        </Grid>
        <Grid item xs={3}>
          <Key variant='outlined'>2</Key>
        </Grid>
        <Grid item xs={3}>
          <Key variant='outlined'>3</Key>
        </Grid>
        <Grid item xs={3}>
          <Key variant='outlined' color='secondary' disabled>
            C
          </Key>
        </Grid>
        <Grid item xs={3}>
          <Key variant='outlined'>4</Key>
        </Grid>
        <Grid item xs={3}>
          <Key variant='outlined'>5</Key>
        </Grid>
        <Grid item xs={3}>
          <Key variant='outlined'>6</Key>
        </Grid>
        <Grid item xs={3}>
          <Key variant='outlined' color='secondary'>
            D
          </Key>
        </Grid>
        <Grid item xs={3}>
          <Key variant='outlined'>7</Key>
        </Grid>
        <Grid item xs={3}>
          <Key variant='outlined'>8</Key>
        </Grid>
        <Grid item xs={3}>
          <Key variant='outlined'>9</Key>
        </Grid>
        <Grid item xs={3}>
          <Key variant='outlined' color='secondary'>
            E
          </Key>
        </Grid>
        <Grid item xs={3}>
          <Key variant='outlined' color='secondary'>
            A
          </Key>
        </Grid>
        <Grid item xs={3}>
          <Key variant='outlined'>0</Key>
        </Grid>
        <Grid item xs={3}>
          <Key variant='outlined' color='secondary'>
            B
          </Key>
        </Grid>
        <Grid item xs={3}>
          <Key variant='outlined' color='secondary'>
            F
          </Key>
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Item title={'Name'} value={props.name} />
        </Grid>
        <Grid item xs={3}>
          <Item title={'Card'} value={123} />
        </Grid>
        <Grid item xs={3}>
          <Item title={'PIN'} value={'ABC'} />
        </Grid>
        <Grid item xs={3}>
          <Item title={'User'} value={'DEF'} loading />
        </Grid>
      </Grid>
    </Paper>
  )
}
