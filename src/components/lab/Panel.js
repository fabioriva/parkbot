import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCarTwoTone'

export default function DirectionalPanel (props) {
  const { l1, l2, l3, l4, l5 } = props.panel
  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f6f9',
        textAlign: 'center',
        height: 180,
        width: 180
      }}
    >
      <Grid container>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <ArrowUpwardIcon
            color={l1 ? 'success' : 'disabled'}
            sx={{ fontSize: 48 }}
          />
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <ArrowBackIcon
            color={l4 ? 'success' : 'disabled'}
            sx={{ fontSize: 48 }}
          />
        </Grid>
        <Grid item xs={4}>
          <DirectionsCarIcon
            color={l3 ? 'error' : 'disabled'}
            sx={{ fontSize: 48 }}
          />
        </Grid>
        <Grid item xs={4}>
          <ArrowForwardIcon
            color={l5 ? 'success' : 'disabled'}
            sx={{ fontSize: 48 }}
          />
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <ArrowDownwardIcon
            color={l2 ? 'success' : 'disabled'}
            sx={{ fontSize: 48 }}
          />
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </Paper>
  )
}
