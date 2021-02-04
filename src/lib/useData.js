import useSWR from 'swr'

const fetcher = url => global.fetch(url).then(r => r.json())

export default function useJson (url, initialData = {}) {
  console.log(url, initialData)
  const { data, error } = useSWR(url, fetcher, { initialData })
  console.log(data)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
