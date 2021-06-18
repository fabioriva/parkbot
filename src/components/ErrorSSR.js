import Layout from 'src/components/LayoutSSR'
import ParkBot from 'src/components/ParkBot'

export default function Error (props) {
  return (
    <Layout {...props}>
      <ParkBot message={props.message} />
    </Layout>
  )
}
