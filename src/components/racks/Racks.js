import Layout from 'src/components/LayoutResponsive'
import Error from 'src/components/Error'
import useTranslation from 'next-translate/useTranslation'
// import RacksList from 'src/components/racks/RacksList'
import GridList from 'src/components/racks/GridList'
// material ui
import Container from '@material-ui/core/Container'

export default function Racks ({ definitions, json, user }) {
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

  return (
    <Layout
      apsName={apsName}
      pageTitle={t('title-racks')}
      socket={`${websockUrl}?channel=ch2`}
      user={user}
    >
      <Container maxWidth='sm'>
        {/* <RacksList racks={racks} user={user} /> */}
        <GridList racks={json} user={user} />
      </Container>
    </Layout>
  )
}
