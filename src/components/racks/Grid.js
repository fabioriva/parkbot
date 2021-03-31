import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  },
  media: {
    height: 140
  }
})

function CardItem ({ rack, user }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height={140}
          image={rack.serie === 'et200m' ? '/et200mp-1.png' : '/et200sp-2.jpg'}
          title={rack.title}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='h3'>
            {rack.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            <span>PLC Rack {rack.nr}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={`/${user.aps}/racks/${rack.nr - 1}`}>
          <Button
            size='small'
            color='primary'
            // href={`/${user.aps}/racks/${key}`}
          >
            View
          </Button>
        </Link>
        <Link href={`/${user.aps}/racks/${rack.nr - 1}`}>
          <Button
            size='small'
            color='primary'
            // href={`/${user.aps}/racks/${key}`}
          >
            View List
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default function GridList ({ racks, user }) {
  const classes = useStyles()
  return (
    <Grid container spacing={3}>
      {racks.map((item, key) => (
        <Grid key={key} item xs={12} lg={3}>
          <CardItem rack={item} user={user} />
        </Grid>
      ))}
    </Grid>
  )
}
