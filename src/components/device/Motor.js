import useTranslation from 'next-translate/useTranslation'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import Stack from '@material-ui/core/Stack'
import Typography from '@material-ui/core/Typography'
import Tooltip from 'src/components/Tooltip'

const Item = ({ title, value }) => (
  <>
    <Typography variant='body2' color='textSecondary' component='h1'>
      {title}
    </Typography>
    <Typography
      variant='subtitle2'
      // color="primary"
      component='h2'
      gutterBottom
      sx={{ color: 'rgb(54, 77, 121)', fontSize: 18, fontWeight: 'bold' }}
    >
      {value}
    </Typography>
  </>
)

export default function Motor (props) {
  const { t } = useTranslation('overview')

  // const IDLE = '---'
  console.log(props)
  return (
    <Card>
      <CardHeader
        sx={{
          py: 1,
          '& .MuiCardHeader-title': {
            fontSize: 16,
            fontWeight: 'bold'
          }
        }}
        title={t(props.name.key, props.name.query)}
        action={
          <Chip
            label={props.enable ? t('mot-enabled') : t('mot-disabled')}
            color={props.enable ? 'success' : 'warning'}
            size='small'
          />
        }
      />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Item title={t('mot-motion')} value={t(props.motion.i18n)} />
          </Grid>
          <Grid item xs={6}>
            {Array.isArray(props.position) ? (
              <Grid item xs={6}>
                <Item
                  title={t('mot-position')}
                  value={
                    <span>
                      {props.position[0].position}&nbsp;&rarr;&nbsp;
                      {props.position[0].destination}
                    </span>
                  }
                />
              </Grid>
            ) : (
              <Grid item xs={6}>
                <Item
                  title={t('mot-position')}
                  value={t(props.position.i18n)}
                />
              </Grid>
            )}
          </Grid>
          <Grid item xs={12}>
            <Stack direction='row' spacing={1}>
              {props.inputs &&
                props.inputs.map((item, key) => (
                  <Tooltip
                    key={key}
                    title={<div>{item.addr + ' ' + t('io:' + item.label)}</div>}
                  >
                    <Chip
                      label={item.label}
                      color={item.status ? 'primary' : 'default'}
                      size='small'
                    />
                  </Tooltip>
                ))}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack direction='row' spacing={1}>
              {props.outputs &&
                props.outputs.map((item, key) => (
                  <Tooltip
                    key={key}
                    title={<div>{item.addr + ' ' + t('io:' + item.label)}</div>}
                  >
                    <Chip
                      label={item.label}
                      color={item.status ? 'warning' : 'default'}
                      size='small'
                    />
                  </Tooltip>
                ))}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
