import { useState, useEffect, useRef } from 'react'

export function useComm (url) {
  const ws = useRef(null)

  // const [error, setError] = useState('')
  const [comm, setComm] = useState(true)
  const [diag, setDiag] = useState({})
  const [map, setMap] = useState({})
  const [message, setMessage] = useState({})

  useEffect(() => {
    const ws = new global.WebSocket(url)

    ws.onerror = e => {
      console.error(e)
      // setError(e)
    }

    ws.onmessage = e => {
      const data = JSON.parse(e.data)
      Object.keys(data).forEach(key => {
        if (key === 'comm') {
          setComm(data[key])
        }
        if (key === 'diag') {
          setDiag(data[key])
        }
        if (key === 'map') {
          setMap(data[key])
        }
        if (key === 'notification') {
          setMessage(data[key])
        }
      })
    }

    return () => ws.close()
  }, [])

  return {
    // error,
    comm,
    diag,
    map,
    message
  }
}

export function useData (url, options) {
  const { initialData } = options

  // const [error, setError] = useState(null)
  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(true)

  const ws = useRef(null)

  useEffect(() => {
    ws.current = new window.WebSocket(url)
    // ws.current.onopen = () => console.log('ws opened')
    // ws.current.onclose = () => console.log('ws closed')
    return () => ws.current.close()
  }, [])

  useEffect(() => {
    if (!ws.current) return

    ws.current.onerror = e => {
      console.error(e)
      // setError(e)
    }

    ws.current.onmessage = e => {
      const data = JSON.parse(e.data)
      setData(data)
      setLoading(false)
    }
  }, [])

  // return { error, data }
  return { data, loading }
}
