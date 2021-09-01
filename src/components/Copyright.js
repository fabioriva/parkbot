import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

export default function Copyright () {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'© '}
      <Link color='inherit' underline='hover' href='https://www.sotefin.com/'>
        Sotefin SA
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  )
}
