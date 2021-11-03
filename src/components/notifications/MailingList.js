import * as React from 'react'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Layout from 'src/components/Layout'
import AddListItem from 'src/components/notifications/AddListItem'
import fetch from 'src/lib/fetch'
// import { useData } from 'src/lib/useWebSocket'
// import { EDIT_CARD, isAllowed } from '/src/constants/auth'
import useSWR from 'swr'
import useTranslation from 'next-translate/useTranslation'

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
    // const snack = message(json)
    // props.enqueueSnackbar(snack.message, snack.options)
  }

  const handleSelectClick = event => {
    if (event.target.checked) {
      console.log('selected', event.target.checked)
      return
    }
    console.log('!!!!')
  }

  return (
    <Layout {...props} pageTitle={'Notifications Mailing List'}>
      <Typography variant='subtitle1' gutterBottom>
        Recipient List
      </Typography>
      {mailingList.count > 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='mailing list'>
            <TableHead>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell>E-mail address</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Enabled</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mailingList.mailingList.map(row => (
                <TableRow
                  key={row._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='left'>{row.email}</TableCell>
                  <TableCell align='left'>{row.phone}</TableCell>
                  <TableCell padding='checkbox'>
                    <Checkbox
                      disabled
                      color='primary'
                      // indeterminate={numSelected > 0 && numSelected < rowCount}
                      checked={row.status}
                      onChange={handleSelectClick}
                      inputProps={{
                        'aria-label': 'select all desserts'
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Divider sx={{ my: 3 }} />
      <Typography variant='subtitle1' gutterBottom>
        Add Item
      </Typography>
      <AddListItem onConfirm={handleAddItem} />
    </Layout>
  )
}
