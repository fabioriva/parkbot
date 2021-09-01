import useTranslation from 'next-translate/useTranslation'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import QueueList from 'src/components/overview/QueueList'

export default function Queue (props) {
  const { t } = useTranslation('overview')

  const { exitButton, queueList } = props.data

  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} gutterBottom>
          {t('queue-title')}
        </Typography>
        <QueueList queue={queueList} onDelete={props.onDelete} />
      </CardContent>
      <CardActions>
        <Button disabled={exitButton.status} onClick={props.onExit}>
          {t('dialog-exit')}
        </Button>
      </CardActions>
    </Card>
  )
}
