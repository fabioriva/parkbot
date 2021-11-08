import React from 'react'
// import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import { useData } from 'src/lib/useWebSocket'
import Error from 'src/components/Error'
import Layout from 'src/components/Layout'
// import ListView from 'src/components/racks/RackListView'
import RackView from 'src/components/racks/RackView'
import useTranslation from 'next-translate/useTranslation'

export default function Rack (props) {
  const { t } = useTranslation('racks')

  if (props.json.err)
    return (
      <Error {...props} pageTitle={t('rack-title', { name: rack.title })} />
    )

  const router = useRouter()
  const { id } = router.query

  const [rack, setRack] = React.useState(props.json)

  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/racks/${id}`
  const { data, loading } = useData(url, {
    initialData: rack,
    page: 'racks'
  })
  React.useEffect(() => setRack(data), [data])

  return (
    <Layout {...props} pageTitle={t('rack-title', { name: rack.title })}>
      {/* <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <ListView rack={rack} loading={loading} />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <RackView rack={rack} />
      </Box> */}
      <RackView rack={rack} />
    </Layout>
  )
}
