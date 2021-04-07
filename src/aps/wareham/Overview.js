import Grid from '@material-ui/core/Grid'

const Overview = props => (
  <Grid container spacing={1} justify='space-between' alignItems='center'>
    {props.devices.map((item, key) => (
      <Grid item key={key} xs={12} lg={6}>
        {item}
      </Grid>
    ))}
  </Grid>
)

export default Overview
