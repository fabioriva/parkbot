import Grid from '@material-ui/core/Grid'

const Overview = props => (
  <Grid container spacing={1} justify='space-between' alignItems='top'>
    {props.devices.map((item, key) => (
      <Grid item key={key} xs={12} md={6} lg={4}>
        {item}
      </Grid>
    ))}
  </Grid>
)

export default Overview
