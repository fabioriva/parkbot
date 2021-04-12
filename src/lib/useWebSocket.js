import { useState, useEffect, useRef } from 'react'
// import { useSnackbar } from 'notistack'
// import message from 'src/lib/message'
// import notification from 'src/lib/notification'

const COMM_INITIAL_VALUE = {
  isOnline: false
}

export function useComm (url) {
  const { enqueueSnackbar } = useSnackbar()

  const [waitingToReconnect, setWaitingToReconnect] = useState(null)

  const [error, setError] = useState('')
  const [comm, setComm] = useState(COMM_INITIAL_VALUE)
  const [diag, setDiag] = useState({})
  const [map, setMap] = useState({})
  const [notification, setNotification] = useState(null)

  const ws = useRef(null)

  useEffect(() => {
    ws.current = new window.WebSocket(url)
    ws.current.onopen = () => console.log('ws opened')
    ws.current.onclose = () => {
      if (ws.current) {
        // Connection failed
        console.log('ws closed by server')
      } else {
        // Cleanup initiated from app side, can return here, to not attempt a reconnect
        console.log('ws closed by app component unmount')
        return
      }
      if (waitingToReconnect) {
        return
      }
      console.log('ws closed')
      setWaitingToReconnect(true)
      setTimeout(() => setWaitingToReconnect(null), 1000)
    }
    return () => ws.current.close()
  }, [waitingToReconnect])

  useEffect(() => {
    if (!ws.current) return

    ws.current.onerror = e => {
      console.log(e)
      setError(e)
    }

    ws.current.onmessage = e => {
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
          console.log(data[key])
          setNotification(data[key])
          // const snack = notification(data[key])
          // enqueueSnackbar(snack.message, snack.options)
        }
      })
    }
  }, [comm, diag, map])

  return {
    error,
    comm,
    diag,
    map
  }
}

// export function useComm (url) {
//   const [error, setError] = useState('')
//   const [comm, setComm] = useState(COMM_INITIAL_VALUE)
//   const [diag, setDiag] = useState({})
//   const [map, setMap] = useState({})

//   const { enqueueSnackbar } = useSnackbar()

//   useEffect(() => {
//     const ws = new global.WebSocket(url)

//     ws.onerror = e => {
//       console.log(e)
//       setError(e)
//     }

//     ws.onmessage = e => {
//       const data = JSON.parse(e.data)
//       Object.keys(data).forEach(key => {
//         if (key === 'comm') {
//           setComm(data[key])
//         }
//         if (key === 'diag') {
//           setDiag(data[key])
//         }
//         if (key === 'map') {
//           setMap(data[key])
//         }
//         if (key === 'notification') {
//           const snack = notification(data[key])
//           console.log(snack)
//           enqueueSnackbar(snack.message, snack.options)
//         }
//       })
//     }

//     return () => ws.close()
//   }, [url])

//   return {
//     error,
//     comm,
//     diag,
//     map
//   }
// }

export function useData (url, options) {
  const { initialData, page } = options

  const [error, setError] = useState(null)
  const [data, setData] = useState(initialData)

  const ws = useRef(null)

  useEffect(() => {
    ws.current = new window.WebSocket(url)
    ws.current.onopen = () => console.log('ws opened')
    ws.current.onclose = () => console.log('ws closed')
    return () => ws.current.close()
  }, [])

  useEffect(() => {
    if (!ws.current) return

    ws.current.onerror = e => {
      console.log(e)
      setError(e)
    }

    ws.current.onmessage = e => {
      const data = JSON.parse(e.data)
      Object.keys(data).forEach(key => {
        if (key === page) {
          setData(data[key])
        }
      })
    }
  }, [])

  return { error, data }
}

// export function useData (page, url) {
//   const [client, setClient] = useState(null)
//   const [error, setError] = useState('')
//   const [mesg, setMesg] = useState(null)

//   const { enqueueSnackbar } = useSnackbar()

//   const send = (event, data) => {
//     client.send(
//       JSON.stringify({
//         event: event,
//         data: data
//       })
//     )
//   }

//   useEffect(() => {
//     const ws = new global.WebSocket(url)

//     setClient(ws)

//     // ws.onopen = () => console.log('ws opened')
//     // ws.onclose = () => console.log('ws closed')
//     ws.onerror = e => {
//       console.log(e)
//       setError(e)
//     }

//     ws.onmessage = e => {
//       const data = JSON.parse(e.data)
//       Object.keys(data).forEach(key => {
//         if (key === page) {
//           setMesg(data[key])
//         }
//         if (key === 'message') {
//           const snack = message(data[key])
//           enqueueSnackbar(snack.message, snack.options)
//         }
//       })
//     }

//     return () => ws.close()
//   }, [page, url])

//   return {
//     // client,
//     error,
//     mesg,
//     send
//   }
// }
