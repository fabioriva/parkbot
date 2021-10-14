import React from 'react'
import { format, endOfDay, startOfDay, subDays } from 'date-fns'
import fetch from 'src/lib/fetch'
import HistoryTable from 'src/components/history/HistoryTable'

export default function History (props) {
  const [history, setHistory] = React.useState(props.json)

  return (
    <>
      <HistoryTable count={history.count} query={history.query} />
    </>
  )
}

export async function getServerSideProps (ctx) {
  const dateFrom = format(
    subDays(startOfDay(new Date()), 1),
    'yyyy-MM-dd HH:mm:ss'
  )
  // const dateFrom = format(startOfDay(new Date()), 'yyyy-MM-dd HH:mm:ss')
  const dateTo = format(endOfDay(new Date()), 'yyyy-MM-dd HH:mm:ss')
  const filter = 'a'
  const query = `system=0&dateFrom=${dateFrom}&dateTo=${dateTo}&filter=${filter}&device=0&number=0`
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/wallstreet/history?${query}`
  const json = await fetch(url, {
    // headers: { Authorization: 'Bearer ' + token }
  })

  return {
    props: {
      aps: 'wallstreet',
      apsName: 'Spire',
      locale: 'en',
      json
    }
  }
}
