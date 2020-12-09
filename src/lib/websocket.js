import { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'
import notification from 'src/lib/notification'
const COMM_INITIAL_VALUE = {
  isOnline: false
}

export function useComm (url) {
  const [error, setError] = useState('')
  const [comm, setComm] = useState(COMM_INITIAL_VALUE)
  const [diag, setDiag] = useState({})

  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    const ws = new global.WebSocket(url)

    ws.onerror = e => {
      console.log(e)
      setError(e)
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
        if (key === 'notification') {
          const snack = notification(data[key])
          enqueueSnackbar(snack.message, snack.options)
        }
      })
    }

    return () => ws.close()
  }, [url])

  return {
    error,
    comm,
    diag
  }
}

export function useData (page, url) {
  const [client, setClient] = useState(null)
  const [error, setError] = useState('')
  const [mesg, setMesg] = useState(null)

  // const { enqueueSnackbar } = useSnackbar()

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
      Object.keys(data).forEach(key => {
        if (key === page) {
          setMesg(data[key])
        }
        if (key === 'message') {
          const { type, info } = data[key].response
          console.log('message', type, info)
          // const origin = {
          //   vertical: 'top',
          //   horizontal: 'center'
          // }
          // switch (type) {
          //   case 'error':
          //     enqueueSnackbar(info, { anchorOrigin: origin, variant: 'error' })
          //     break
          //   case 'success':
          //     enqueueSnackbar(info, { anchorOrigin: origin, variant: 'success' })
          //     break
          //   case 'warning':
          //     enqueueSnackbar(info, { anchorOrigin: origin, variant: 'warning' })
          //     break
          //   default:
          //     enqueueSnackbar(info, { anchorOrigin: origin, variant: 'info' })
          //     break
          // }
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
