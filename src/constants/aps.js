const APS_ = [
  { ns: 'bmc', name: 'BMC, Mumbai, 🇮🇳' },
  { ns: 'chandan', name: 'Chandan Society, Mumbai, 🇮🇳' },
  { ns: 'nhidcl', name: 'NHIDCL, New Delhi, 🇮🇳' },
  { ns: 'trumpeldor', name: 'Trumpeldor, Tel Aviv, 🇮🇱' },
  { ns: 'vl', name: 'Vaibhab Lakshmi, Mumbai, 🇮🇳' },
  { ns: 'wallstreet', name: 'Spire, Seattle, 🇺🇸' },
  { ns: 'washingtonblvd', name: 'Washington Blvd 8888, LA, 🇺🇸' }
]

export const aps_ = aps => APS_.find(a => aps === a.ns)

/**
 * Old
 */
const APS = [
  'bmc',
  'chandan',
  'nhidcl',
  'trumpeldor',
  'vl',
  'wallstreet',
  'washingtonblvd'
]

export const aps = aps => APS.indexOf(aps)

export const apsPaths = async (locales, args) => {
  return APS.flatMap(aps =>
    locales.map(locale => ({ params: { aps, ...args }, locale }))
  )
}
