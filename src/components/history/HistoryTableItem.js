import useTranslation from 'next-translate/useTranslation'

export default function HistoryText ({ item }) {
  const { t } = useTranslation('history')

  const { operation } = item

  switch (operation.id) {
    case 1:
      return <span>{t('op-id-1')}</span>
    case 2:
      return <span>{t('op-id-2')}</span>
    case 3:
      return <span>{t('op-id-3')}</span>
    case 4:
      return <span>{t('op-id-4')}</span>
    case 5:
      return <span>{t('op-id-5')}</span>
    case 6:
      return <span>{t('op-id-6')}</span>
    case 7:
      return <span>{t('op-id-7')}</span>
    case 8:
      return <span>{t('op-id-8')}</span>
    case 9:
      return <span>{t('op-id-9')}</span>
    default:
      return <span>☠️</span>
  }
}
