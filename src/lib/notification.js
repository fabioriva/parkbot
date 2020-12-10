export default function notification (payload) {
  console.log('notification:', payload)
  const { type, message, description, card, stall } = payload
  switch (type) {
    case 1: {
      const snack = {
        message: <span>{description}</span>,
        options: {
          variant: 'error'
        }
      }
      return snack
    }
    case 2: {
      const snack = {
        message: <span>{description}</span>,
        options: {
          variant: 'success'
        }
      }
      return snack
    }
    case 3:
    case 4: {
      const snack = {
        message: <span>{description}</span>,
        options: {
          variant: 'warning'
        }
      }
      return snack
    }
    case 5: {
      const snack = {
        message: <span>{description}</span>,
        options: {
          variant: 'default'
        }
      }
      return snack
    }
    case 6: {
      const snack = {
        message: <span>{description}</span>,
        options: {
          variant: 'default'
        }
      }
      return snack
    }
    default: {
      const snack = {
        message: <span>{description}</span>,
        options: {
          variant: 'info'
        }
      }
      return snack
    }
  }
}
