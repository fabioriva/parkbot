import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Paper from '@mui/material/Paper'
import Error from 'src/components/Error'
import Layout from 'src/components/Layout'
import RacksList from 'src/components/racks/RacksList'

export default function Racks (props) {
  const { t } = useTranslation('racks')

  if (props.json.err) return <Error {...props} pageTitle={t('page-title')} />

  const [racks] = React.useState(props.json)

  return (
    <Layout {...props} pageTitle={t('page-title')}>
      <Paper sx={{ maxWidth: { md: '25%', xs: '100%' } }}>
        <RacksList aps={props.aps} locale={props.locale} racks={racks} />
      </Paper>
    </Layout>
  )
}
