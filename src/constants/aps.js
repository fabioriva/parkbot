const APS = [
  // 'bassano',
  'bmc',
  'chandan',
  // 'chiattone',
  // 'matalon',
  // 'muse',
  // 'nyu',
  'vl',
  'wallstreet',
  // 'wareham',
  'washingtonblvd'
]

export const aps = aps => APS.indexOf(aps)

export const apsPaths = async (locales, args) => {
  return APS.flatMap(aps =>
    locales.map(locale => ({ params: { aps, ...args }, locale }))
  )
}
