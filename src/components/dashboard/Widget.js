import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function Widget ({ children, link, title }) {
  return (
    <Card
      variant='outlined'
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: '100%'
        // mx: { xs: 0.5, md: 0 }
      }}
    >
      <CardContent>
        {title && (
          <Typography variant='h6' component='h2' gutterBottom>
            {title}
          </Typography>
        )}
        {children}
      </CardContent>
      <CardActions>
        <Button size='small' href={link}>
          More
        </Button>
      </CardActions>
    </Card>
  )
}
