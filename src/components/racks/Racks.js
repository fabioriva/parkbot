import Layout from 'src/components/LayoutResponsive'
import Error from 'src/components/Error'
// import RacksList from 'src/components/racks/RacksList'
import GridList from 'src/components/racks/GridList'
// material ui
import Container from '@material-ui/core/Container'

export default function Racks (props) {
  const { json, user } = props

  if (json.err) {
    return <Error {...props} message='Error 500' />
  }

  return (
    <Layout {...props}>
      <Container maxWidth='lg'>
        {/* <RacksList racks={racks} user={user} /> */}
        <GridList racks={json} user={user} />
      </Container>
    </Layout>
  )
}
