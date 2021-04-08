import { useState, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useSnackbar } from 'notistack'
import { useData } from 'src/lib/useWebSocket'
import fetchJson from 'src/lib/fetchJson'
import message from 'src/lib/message'
import Layout from 'src/components/Layout'
// import Layout from 'src/components/LayoutResponsive'
import Error from 'src/components/Error'
import CardsList from 'src/components/cards/CardsList'
// material-ui
// import Container from '@material-ui/core/Container'
// import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'

import { isAllowed } from 'src/lib/auth-actions'

export default function Cards ({ definitions, json, user }) {
  const { t } = useTranslation('cards')
  const { enqueueSnackbar } = useSnackbar()

  const { apsName, backendUrl, websockUrl, userRole } = definitions

  if (json.err) {
    return (
      <Error
        definitions={definitions}
        message='Error 500'
        title={t('title')}
        user={user}
      />
    )
  }

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
      <Typography variant='subtitle2' gutterBottom>
        {t('cards-total-count', { count: cards.length })}
      </Typography>
      <CardsList
        cards={cards}
        handleEdit={handleEdit}
        authorization={isAllowed(user, [userRole])}
      />

      {/* <Container maxWidth='xl'>
        <Typography variant='subtitle2' gutterBottom>
          {t('cards-total-count', { count: cards.length })}
        </Typography>
        <Hidden implementation='css' xsDown>
          <CardsList
            cards={cards}
            handleEdit={handleEdit}
            authorization={isAllowed(user, [userRole])}
          />
        </Hidden>
      </Container>
      <Hidden implementation='css' smUp>
        <CardsList
          cards={cards}
          handleEdit={handleEdit}
          authorization={isAllowed(user, [userRole])}
        />
      </Hidden> */}
    </Layout>
  )
}
