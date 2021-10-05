import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function Widget ({ children, href, title }) {
  return (
    <Card sx={{ width: '100%' }}>
      <CardActionArea href={href}>
        <CardContent>
          {title && (
            <Typography variant='h6' component='h2' gutterBottom>
              {title}
            </Typography>
          )}
          {children}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
