import React from 'react'
import { useRouter } from 'next/router'
// import Alert from '@mui/material/Alert'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
// import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Typography from '@mui/material/Typography'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
// import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import useTranslation from 'next-translate/useTranslation'

export default function DeviceActive ({ alarms }) {
  const { t } = useTranslation('alarms')
  const router = useRouter()
  const { aps, id } = router.query

  return (
    <Paper sx={{ bgcolor: 'rgb(253, 237, 237)', color: 'rgb(95, 33, 32)' }}>
      {alarms.length > 0 && (
        <List
          dense
          subheader={
            <ListSubheader
              sx={{ bgcolor: 'rgb(253, 237, 237)' }}
              component='div'
              id='active-subheader'
            >
              <strong>
                {t('al-active')}&nbsp;{alarms.length}
              </strong>
            </ListSubheader>
          }
        >
          {alarms.map((item, key, arr) => (
            <React.Fragment key={key}>
              <ListItem
                alignItems='flex-start'
                secondaryAction={
                  <IconButton
                    edge='end'
                    aria-label='info'
                    href={`/${aps}/docs/${item.i18n.key}?key=${item.i18n.query.thermic}`}
                    disabled
                  >
                    <HelpOutlineOutlinedIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: 'error.main', fontSize: 14 }}>
                    {item.label}
                    {/* <PriorityHighRoundedIcon fontSize='small' /> */}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.date}
                  // secondary={t('al-id', { id: item.id })}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component='span'
                        variant='body2'
                        color='text.primary'
                      >
                        {/* <strong>{t('al-id', { id: item.id })}</strong>&nbsp; */}
                        <strong>{item.label}</strong>&nbsp;
                        {t(item.i18n.key, item.i18n.query, {
                          fallback: 'fallback1'
                        })}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              {arr.length - 1 !== key && (
                <Divider variant='inset' component='li' />
              )}
            </React.Fragment>
          ))}
        </List>
      )}
    </Paper>
  )
}
