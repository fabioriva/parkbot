import * as React from 'react'
// import Divider from '@mui/material/Divider'
import Fab from '@mui/material/Fab'
// import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'

import Layout from 'src/components/Layout'
import AddItemDialog from 'src/components/notifications/AddItemDialog'
// import AddListItem from 'src/components/notifications/AddListItem'
import RecipientListView from 'src/components/notifications/RecipientListView'
// import RecipientTableView from 'src/components/notifications/recipientTableView'
import fetch from 'src/lib/fetch'
// import { useData } from 'src/lib/useWebSocket'
// import { EDIT_CARD, isAllowed } from '/src/constants/auth'
import useSWR from 'swr'
// import useTranslation from 'next-translate/useTranslation'

const fetcher = url => global.fetch(url).then(r => r.json())

export default function MailingList (props) {
  // const { t } = useTranslation('cards')

  if (props.json.err)
    return (
      <Layout {...props} pageTitle={'Notifications Mailing List'}>
        <div>Fetch Error</div>
      </Layout>
    )

  const [mailingList, setMailingList] = React.useState(props.json.mailingList)

  const [open, setOpen] = React.useState(false)

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

  const handleDeleteItem = async data => {
    console.log(data)
  }

  return (
    <Layout {...props} pageTitle={'Notifications'}>
      {mailingList.count > 0 && (
        <RecipientListView
          mailingList={mailingList.mailingList}
          onDelete={handleDeleteItem}
        />
      )}
      <AddItemDialog
        open={open}
        onCancel={() => setOpen(false)}
        onConfirm={handleAddItem}
      />
      <Fab
        color='primary'
        aria-label='add'
        onClick={() => setOpen(true)}
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <AddIcon />
      </Fab>
      {/* <Typography variant='subtitle1' gutterBottom>
        Recipient List
      </Typography>
      {mailingList.count > 0 && (
        <RecipientTableView mailingList={mailingList.mailingList} />
      )}
      <Divider sx={{ my: 3 }} />
      <Typography variant='subtitle1' gutterBottom>
        Add Item
      </Typography>
      <AddListItem onConfirm={handleAddItem} /> */}
    </Layout>
  )
}
