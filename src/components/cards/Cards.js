import { useState, useEffect } from 'react'
// import useJson from 'src/lib/useData'
import { useData } from 'src/lib/websocket'
import Layout from 'src/components/Layout'
import useTranslation from 'next-translate/useTranslation'
import CardsList from 'src/components/cards/CardsList'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default function Cards ({ definitions, json, user }) {
  const { t } = useTranslation('cards')

  const { apsName, backendUrl, websockUrl, userRole } = definitions

  // const { data } = useJson(backendUrl.concat('/cards'), json)

  const [cards, setCards] = useState(json)

  const { mesg, send } = useData('cards', `${websockUrl}?channel=ch1`)

  useEffect(() => {
    if (mesg) {
      setCards(mesg)
    }
  }, [mesg])

  return (
    <Layout
      apsName={apsName}
      pageTitle={t('title')}
      socket={`${websockUrl}?channel=ch2`}
      user={user}
    >
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        <Grid item xs={12} lg={6}>
          <Typography variant='subtitle2' gutterBottom>
            {t('cards-total-count', { count: cards.length })}
          </Typography>
          <CardsList cards={cards} />
        </Grid>
      </Grid>
    </Layout>
  )
}
