export default function notification (payload) {
  console.log('message:', payload)
  const { type, info } = payload.response
  const origin = {
    vertical: 'top',
    horizontal: 'center'
  }
  switch (type) {
    case 'error': {
      const snack = {
        message: info,
        options: {
          variant: 'error'
        }
      }
      return snack
    }
    case 'success': {
      const snack = {
        message: info,
        options: {
          anchorOrigin: origin,
          variant: 'success'
        }
      }
      return snack
    }
    case 'warning': {
      const snack = {
        message: info,
        options: {
          anchorOrigin: origin,
          variant: 'warning'
        }
      }
      return snack
    }
    default: {
      const snack = {
        message: info,
        options: {
          anchorOrigin: origin,
          variant: 'info'
        }
      }
      return snack
    }
  }
}
