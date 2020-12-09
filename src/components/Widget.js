import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
    minWidth: 240
    // transform: 'translateY(-40px)'
    // width: '100%'
  },
  title: {
    fontSize: 16,
    color: '#000'
  }
}))

export default function Widget ({
  children,
  authorization,
  title,
  button,
  showModal
}) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {title}
        </Typography>
        {children}
      </CardContent>
      {button && (
        <CardActions>
          <Button
            disabled={
              button.enable !== undefined
                ? !authorization || !button.enable.status
                : true
            }
            // size="small"
            color='primary'
            onClick={() => showModal(0, button.write)}
          >
            {button.label}
          </Button>
        </CardActions>
      )}
    </Card>
  )
}
