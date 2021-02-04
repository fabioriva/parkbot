import Grid from '@material-ui/core/Grid'

const Overview = props => (
  <Grid container justify='space-between' alignItems='center'>
    {props.devices.map((item, key) => (
      <Grid item key={key} xs={12} lg={6} xl={4}>
        {item}
      </Grid>
    ))}
  </Grid>
)

export default Overview
