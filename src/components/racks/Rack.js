import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Layout from 'src/components/Layout'
// import ET200M from 'src/components/racks/ET200M'
// import ET200S from 'src/components/racks/ET200S'
import { useData } from 'src/lib/websocket'
import useTranslation from 'next-translate/useTranslation'

const componentList = {
  et200m: dynamic(() => import('src/components/racks/ET200M')),
  et200s: dynamic(() => import('src/components/racks/ET200S'))
}

export default function Rack ({ definitions, json, user }) {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { aps, rack } = router.query
  const { apsName, websockUrl, userRole } = definitions
  const [racks, setRacks] = useState(json)
  const { mesg } = useData('racks', `${websockUrl}?channel=ch1`)

  useEffect(() => {
    if (mesg) {
      setRacks(mesg)
    }
  })

  const DynamicComponent = componentList[racks[rack].serie]

  return (
    <Layout
      apsName={apsName}
      pageTitle={t('title-racks')}
      socket={`${websockUrl}?channel=ch2`}
      user={user}
    >
      <div>
        [{aps}] Rack {rack}
      </div>
      {/* {racks[rack].serie === 'et200m' && <ET200M rack={racks[rack]} />}
      {racks[rack].serie === 'et200s' && <ET200S rack={racks[rack]} />} */}
      <DynamicComponent rack={racks[rack]} />
    </Layout>
  )
}
