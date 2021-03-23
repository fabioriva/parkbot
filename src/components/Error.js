import Layout from 'src/components/Layout'
import ParBot from 'src/components/ParkBot'

export default function Error ({ definitions, message, title, user }) {
  const { apsName, websockUrl } = definitions

  return (
    <Layout
      apsName={apsName}
      pageTitle={title}
      socket={`${websockUrl}?channel=ch2`}
      user={user}
    >
      <ParBot message={message} />
    </Layout>
  )
}
