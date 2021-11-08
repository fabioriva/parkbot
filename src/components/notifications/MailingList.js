import * as React from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Error from 'src/components/Error'
import Layout from 'src/components/Layout'
import AddItemDialog from 'src/components/notifications/AddItemDialog'
import RemoveItemDialog from 'src/components/notifications/RemoveItemDialog'
import RecipientListView from 'src/components/notifications/RecipientListView'
import fetch from 'src/lib/fetch'
// import { useData } from 'src/lib/useWebSocket'
// import { EDIT_CARD, isAllowed } from '/src/constants/auth'
import useSWR from 'swr'
import useTranslation from 'next-translate/useTranslation'

const fetcher = url => global.fetch(url).then(r => r.json())

export default function MailingList (props) {
  const { t } = useTranslation('notifications')

  if (props.json.err) return <Error {...props} pageTitle={t('page-title')} />

  const [mailingList, setMailingList] = React.useState(props.json.mailingList)
  const [open, setOpen] = React.useState(false)
  const [remove, setRemove] = React.useState(false)
  const [removeId, setRemoveId] = React.useState(null)

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/mailingList`
  const { data, error } = useSWR(url, fetcher, {
    initialData: mailingList,
    refreshInterval: 1000
  })

  React.useEffect(() => {
    if (data) setMailingList(data)
  }, [data])

  // const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/mailingList`
  // const { data, loading } = useData(url, {
  //   initialData: mailingList,
  //   page: 'mailingList'
  // })
  // React.useEffect(() => setMailingList(data), [data])

  const handleAddItem = async data => {
    console.log('handleAddItem', data)
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/mailingList/add`
    const json = await fetch(url, {
      method: 'POST',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        Authorization: 'Bearer ' + props.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(json)
    setOpen(false)
  }

  const handleRemoveItem = async data => {
    console.log('handleRemoveItem', data)
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/mailingList/remove`
    const json = await fetch(url, {
      method: 'POST',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        Authorization: 'Bearer ' + props.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(json)
    setRemove(false)
  }

  const handleRemoveDialog = data => {
    console.log(data)
    setRemove(true)
    setRemoveId(data)
  }

  return (
    <Layout {...props} pageTitle={t('page-title')}>
      {mailingList.count > 0 ? (
        <RecipientListView
          mailingList={mailingList.mailingList}
          onDelete={handleRemoveDialog}
        />
      ) : (
        <Alert severity='info'>
          {t('list-empty')} — <strong>{t('list-add')}</strong>
        </Alert>
      )}
      <AddItemDialog
        open={open}
        onCancel={() => setOpen(false)}
        onConfirm={handleAddItem}
      />
      <RemoveItemDialog
        open={remove}
        value={removeId}
        onCancel={() => setRemove(false)}
        onConfirm={handleRemoveItem}
      />
      <Fab
        color='primary'
        aria-label='add'
        onClick={() => setOpen(true)}
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <AddIcon />
      </Fab>
    </Layout>
  )
}
