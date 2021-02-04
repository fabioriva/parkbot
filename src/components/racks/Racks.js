import { useState } from 'react'
import Layout from 'src/components/Layout'
import useTranslation from 'next-translate/useTranslation'
import RacksList from 'src/components/racks/RacksList'
import GridList from 'src/components/racks/Grid'
// import Typography from '@material-ui/core/Typography'

export default function Racks ({ definitions, json, user }) {
  const { t } = useTranslation('common')

  const { apsName, websockUrl, userRole } = definitions

  // const { data } = useJson(backendUrl.concat('/cards'), json)

  const [racks, setRacks] = useState(json)

  // console.log(racks)

  return (
    <Layout
      apsName={apsName}
      pageTitle={t('title-racks')}
      socket={`${websockUrl}?channel=ch2`}
      user={user}
    >
      {/* <RacksList racks={racks} user={user} /> */}
      <GridList racks={racks} user={user} />
    </Layout>
  )
}
