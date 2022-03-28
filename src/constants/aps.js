const APS_ = [
  { ns: 'alumim', name: 'Alumim, Tel Aviv, 🇮🇱' },
  { ns: 'bmc', name: 'BMC, Mumbai, 🇮🇳' },
  { ns: 'chandan', name: 'Chandan Society, Mumbai, 🇮🇳' },
  { ns: 'ironbank', name: 'Iron Bank, Auckland, 🇳🇿' },
  { ns: 'kn', name: 'Kamla Nagar, New Delhi, 🇮🇳' },
  { ns: 'muse', name: 'The Muse, Miami, 🇺🇸' },
  { ns: 'nhidcl', name: 'NHIDCL, New Delhi, 🇮🇳' },
  { ns: 'nyu', name: 'Langone Medical Center, NY, 🇺🇸' },
  { ns: 'qihe', name: 'Qihe School, 🇨🇳' },
  { ns: 'trumpeldor', name: 'Trumpeldor, Tel Aviv, 🇮🇱' },
  { ns: 'vl', name: 'Vaibhab Lakshmi, Mumbai, 🇮🇳' },
  { ns: 'wallstreet', name: 'Spire, Seattle, 🇺🇸' },
  { ns: 'washingtonblvd', name: 'Washington Blvd 8888, LA, 🇺🇸' }
]

export const aps_ = aps => APS_.find(a => aps === a.ns)

/**
 * Old
 
const APS = [
  'bmc',
  'chandan',
  'ironbank',
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

*/
