import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
// import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import { green } from '@mui/material/colors'
import BoltIcon from '@mui/icons-material/Bolt'
import useTranslation from 'next-translate/useTranslation'
import Lamp from 'src/components/overview/Lamp'
// import Tooltip from 'src/components/Tooltip'

const Item = ({ loading, title, value }) => (
  <>
    <Typography variant='body2' color='textSecondary' component='h1'>
      {title}
    </Typography>
    <Typography
      variant='subtitle2'
      component='h2'
      // gutterBottom
      sx={{ color: 'info.dark', fontSize: 18, fontWeight: 'bold' }}
    >
      {loading ? (
        <Skeleton variant='text' animation='wave' width='90%' />
      ) : (
        value
      )}
    </Typography>
  </>
)

export default function Inverter (props) {
  const { t } = useTranslation('overview')

  const EN = (
    <Lamp
      key={0}
      color={props.enable ? green[500] : green[100]}
      title={props.enable ? t('mot-enabled') : t('mot-disabled')}
    />
  )
  const IDLE = '---'

  return (
    <Card>
      <CardHeader
        sx={{
          py: 0.5,
          '& .MuiCardHeader-title': {
            fontSize: 22,
            fontWeight: 'bold'
          }
        }}
        // action={
        //   <Chip
        //     label={props.enable.status ? t('vfd-enabled') : t('vfd-disabled')}
        //     color={props.enable.status ? 'success' : 'warning'}
        //     // size='small'
        //   />
        // }
        // avatar={props.speed !== 0 ? '⚡' : '🛑'}
        action={EN}
        avatar={
          <Avatar sx={{ bgcolor: props.speed !== 0 && 'warning.main' }}>
            <BoltIcon />
          </Avatar>
        }
        title={props.name}
        subheader={t('vfd-title', { id: props.id })}
      />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Item
              title={t('vfd-speed')}
              value={props.speed !== 0 ? props.speed + ' Hz' : IDLE}
              loading={props.loading}
            />
          </Grid>
          <Grid item xs={6}>
            <Item
              title={t('vfd-current')}
              value={props.current !== 0 ? props.current + ' A' : IDLE}
              loading={props.loading}
            />
          </Grid>
          <Grid item xs={6}>
            <Item
              title={t('vfd-load')}
              value={props.load !== 0 ? props.load + ' %' : IDLE}
              loading={props.loading}
            />
          </Grid>
          <Grid item xs={6}>
            <Item
              title={t('vfd-trip')}
              value={props.trip}
              loading={props.loading}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
