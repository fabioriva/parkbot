import Layout from 'src/components/Layout'
import ParBot from 'src/components/ParkBot'

export default function Error (props) {
  return (
    <Layout {...props}>
      <ParBot message={props.message} />
    </Layout>
  )
}
