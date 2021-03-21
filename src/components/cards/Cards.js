import { useState, useEffect } from 'react'
// import useJson from 'src/lib/useData'
import { useData } from 'src/lib/websocket'
import { useSnackbar } from 'notistack'
import fetchJson from 'src/lib/fetchJson'
import message from 'src/lib/message'
import Layout from 'src/components/Layout_'
import useTranslation from 'next-translate/useTranslation'
import CardsList from 'src/components/cards/CardsList'
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'

export default function Cards ({ definitions, json, user }) {
  const { t } = useTranslation('cards')
  const { enqueueSnackbar } = useSnackbar()

  const { apsName, backendUrl, websockUrl, userRole } = definitions

  // const { data } = useJson(backendUrl.concat('/cards'), json)

  const [cards, setCards] = useState(json)

  const { mesg } = useData('cards', `${websockUrl}?channel=ch1`)

  useEffect(() => {
    if (mesg) {
      setCards(mesg)
    }
  }, [mesg])

  const handleEdit = async ({ nr, code }) => {
    console.log(nr, code)
    const json = await fetchJson(`${backendUrl}/card/edit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ card: nr, code })
    })
    const snack = message(json)
    enqueueSnackbar(snack.message, snack.options)
  }

  return (
    <Layout
      apsName={apsName}
      pageTitle={t('title')}
      socket={`${websockUrl}?channel=ch2`}
      user={user}
    >
      <Container maxWidth='xl'>
        <Typography variant='subtitle2' gutterBottom>
          {t('cards-total-count', { count: cards.length })}
        </Typography>
        <Hidden implementation='css' xsDown>
          <CardsList cards={cards} handleEdit={handleEdit} />
        </Hidden>
      </Container>
      <Hidden implementation='css' smUp>
        <CardsList cards={cards} handleEdit={handleEdit} />
      </Hidden>
    </Layout>
  )
}
