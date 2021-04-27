import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

export default function Copyright () {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'© '}
      {new Date().getFullYear()}{' '}
      <Link color='inherit' href='https://www.sotefin.com/'>
        Sotefin SA
      </Link>
    </Typography>
  )
}
