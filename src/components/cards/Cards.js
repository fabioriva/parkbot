import { useState, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useData } from 'src/lib/useWebSocket'
import fetchJson from 'src/lib/fetchJson'
import message from 'src/lib/message'
import Layout from 'src/components/Layout'
import Error from 'src/components/Error'
import CardsList from 'src/components/cards/CardsList'
// material-ui
import Typography from '@material-ui/core/Typography'

import { isAllowed } from 'src/lib/auth-actions'

export default function Cards (props) {
  const { t } = useTranslation('cards')
  const { definitions, json, user } = props
  const { backendUrl, websockUrl } = definitions

  if (json.err) {
    return <Error {...props} message='Error 500' />
  }

  const [cards, setCards] = useState(json)

  // const { data } = useData(`${definitions.websockUrl}?channel=cards`, {
  const { data } = useData(websockUrl.concat('/cards'), {
    initialData: cards,
    page: 'cards'
  })

  useEffect(() => setCards(data), [data])

  const handleEdit = async ({ nr, code }) => {
    const json = await fetchJson(backendUrl.concat('/card/edit'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ card: nr, code })
    })
    const snack = message(json)
    props.enqueueSnackbar(snack.message, snack.options)
  }

  return (
    <Layout {...props}>
      <Typography variant='subtitle2' gutterBottom>
        {t('cards-total-count', { count: cards.length })}
      </Typography>
      <CardsList
        cards={cards}
        handleEdit={handleEdit}
        authorization={isAllowed(user, [definitions.userRole])}
      />
    </Layout>
  )
}
