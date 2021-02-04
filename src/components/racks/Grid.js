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
  media: {
    height: 140
  }
})

export default function GridList ({ racks, user }) {
  const classes = useStyles()

  return (
    <Grid container spacing={3}>
      {racks.map((item, key) => (
        <Grid key={key} item xs={12} lg={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='Contemplative Reptile'
                height={140}
                image={
                  item.serie === 'et200m' ? '/et200mp-1.png' : '/et200sp-2.jpg'
                }
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant='h6' component='h3'>
                  {item.title}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  <span>PLC Rack {item.nr}</span>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link href={`/${user.aps}/racks/${key}`}>
                <Button
                  size='small'
                  color='primary'
                  // href={`/${user.aps}/racks/${key}`}
                >
                  View
                </Button>
              </Link>
              <Link href={`/${user.aps}/racks/${key}`}>
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
        </Grid>
      ))}
    </Grid>
  )
}
