import Grid from '@material-ui/core/Grid'

const Overview = props => (
  <Grid
    container
    // direction='column'
    justify='center'
    // alignContent='center'
    // alignItems='center'
    spacing={1}
  >
    {props.devices.map((item, key) => (
      <Grid item key={key} xs={12} lg={6}>
        {item}
      </Grid>
    ))}
  </Grid>
)

export default Overview
