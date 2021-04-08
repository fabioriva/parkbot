import useSWR from 'swr'
import Loading from 'src/components/Loading'

const fetcher = url => global.fetch(url).then(r => r.json())

export default function useData (url, options) {
  const { data, error } = useSWR(url, fetcher, options)

  if (!data && !error) return <Loading />

  return {
    data: data,
    // isLoading: !error && !data,
    isError: error
  }
}
