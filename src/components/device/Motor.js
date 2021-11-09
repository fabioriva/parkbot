import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { green, orange, red } from '@mui/material/colors'
import BoltIcon from '@mui/icons-material/Bolt'
import useTranslation from 'next-translate/useTranslation'
import Bit from 'src/components/Bit'
import Lamp from 'src/components/overview/Lamp'
import Tooltip from 'src/components/Tooltip'

import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
// import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import CircleIcon from '@mui/icons-material/Circle'

const Item = ({ loading, title, value }) => (
  <>
    <Typography
      variant='body2'
      color='textSecondary'
      // component='h1'
      // gutterBottom
    >
      {title}
    </Typography>
    <Typography
      variant='subtitle2'
      // component='h2'
      // gutterBottom
      sx={{ color: 'info.dark', fontSize: 18, fontWeight: 'bold' }}
    >
      {/* {value} */}
      {loading ? (
        <Skeleton variant='text' animation='wave' width='90%' />
      ) : (
        value
      )}
    </Typography>
  </>
)

export default function Motor ({
  // id,
  name,
  motion,
  position,
  inputs,
  outputs,
  ready,
  inverter,
  enable,
  error,
  loading,
  subheader
}) {
  const { t } = useTranslation('overview')

  const EN = (
    <Lamp
      key={0}
      color={enable ? green[500] : green[100]}
      title={enable ? t('mot-enabled') : t('mot-disabled')}
    />
  )

  const LA = (
    <Lamp
      key={1}
      color={error ? red[500] : red[100]}
      title={error ? t('device-alarm-on') : t('device-alarm-off')}
    />
  )

  const LC = ready !== undefined && (
    <Lamp
      key={2}
      color={ready.every(e => e.status) ? orange[500] : orange[100]}
      // title={LCStatus ? t('device-ready-on') : t('device-ready-off')}
      title={
        <List
          subheader={
            <Typography variant='subtitle1' gutterBottom component='div'>
              {ready.every(e => e.status)
                ? t('device-ready-on')
                : t('device-ready-off')}
            </Typography>
          }
          dense
        >
          {ready.map((item, key) => (
            <ListItem
              disableGutters
              key={key}
              secondaryAction={
                <IconButton aria-label='info' sx={{ px: 0, py: 1 }} disabled>
                  <CircleIcon
                    sx={{ color: item.status ? green[500] : green[100] }}
                  />
                </IconButton>
              }
            >
              {/* <ListItemIcon sx={{ minWidth: 32 }}>
                <CircleIcon
                  sx={{
                    color: item.status ? green[500] : green[100],
                    fontSize: 20
                  }}
                />
              </ListItemIcon> */}
              {/* <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor: item.status && green[500],
                    fontSize: 16,
                    width: 20,
                    height: 20
                  }}
                  variant='square'
                >
                  {item.status}
                </Avatar>
              </ListItemAvatar> */}
              <ListItemText
                primary={item.addr + ' ' + item.label}
                primaryTypographyProps={{
                  // color: 'primary',
                  // fontWeight: 'medium',
                  variant: 'body2'
                }}
              />
            </ListItem>
          ))}
        </List>
      }
    />
  )

  const isDriveControlled = inverter !== undefined

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
        action={[LC, LA, EN]}
        avatar={
          <Avatar sx={{ bgcolor: motion.id !== 0 && 'warning.main' }}>
            <BoltIcon />
          </Avatar>
        }
        title={t(name.key, name.query)}
        subheader={subheader}
      />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Item
              title={t('mot-motion')}
              value={
                !isDriveControlled
                  ? t(motion.i18n)
                  : inverter.speed === 0
                  ? t(motion.i18n)
                  : t(motion.i18n) + ' (' + inverter.speed + ')'
              }
              loading={loading}
            />
          </Grid>
          {isDriveControlled ? (
            <Grid item xs={6}>
              <Item
                title={t('mot-position')}
                value={
                  <span>
                    {position[0].position}&nbsp;&rarr;&nbsp;
                    {position[0].destination}
                  </span>
                }
                loading={loading}
              />
            </Grid>
          ) : (
            <Grid item xs={6}>
              <Item
                title={t('mot-position')}
                value={t(position.i18n)}
                loading={loading}
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <Typography variant='body2' color='textSecondary' gutterBottom>
              Inputs
            </Typography>
            <Stack direction='row' spacing={0.5}>
              {inputs &&
                inputs.map((item, key) => (
                  <Tooltip
                    key={key}
                    title={<Bit {...item} />}
                    // title={<div>{item.addr + ' ' + t('io:' + item.label)}</div>}
                  >
                    <Chip
                      label={item.label}
                      color={item.status ? 'primary' : 'default'}
                      size='small'
                      // sx={{ fontSize: 11, fontWeight: 'medium' }}
                    />
                  </Tooltip>
                ))}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body2' color='textSecondary' gutterBottom>
              Outputs
            </Typography>
            <Stack direction='row' spacing={0.5}>
              {outputs &&
                outputs.map((item, key) => (
                  <Tooltip
                    key={key}
                    title={<Bit {...item} />}
                    // title={<div>{item.addr + ' ' + t('io:' + item.label)}</div>}
                  >
                    <Chip
                      label={item.label}
                      color={item.status ? 'warning' : 'default'}
                      size='small'
                      // sx={{ fontSize: 11, fontWeight: 'medium' }}
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
