import getT from 'next-translate/getT'

export default async function snackbar (payload, locale) {
  const t = await getT(locale, 'common')

  const { alarm, card, mode, operation, stall } = payload

  console.log('notification:', payload, locale)

  switch (operation.id) {
    case 1:
      return {
        message: t('snackbar-op-id-1', { id: alarm.id }),
        options: {
          variant: 'error'
        }
      }
    case 2:
      return {
        message: t('snackbar-op-id-2', { id: alarm.id }),
        options: {
          variant: 'success'
        }
      }
    case 3:
      return {
        message: t('snackbar-op-id-3', { mode: t(mode.info) }),
        options: {
          variant: 'warning'
        }
      }
    case 4:
      return {
        message: t('snackbar-op-id-4', { card: card }),
        options: {
          variant: 'success'
        }
      }
    case 5:
    case 7:
      return {
        message: t('snackbar-op-id-5', { card: card, stall: stall }),
        options: {
          variant: 'default'
        }
      }
    case 6:
    case 8:
      return {
        message: t('snackbar-op-id-6', { stall: stall }),
        options: {
          variant: 'default'
        }
      }
    default:
      return {
        message: t('snackbar-default'),
        options: {
          variant: 'default'
        }
      }
  }
}
