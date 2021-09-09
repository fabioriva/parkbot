import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Paper from '@mui/material/Paper'
import Layout from 'src/components/Layout'
import CardsList from 'src/components/cards/CardsList'
import fetch from 'src/lib/fetch'
import { useData } from 'src/lib/useWebSocket'

export default function Cards (props) {
  const { t } = useTranslation('cards')

  const [cards, setCards] = React.useState(props.json)

  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/cards`
  const { data } = useData(url, {
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
    console.log(card, code, json)
    // const snack = message(json)
    // props.enqueueSnackbar(snack.message, snack.options)
  }

  return (
    <Layout {...props} pageTitle={t('header-title')}>
      <Paper sx={{ maxWidth: { md: '25%', xs: '100%' } }}>
        <CardsList
          cards={cards}
          handleEdit={handleEdit}
          authorization={true} // {isAllowed(user, [definitions.userRole])}
        />
      </Paper>
    </Layout>
  )
}
