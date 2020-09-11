import { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack';

const COMM_INITIAL_VALUE = {
  isOnline: false
}

const useComm = (url) => {
  const [error, setError] = useState('')
  const [comm, setComm] = useState(COMM_INITIAL_VALUE)
  const [diag, setDiag] = useState({})

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const ws = new global.WebSocket(url)

    ws.onerror = e => {
      console.log(e)
      setError(e)
    }

    ws.onmessage = e => {
      const data = JSON.parse(e.data)
      Object.keys(data).forEach((key) => {
        if (key === 'comm') {
          setComm(data[key])
        }
        if (key === 'diag') {
          setDiag(data[key])
        }
        if (key === 'notification') {
          console.log(data[key])
          const mesg = <span>{data[key].message} {data[key].description}</span>
          enqueueSnackbar(mesg)
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

export default useComm
