import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { useData } from 'src/lib/useWebSocket'
import Layout from 'src/components/Layout'
import RackView from 'src/components/racks/RackView'

export default function Rack (props) {
  const { t } = useTranslation('racks')

  const router = useRouter()
  const { id } = router.query

  const [rack, setRack] = React.useState(props.json)

  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/racks/${id}`
  const { data } = useData(url, {
    initialData: rack,
    page: 'racks'
  })
  React.useEffect(() => setRack(data), [data])

  return (
    <Layout {...props} pageTitle={t('rack-title', { name: rack.title })}>
      <RackView rack={rack} />
    </Layout>
  )
}
