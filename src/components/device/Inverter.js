import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useTranslation from 'next-translate/useTranslation'

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

export default function Inverter (props) {
  const { t } = useTranslation('overview')

  const IDLE = '---'
  // console.log(props)
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
        // action={[
        //   <Lamp
        //     key={0}
        //     color={props.enable.status ? green[500] : green[100]}
        //     title={props.enable.status ? t('vfd-enabled') : t('vfd-disabled')}
        //   />
        // ]}
        action={
          <Chip
            label={props.enable.status ? t('vfd-enabled') : t('vfd-disabled')}
            color={props.enable.status ? 'success' : 'warning'}
            size='small'
          />
        }
        title={t('vfd-title', { id: props.name })}
      />
      <CardContent>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Item
              title={t('vfd-speed')}
              value={props.speed !== 0 ? props.speed + ' Hz' : IDLE}
            />
          </Grid>
          <Grid item xs={6}>
            <Item
              title={t('vfd-current')}
              value={props.current !== 0 ? props.current + ' A' : IDLE}
            />
          </Grid>
          <Grid item xs={6}>
            <Item
              title={t('vfd-load')}
              value={props.load !== 0 ? props.load + ' %' : IDLE}
            />
          </Grid>
          <Grid item xs={6}>
            <Item title={t('vfd-trip')} value={props.trip} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
