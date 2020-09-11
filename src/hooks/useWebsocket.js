import { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack';

const useWebSocket = (page, url) => {
  const [client, setClient] = useState(null)
  const [error, setError] = useState('')
  const [mesg, setMesg] = useState(null)

  const { enqueueSnackbar } = useSnackbar();

  const send = (event, data) => {
    client.send(
      JSON.stringify({
        event: event,
        data: data
      })
    )
  }

  useEffect(() => {
    const ws = new global.WebSocket(url)

    setClient(ws)

    // ws.onopen = () => console.log('ws opened')
    // ws.onclose = () => console.log('ws closed')
    ws.onerror = e => {
      console.log(e)
      setError(e)
    }

    ws.onmessage = e => {
      const data = JSON.parse(e.data)
      Object.keys(data).forEach((key) => {
        if (key === page) {
          setMesg(data[key])
        }
        if (key === 'message') {
          // message(data[key])
          console.log(data[key])
          const mesg = <span>{data[key].message} {data[key].description}</span>
          enqueueSnackbar(mesg)
        }
      })
    }

    return () => ws.close()
  }, [page, url])

  return {
    // client,
    error,
    mesg,
    send
  }
}

export default useWebSocket
