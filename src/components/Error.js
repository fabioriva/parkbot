import Layout from 'src/components/Layout'
import ParkBot from 'src/components/ParkBot'

export default function Error (props) {
  return (
    <Layout {...props}>
      <ParkBot message={props.message} />
    </Layout>
  )
}
