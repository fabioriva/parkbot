import Grid from '@material-ui/core/Grid'

const Overview = props => (
  <Grid container spacing={1}>
    <Grid item xs={12} md={6} lg={4}>
      {props.devices[0]}
    </Grid>
    <Grid item xs={12} md={6} lg={4}>
      {props.devices[2]}
    </Grid>
    <Grid item xs={12} md={6} lg={4}>
      {props.devices[4]}
    </Grid>
    <Grid item xs={12} md={6} lg={4}>
      {props.devices[1]}
    </Grid>
    <Grid item xs={12} md={6} lg={4}>
      {props.devices[3]}
    </Grid>
    <Grid item xs={12} md={6} lg={4}>
      {props.devices[5]}
    </Grid>
  </Grid>
)

export default Overview
