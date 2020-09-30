import Hidden from '@material-ui/core/Hidden';
import Layout from 'src/app/Layout'
import Query from 'src/components/HistoryQuery'
import List from 'src/components/HistoryList'
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

  const queryHistory = async (values) => {
    const json = await fetchHistory(values)
    setHistory(json)
  }

  return (
    <Layout
      activeTab={activeTab}
      apsName={apsName}
      apsLocation={apsLocation}
      pageTitle={pageTitle}
      socket={`${websockUrl}?channel=ch2`}
      user={currentUser}
    >      
      <Hidden mdUp>
        <List query={history.query} />
      </Hidden>
      <Hidden smDown>
        <Query queryHistory={queryHistory} />
        <Table query={history.query} />
      </Hidden>
      
    </Layout>
  )
}

export default Page
