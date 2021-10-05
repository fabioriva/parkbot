import useTranslation from 'next-translate/useTranslation'

function text (item, t) {
  // console.log(item)
  switch (item.operation.id) {
    case 1:
      return (
        <>
          <strong>AL{item.alarm.id}</strong>{' '}
          {t(`alarms:${item.alarm.i18n?.key}`, item.alarm.i18n?.query, {
            fallback: 'fallback1'
          })}
        </>
      )
    // return t(`alarms:${item.alarm.i18n.key}`, item.alarm.i18n.query, {
    //   fallback: 'fallback1'
    // })
    // return t('list-op-id-1', { id: item.alarm.id })
    case 2:
      return (
        <>
          <strong>AL{item.alarm.id}</strong>{' '}
          {t(`alarms:${item.alarm.i18n?.key}`, item.alarm.i18n?.query, {
            fallback: 'fallback1'
          })}
        </>
      )
    // return t(`alarms:${item.alarm.i18n.key}`, item.alarm.i18n.query, {
    //   fallback: 'fallback1'
    // })
    // return t('list-op-id-2', { id: item.alarm.id })
    case 3:
      return t('list-op-id-3', { id: item.mode.id, label: t(item.mode.label) }) // TODO: correggere
    // return (
    //   <div>
    //     <strong>{item.device.name}</strong>{' '}
    //     {t('list-op-id-3', { id: item.mode.id, label: t(item.mode.label) })}
    //   </div>
    // )
    case 4:
      return t('list-op-id-4', { card: item.card })
    case 5:
      return t('list-op-id-5', { card: item.card, stall: item.stall })
    // return (
    //   <div>
    //     <strong>{item.device.name}</strong>{' '}
    //     {t('list-op-id-5', { card: item.card, stall: item.stall })}
    //   </div>
    // )
    case 6:
      return t('list-op-id-6', { card: item.card, stall: item.stall })
    // return (
    //   <div>
    //     <strong>{item.device.name}</strong>{' '}
    //     {t('list-op-id-6', { card: item.card, stall: item.stall })}
    //   </div>
    // )
    case 7:
      return t('list-op-id-7', { card: item.card, stall: item.stall })
    // return (
    //   <div>
    //     <strong>{item.device.name}</strong>{' '}
    //     {t('list-op-id-7', { card: item.card, stall: item.stall })}
    //   </div>
    // )
    case 8:
      return t('list-op-id-8', { card: item.card, stall: item.stall })
    // return (
    //   <div>
    //     <strong>{item.device.name}</strong>{' '}
    //     {t('list-op-id-8', { card: item.card, stall: item.stall })}
    //   </div>
    // )
    default:
      return (
        <>
          {item.device.name} - {item.operation.id} - {t(item.operation.label)}
        </>
      )
  }
}

export default function HistoryListText ({ item }) {
  const { t } = useTranslation('history')

  return <>{text(item, t)}</>
}
