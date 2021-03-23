import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Layout from 'src/components/Layout'
import ListView from 'src/components/racks/IOList'
import { useData } from 'src/lib/websocket'
import useTranslation from 'next-translate/useTranslation'
// material ui
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'

const componentList = {
  et200m: dynamic(() => import('src/components/racks/ET200M')),
  et200s: dynamic(() => import('src/components/racks/ET200S'))
}

export default function Rack ({ definitions, json, user }) {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { aps, rack } = router.query
  const { apsName, websockUrl } = definitions
  const [racks, setRacks] = useState(json)
  const { mesg } = useData('racks', `${websockUrl}?channel=ch1`)

  useEffect(() => {
    if (mesg) {
      setRacks(mesg)
    }
  })

  const DynamicComponent = componentList[racks[rack].serie]

  const title = t('title-racks') + ' ' + racks[rack].title

  return (
    <Layout
      apsName={apsName}
      pageTitle={title}
      socket={`${websockUrl}?channel=ch2`}
      user={user}
    >
      <Button onClick={() => window.history.back()}>Back</Button>
      <Hidden implementation='css' xsDown>
        <DynamicComponent rack={racks[rack]} />
      </Hidden>
      <Hidden implementation='css' smUp>
        <ListView rack={racks[rack]} />
      </Hidden>
    </Layout>
  )
}
