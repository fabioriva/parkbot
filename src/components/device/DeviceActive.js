import React from 'react'
import { useRouter } from 'next/router'
// import Alert from '@material-ui/core/Alert'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
// import ListItemButton from '@material-ui/core/ListItemButton'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Typography from '@material-ui/core/Typography'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined'
import useTranslation from 'next-translate/useTranslation'

export default function DeviceActive ({ alarms }) {
  const { t } = useTranslation('alarms')
  const router = useRouter()
  const { aps, id } = router.query

  return (
    <Paper
      sx={{ bgcolor: 'rgb(253, 237, 237)', color: 'rgb(95, 33, 32)', mb: 3 }}
    >
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
                    onClick={() =>
                      router.push(
                        `/${aps}/docs/${item.i18n.key}?key=${item.i18n.query.thermic}`
                      )
                    }
                    disabled
                  >
                    <HelpOutlineOutlinedIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: 'error.main', fontSize: 16 }}>
                    {item.label}
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
                        {t(item.i18n.key, item.i18n.query)}
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
