import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import CircleIcon from '@mui/icons-material/Circle'

const Item = styled(Box)(({ theme }) => ({
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

export default function DirectionalPanel (props) {
  return (
    <Grid
      container
      spacing={1}
      justifyContent='center'
      sx={{ width: '50%', margin: 'auto' }}
    >
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Item>
          <ArrowUpwardIcon color='success' fontSize='medium' />
        </Item>
      </Grid>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Item>
          <ArrowBackIcon color='disabled' fontSize='medium' />
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <CircleIcon color='error' fontSize='medium' />
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <ArrowForwardIcon color='disabled' fontSize='medium' />
        </Item>
      </Grid>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Item>
          <ArrowDownwardIcon color='disabled' fontSize='medium' />
        </Item>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  )
}
