import { format, endOfDay, startOfDay } from 'date-fns'
import fetch from './fetchJson'

export default async function fetchHistory (
  apsId = 0,
  backendUrl,
  {
    filter = 'a',
    dateFrom = format(
      startOfDay(new Date()),
      "yyyy-MM-dd'T'HH:mm:ss.SSS'z'" // 'yyyy-MM-dd HH:mm:ss'
    ),
    dateTo = format(
      endOfDay(new Date()),
      "yyyy-MM-dd'T'HH:mm:ss.SSS'z'" // 'yyyy-MM-dd HH:mm:ss'
    ),
    number = 0
  }
) {
  const query = `system=${apsId}&dateFrom=${dateFrom}&dateTo=${dateTo}&filter=${filter}&device=0&number=${number}`
  const json = await fetch(`${backendUrl}/history?${query}`)
  return json
}
