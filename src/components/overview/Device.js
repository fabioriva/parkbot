// import Link from 'next/link'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import { green, orange, red } from '@mui/material/colors'
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

const Item = ({ loading, title, value }) => (
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
      {loading ? (
        <Skeleton variant='text' animation='wave' width='80%' />
      ) : (
        value
      )}
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
          loading={props.loading}
        />
      </Grid>
      <Grid item xs={6}>
        <Item title={t('device-card')} value={card} loading={props.loading} />
      </Grid>
      <Grid item xs={6}>
        <Item title={t('device-size')} value={size} loading={props.loading} />
      </Grid>
      <Grid item xs={6}>
        <Item title={t('device-dest')} value={stall} loading={props.loading} />
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
            loading={props.loading}
          />
        </Grid>
      ))}
    </Grid>
  )
  return (
    // <Card sx={{ maxWidth: 345 }}>
    <Card
      variant='outlined'
      // sx={{ mx: { xs: 0.5, md: 0 } }}
    >
      <CardHeader
        sx={{
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
        {motor === 0 ? (
          mainView
        ) : (
          <Silomat data={props.item.e} loading={props.loading} />
        )}
      </CardContent>
      <CardActions disableSpacing>
        {/* <Link
          href={`/${props.aps}/device/${id - 1}`}
          locale={props.user.locale}
        > */}
        <Button
          color='primary'
          disabled={!isAllowed(props.user, [DIAGNOSTIC])}
          href={`/${props.aps}/device/${id - 1}`}
        >
          More
        </Button>
        {/* </Link> */}
        {props.item.alarms && (
          <Box sx={{ marginLeft: 'auto' }}>
            <Active
              active={props.item.alarms.length}
              href={`/${props.aps}/active/${id - 1}`}
              locale={props.user.locale}
            />
          </Box>
        )}
      </CardActions>
    </Card>
  )
}
