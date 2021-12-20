import useTranslation from 'next-translate/useTranslation'

export default function HistoryListText ({ item }) {
  const { t } = useTranslation('history')
  // console.log(item)
  const { alarm, card, operation, mode, stall } = item

  switch (operation.id) {
    case 1:
    case 2:
      return (
        <>
          <span>AL{alarm.id}</span>&nbsp;
          {t('alarms:' + alarm.key, alarm.query, {
            fallback: ['alarms:fallback1', 'fallback2']
          })}
        </>
      )
    case 3:
      return <>{t('list-op-id-3', { id: mode.id, label: t(mode.key) })}</>
    case 4:
      return <>{t('list-op-id-4', { card: card })}</>
    case 5:
      return <>{t('list-op-id-5', { card, stall })}</>
    case 6:
      return <>{t('list-op-id-6', { card, stall })}</>
    case 7:
      return <>{t('list-op-id-7', { card, stall })}</>
    case 8:
      return <>{t('list-op-id-8', { card, stall })}</>
    case 9:
      return <>{t('list-op-id-9', { stall })}</>
    case 10:
      return <>{t('list-op-id-10', { card })}</>
    case 11:
      return <>{t('list-op-id-11', { card })}</>
    default:
      return <>Operation {operation.id}</>
  }
}
