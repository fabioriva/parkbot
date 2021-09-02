import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

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
