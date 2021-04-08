import useTranslation from 'next-translate/useTranslation'

export default function HistoryText ({ item }) {
  const { t } = useTranslation('history')

  const { operation } = item

  // return operation.id

  switch (operation.id) {
    case 1:
      return <span>{t('list-op-id-1', { id: item.alarm.id })}</span>
    case 2:
      return <span>{t('list-op-id-2', { id: item.alarm.id })}</span>
    case 3:
      return <span>{t('list-op-id-3')}</span>
    case 4:
      return <span>{t('list-op-id-4')}</span>
    case 5:
      if (item.card === 999) {
        return <span>{t('list-op-id-10', { stall: item.stall })}</span>
      } else {
        return (
          <span>
            {t('list-op-id-5', { card: item.card, stall: item.stall })}
          </span>
        )
      }
    case 6:
      if (item.card === 999) {
        return <span>{t('list-op-id-11', { stall: item.stall })}</span>
      } else {
        return (
          <span>
            {t('list-op-id-6', { card: item.card, stall: item.stall })}
          </span>
        )
      }
    case 7:
      return <span>{t('list-op-id-7', { number: item.card })}</span>
    case 8:
      return <span>{t('list-op-id-8', { number: item.card })}</span>
    case 9:
      return <span>{t('list-op-id-9')}</span>
    default:
      return <span>☠️</span>
  }
}
