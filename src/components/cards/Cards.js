import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Paper from '@mui/material/Paper'
import Error from 'src/components/Error'
import Layout from 'src/components/Layout'
import Message from 'src/components/Message'
import CardsList from 'src/components/cards/CardsList'
import fetch from 'src/lib/fetch'
import { useData } from 'src/lib/useWebSocket'
import { EDIT_CARD, isAllowed } from '/src/constants/auth'

export default function Cards (props) {
  const { t } = useTranslation('cards')

  if (props.json.err) return <Error {...props} pageTitle={t('page-title')} />

  const [cards, setCards] = React.useState(props.json)

  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/cards`
  const { data, loading } = useData(url, {
    initialData: cards,
    page: 'cards'
  })
  React.useEffect(() => setCards(data), [data])

  const handleEdit = async ({ card, code }) => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/card/edit`
    const json = await fetch(url, {
      method: 'POST',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        Authorization: 'Bearer ' + props.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ card, code })
    })
    // console.log(card, code, json)
    // const snack = message(json)
    // props.enqueueSnackbar(snack.message, snack.options)
    setOpenMessage(true)
    setResponse(json)
  }

  // Message
  const [openMessage, setOpenMessage] = React.useState(false)
  const [response, setResponse] = React.useState(null)
  const handleCloseMessage = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenMessage(false)
  }

  return (
    <Layout {...props} pageTitle={t('page-title')}>
      <Paper sx={{ maxWidth: { md: '25%', xs: '100%' } }}>
        <CardsList
          cards={cards}
          handleEdit={handleEdit}
          authorization={isAllowed(props.user, [EDIT_CARD])}
          // loading={loading}
        />
      </Paper>
      <Message
        open={openMessage}
        response={response}
        handleClose={handleCloseMessage}
      />
    </Layout>
  )
}
