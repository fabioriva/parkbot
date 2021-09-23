import useTranslation from 'next-translate/useTranslation'

const Bit = ({ addr, label }) => {
  const { t } = useTranslation('io')
  return (
    <ul className='tooltip'>
      <li>{addr}</li>
      <li>{label}</li>
      <li>{t(label, {}, { fallback: 'fallback' })}</li>
      <style jsx>
        {`
          .tooltip {
            list-style-type: none; /* Remove bullets */
            padding: 0; /* Remove padding */
            margin: 0; /* Remove margins */
          }
        `}
      </style>
    </ul>
  )
}

export default Bit
