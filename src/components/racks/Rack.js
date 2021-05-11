// import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useData } from 'src/lib/useWebSocket'
// import useData from 'src/lib/useData'
import Layout from 'src/components/Layout'
import Error from 'src/components/Error'
import ListView from 'src/components/racks/IOList'
import useTranslation from 'next-translate/useTranslation'
// material ui
import Button from '@material-ui/core/Button'
// import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'

import PlcRack from 'src/components/racks/PlcRack'

export default function Rack (props) {
  const { t } = useTranslation('common')
  const { definitions, json, user } = props

  if (json.err) {
    return <Error {...props} message='Error 500' />
  }

  const router = useRouter()
  const { id } = router.query

  const [rack, setRack] = useState(json)

  // const { data } = useData(`${definitions.websockUrl}?channel=racks`, {
  const { data } = useData(definitions.websockUrl.concat('/racks'), {
    initialData: null,
    page: 'racks'
  })
  useEffect(() => {
    if (data) setRack(data[id])
  }, [data])

  // const { data } = useData(`${backendUrl}/racks/${id}`, {
  //   initialData: rack,
  //   refreshInterval: 100
  // })

  // useEffect(() => setRack(data), [data])

  return (
    <Layout {...props}>
      {/* <Container maxWidth='xl'> */}
      <Hidden implementation='css' xsDown>
        <Button onClick={() => window.history.back()}>Back</Button>
        {/* <DynamicComponent rack={rack} /> */}
        <PlcRack rack={rack} />
      </Hidden>
      {/* </Container> */}
      <Hidden implementation='css' smUp>
        <ListView rack={rack} />
      </Hidden>
    </Layout>
  )
}
