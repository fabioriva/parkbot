import Link from 'next/link'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { green, orange, red } from '@material-ui/core/colors'
import Active from 'src/components/Active'
import Lamp from 'src/components/overview/Lamp'
import Mode from 'src/components/overview/Mode'
import Silomat from 'src/components/overview/Silomat'
import useTranslation from 'next-translate/useTranslation'
import { ACTIONS, DIAGNOSTIC, isAllowed } from 'src/constants/auth'

const bg = (op, theme) => {
  switch (op) {
    case 1:
      return theme.palette.ce
    case 2:
      return theme.palette.cu
    case 3:
      return theme.palette.pp
    // default:
    //   return '#fff'
  }
}

const Item = ({ title, value }) => (
  <>
    <Typography variant='body2' color='textSecondary' component='h1'>
      {title}
    </Typography>
    <Typography
      variant='subtitle2'
      component='h2'
      gutterBottom
      sx={{ color: 'info.dark', fontSize: 18, fontWeight: 'bold' }}
    >
      {value}
    </Typography>
  </>
)

export default function Device (props) {
  const { t } = useTranslation('overview')

  const {
    id,
    name,
    card,
    mode,
    motor,
    operation,
    size,
    stall,
    step
  } = props.item.a
  const LS = (
    <Lamp
      key={0}
      color={props.item.c[0].status ? green[500] : green[100]}
      title={props.item.c[0].status ? t('device-on') : t('device-off')}
    />
  )
  const LC = (
    <Lamp
      key={1}
      color={props.item.c[1].status ? orange[500] : orange[100]}
      title={
        props.item.c[1].status ? t('device-ready-on') : t('device-ready-off')
      }
    />
  )
  const LA = (
    <Lamp
      key={2}
      color={props.item.c[2].status ? red[500] : red[100]}
      title={
        props.item.c[2].status ? t('device-alarm-on') : t('device-alarm-off')
      }
    />
  )
  const mainView = (
    <Grid container>
      <Grid item xs={6}>
        <Item
          title={t('device-mode')}
          value={mode.label ? t(`common:${mode.label}`) : '---'}
        />
      </Grid>
      <Grid item xs={6}>
        <Item title={t('device-card')} value={card} />
      </Grid>
      <Grid item xs={6}>
        <Item title={t('device-size')} value={size} />
      </Grid>
      <Grid item xs={6}>
        <Item title={t('device-dest')} value={stall} />
      </Grid>
      {props.item.b.map((item, key) => (
        <Grid item key={key} xs={6}>
          <Item
            title={item.name}
            value={
              <span>
                {item.position}&nbsp;&rarr;&nbsp;{item.destination}
              </span>
            }
          />
        </Grid>
      ))}
    </Grid>
  )
  return (
    // <Card sx={{ maxWidth: 345 }}>
    <Card>
      <CardHeader
        sx={{
          // bgcolor: '#ccc',
          py: 1,
          '& .MuiCardHeader-title': {
            fontSize: 16
          }
        }}
        action={[LA, LC, LS]}
        avatar={<Mode mode={mode} step={step} />}
        title={name}
        // subheader={`Device ${id}`}
      />
      <CardContent sx={{ bgcolor: theme => bg(operation, theme) }}>
        {motor === 0 ? mainView : <Silomat data={props.item.e} />}
      </CardContent>
      <CardActions disableSpacing>
        <Link
          href={`/${props.aps}/device/${id - 1}`}
          locale={props.user.locale}
        >
          <Button
            color='primary'
            disabled={!isAllowed(props.user, [DIAGNOSTIC])}
          >
            More
          </Button>
        </Link>
        {props.item.alarms && (
          <Box sx={{ marginLeft: 'auto' }}>
            <Active active={props.item.alarms.length} aps={props.aps} />
          </Box>
        )}
      </CardActions>
    </Card>
  )
}
