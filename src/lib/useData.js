import useSWR from 'swr'

const fetcher = url => global.fetch(url).then(r => r.json())

export default function useData (url, options) {
  const { data, error } = useSWR(url, fetcher, options)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}
