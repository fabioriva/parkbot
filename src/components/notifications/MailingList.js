import * as React from 'react'
import Alert from '@mui/material/Alert'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import ConfirmDialog from 'src/components/ConfirmDialog'
import Error from 'src/components/Error'
import Layout from 'src/components/Layout'
import AddItemDialog from 'src/components/notifications/AddItemDialog'
// import RemoveItemDialog from 'src/components/notifications/RemoveItemDialog'
import RecipientListView from 'src/components/notifications/RecipientListView'
import fetch from 'src/lib/fetch'
// import { useData } from 'src/lib/useWebSocket'
// import { EDIT_CARD, isAllowed } from '/src/constants/auth'
import useSWR, { useSWRConfig } from 'swr'
import useTranslation from 'next-translate/useTranslation'

const fetcher = url => global.fetch(url).then(r => r.json())

export default function MailingList (props) {
  const { t } = useTranslation('notifications')

  if (props.json.err) return <Error {...props} pageTitle={t('page-title')} />

  // const [mailingList, setMailingList] = React.useState(props.json.mailingList)
  const [mailingList, setMailingList] = React.useState([])
  const [open, setOpen] = React.useState(false)
  const [remove, setRemove] = React.useState(false)
  const [removeId, setRemoveId] = React.useState(null)

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/mailingList`
  const { mutate } = useSWRConfig()
  const { data } = useSWR(url, fetcher, {
    // fallbackData: mailingList
    // refreshInterval: 1000
  })

  React.useEffect(() => {
    if (data) setMailingList(data.mailingList)
  }, [data])

  const handleAddItem = async item => {
    // console.log('handleAddItem', item)
    // console.log('(B)', mailingList, Array.isArray(mailingList))
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/mailingList/add`
    mutate(
      url,
      setMailingList(mailingList => [...mailingList, item]),
      false
    )
    const json = await fetch(url, {
      method: 'POST',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        Authorization: 'Bearer ' + props.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    console.log(json)
    mutate(url)
    setOpen(false)
  }

  const handleRemoveItem = async data => {
    // console.log('handleRemoveItem', data)
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/mailingList/remove`
    mutate(
      url,
      setMailingList(mailingList =>
        mailingList.filter(item => item._id != data._id)
      ),
      false
    )
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
    setRemove(true)
    setRemoveId(data)
  }

  return (
    <Layout {...props} pageTitle={t('page-title')}>
      {/* {mailingList.count > 0 ? ( */}
      {mailingList.length > 0 ? (
        <RecipientListView
          // mailingList={mailingList.mailingList}
          mailingList={mailingList}
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
      <ConfirmDialog
        dialogContent={t('dialog-remove-content')}
        dialogTitle={t('dialog-remove-title')}
        open={remove}
        value={removeId}
        onCancel={() => setRemove(false)}
        onConfirm={handleRemoveItem}
      />
      <Fab
        // disabled={mailingList.count >= 3}
        disabled={mailingList.length >= 3}
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
