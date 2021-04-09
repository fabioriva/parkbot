// import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useData } from 'src/lib/useWebSocket'
import Layout from 'src/components/Layout'
import Error from 'src/components/Error'
import ListView from 'src/components/racks/IOList'
import useTranslation from 'next-translate/useTranslation'
// material ui
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'

import PlcRack from 'src/components/racks/PlcRack'

export default function Rack ({ definitions, json, user }) {
  const { t } = useTranslation('common')

  const { apsName, websockUrl } = definitions

  if (json.err) {
    return (
      <Error
        definitions={definitions}
        message='Error 500'
        title={t('title-racks')}
        user={user}
      />
    )
  }

  const router = useRouter()
  const { id } = router.query

  const [rack, setRack] = useState(json)
  // const { mesg } = useData('racks', `${websockUrl}?channel=ch1`)

  // useEffect(() => {
  //   if (mesg) {
  //     setData(mesg[id])
  //   }
  // })
  const { data } = useData(`${websockUrl}?channel=ch1`, {
    initialData: null,
    page: 'racks'
  })
  useEffect(() => {
    if (data) setRack(data[id])
  }, [data])

  return (
    <Layout
      apsName={apsName}
      pageTitle={
        <span>
          {t('title-racks')} {rack.title}
        </span>
      }
      socket={`${websockUrl}?channel=ch2`}
      user={user}
    >
      <Container maxWidth='xl'>
        <Hidden implementation='css' xsDown>
          <Button onClick={() => window.history.back()}>Back</Button>
          {/* <DynamicComponent rack={rack} /> */}
          <PlcRack rack={rack} />
        </Hidden>
      </Container>
      <Hidden implementation='css' smUp>
        <ListView rack={rack} />
      </Hidden>
    </Layout>
  )
}
