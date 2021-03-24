import { format, endOfDay, startOfDay } from 'date-fns'

export default async function fetcher (...args) {
  try {
    const response = await global.fetch(...args)
    // if the server replies, there's always some data in json
    // if there's a network error, it will throw at the previous line
    const data = await response.json()
    if (response.ok) {
      return data
    }

    const error = new Error(response.statusText)
    error.response = response
    error.data = data
    throw error
  } catch (error) {
    if (!error.data) {
      error.data = { message: error.message }
    }
    // throw error
    return { err: true }
  }
}

export async function fetchHistory (
  apsId = 0,
  backendUrl,
  {
    filter = 'a',
    dateFrom = format(
      startOfDay(new Date()),
      'yyyy-MM-dd HH:mm:ss'
      // "yyyy-MM-dd'T'HH:mm:ss.SSS'z'"
    ),
    dateTo = format(
      endOfDay(new Date()),
      'yyyy-MM-dd HH:mm:ss'
      // "yyyy-MM-dd'T'HH:mm:ss.SSS'z'"
    ),
    number = 0
  }
) {
  const query = `system=${apsId}&dateFrom=${dateFrom}&dateTo=${dateTo}&filter=${filter}&device=0&number=${number}`
  const json = await fetcher(`${backendUrl}/history?${query}`)
  return json
}

export async function fetchOperations (
  backendUrl,
  date = format(new Date(), 'yyyy-MM-dd')
) {
  const query = `dateString=${date}`
  const url = `${backendUrl}/statistics?${query}`
  const json = await fetcher(url)
  return json
}
