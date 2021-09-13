const APS_ = [
  { ns: 'bmc', name: 'BMC, Mumbai, 🇮🇳' },
  { ns: 'chandan', name: 'Chandan Society, 🇮🇳' },
  { ns: 'vl', name: 'Vaibhab Lakshmi, 🇮🇳' },
  { ns: 'wallstreet', name: 'Spire, Seattle, 🇺🇸' },
  { ns: 'washingtonblvd', name: 'Washington Blvd 8888, LA, 🇺🇸' }
]

export const aps_ = aps => APS_.find(a => aps === a.ns)

/**
 * Old
 */
const APS = ['bmc', 'chandan', 'vl', 'wallstreet', 'washingtonblvd']

export const aps = aps => APS.indexOf(aps)

export const apsPaths = async (locales, args) => {
  return APS.flatMap(aps =>
    locales.map(locale => ({ params: { aps, ...args }, locale }))
  )
}
