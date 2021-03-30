import { format, parseISO } from 'date-fns'
import useTranslation from 'next-translate/useTranslation'
import Back from 'src/components/BackButton'
import Error from 'src/components/Error'
import Layout from 'src/components/Layout'
// material-ui
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const Item = ({ title, value }) => (
  <>
    <Typography variant='body2' color='textSecondary' component='p'>
      {title}
    </Typography>
    <Typography
      variant='h6'
      // color="primary"
      component='h2'
      gutterBottom
      style={{ color: 'rgb(54, 77, 121)' }}
    >
      {value}
    </Typography>
  </>
)

const Log = ({ definitions, json, user }) => {
  const { t } = useTranslation('history')
  const { apsName, websockUrl } = definitions

  if (json.err) {
    return (
      <Error
        definitions={definitions}
        message='Error 500'
        title={t('title')}
        user={user}
      />
    )
  }

  const log = json

  return (
    <Layout
      apsName={apsName}
      pageTitle='Log'
      socket={`${websockUrl}?channel=ch2`}
      user={user}
    >
      <Card>
        <CardContent>
          <Item
            title={t('log-date')}
            value={log.logged}
            // value={format(parseISO(log.date), 'yyyy-MM-dd HH:mm:ss')}
          />
          <Item
            title={t('log-device')}
            value={log.device.id === 0 ? t('dev-operator') : log.device.name}
          />
          <Item title={t('log-card')} value={log.card} />
          <Item title={t('log-stall')} value={log.stall} />
          <Item title={t('log-operation')} value={log.operation.info} />
          {log.alarm.id > 0 && (
            <Item title={t('log-alarm')} value={log.alarm.info} />
          )}
        </CardContent>
        <CardActions>
          <Back />
        </CardActions>
      </Card>
    </Layout>
  )
}

export default Log
