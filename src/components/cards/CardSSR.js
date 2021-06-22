import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useData } from 'src/lib/useWebSocket'
import fetch from 'src/lib/fetchJson'
import message from 'src/lib/message'
import Layout from 'src/components/LayoutSSR'
import Error from 'src/components/ErrorSSR'
import CardsList from 'src/components/cards/CardsList'
// material-ui
import Typography from '@material-ui/core/Typography'

// import { isAllowed } from 'src/lib/auth-actions'

export default function Cards (props) {
  const { t } = useTranslation('cards')

  if (props.json.err) {
    return <Error {...props} message='Error 500' pageTitle={t('title')} />
  }

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
      withCredentials: true,
      credentials: 'include',
      headers: {
        Authorization: 'Bearer ' + props.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ card, code })
    })
    // const json = await fetchJson(backendUrl.concat('/card/edit'), {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ card, code })
    // })
    const snack = message(json)
    props.enqueueSnackbar(snack.message, snack.options)
  }

  return (
    <Layout {...props} pageTitle={t('title')}>
      <h2>
        Execution time: {props.executionTime[0]}
        {'s '}
        {props.executionTime[1] / 1000000}ms
      </h2>
      <Typography variant='subtitle2' gutterBottom>
        {t('cards-total-count', { count: cards.length })}
      </Typography>
      <CardsList
        cards={cards}
        handleEdit={handleEdit}
        authorization={true} // {isAllowed(user, [definitions.userRole])}
      />
    </Layout>
  )
}
