import React from 'react'
import { useRouter } from 'next/router'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import Error from 'src/components/Error'
import Layout from 'src/components/Layout'
import useTranslation from 'next-translate/useTranslation'

export default function Racks(props) {
  const router = useRouter()
  const { t } = useTranslation('dss')

  if (props.json.err) return <Error {...props} pageTitle={t('dss')} />

  const [screens] = React.useState(props.json)

  return (
    <Layout {...props} pageTitle={t('dss')}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {screens.map((screen, key) => (
          <ListItemButton
            key={key}
            onClick={() => router.push(`/${props.aps}/screen/${key}`, `/${props.aps}/screen/${key}`)}
          >
            <ListItemAvatar>
              <Avatar>
                <ConnectedTvIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={screen.name} secondary={"Screen " + (key + 1)} />
          </ListItemButton>
        ))}
      </List>
    </Layout>
  )
}
