import fetch from './fetchJson'

export default async function statisticsFetch (backendUrl, date) {
  const query = `dateString=${date}`
  const url = `${backendUrl}/statistics?${query}`
  const json = await fetch(url)
  return json
}
