import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from 'src/components/Layout'
import RacksList from 'src/components/racks/RacksList'

export default function Racks (props) {
  const { t } = useTranslation('racks')

  const [racks] = React.useState(props.json)

  return (
    <Layout {...props} pageTitle={t('header-title')}>
      <RacksList aps={props.aps} locale={props.locale} racks={racks} />
    </Layout>
  )
}
