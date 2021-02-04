import Typography from '@material-ui/core/Typography'

const Item = ({ title, value }) => (
  <>
    <Typography variant='body2' color='textSecondary' component='p'>
      {title}
    </Typography>
    <Typography
      variant='subtitle2'
      // color="primary"
      component='h2'
      gutterBottom
      style={{ color: 'rgb(54, 77, 121)', fontSize: 18, fontWeight: 'bold' }}
    >
      {value}
    </Typography>
  </>
)

export default Item
