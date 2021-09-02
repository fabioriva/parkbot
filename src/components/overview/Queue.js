import useTranslation from 'next-translate/useTranslation'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
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
