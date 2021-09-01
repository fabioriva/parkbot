import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default function Widget ({ children, link, title }) {
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: '100%'
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
