import Layout from 'src/dashboard/Layout'
import Table from 'src/components/HistoryTable'

const Page = ({ currentUser = {}, definitions, json, fetchHistory }) => {
  const {
    activeTab,
    apsName,
    apsLocation,
    pageTitle,
    websockUrl
  } = definitions
  
  const [history, setHistory] = React.useState(json)

  // console.log(history)

  return (
    <Layout
      activeTab={activeTab}
      apsName={apsName}
      apsLocation={apsLocation}
      pageTitle={pageTitle}
      socket={`${websockUrl}?channel=ch2`}
      user={currentUser}
    >
      <Table query={history.query} />
    </Layout>
  )
}

export default Page
