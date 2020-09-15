import Layout from 'src/dashboard/Layout'
// import Grid from '@material-ui/core/Grid'
import Query from 'src/components/HistoryQuery'
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
    console.log('queryHistory', values)
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
      {/* <Grid container spacing={3}>
        <Grid item lg={2}>
          <Query queryHistory={queryHistory} />
        </Grid>
        <Grid item lg={10}>
          <Table query={history.query} />
        </Grid>
      </Grid> */}
      <Query queryHistory={queryHistory} />
      <Table query={history.query} />
    </Layout>
  )
}

export default Page
