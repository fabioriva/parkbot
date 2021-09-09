const APS = ['bmc', 'vl', 'wallstreet', 'washingtonblvd']

export const aps = aps => APS.indexOf(aps)

export const apsPaths = async (locales, args) => {
  return APS.flatMap(aps =>
    locales.map(locale => ({ params: { aps, ...args }, locale }))
  )
}

// const APS_ = [
//   { ns: 'wallstreet', name: 'Spire, Seattle, 🇺🇸' },
//   { ns: 'washingtonblvd', name: 'Washington Blvd 8888, LA, 🇺🇸' },
//   { ns: 'vl', name: 'Vaibhab Lakshmi, 🇮🇳' }
// ]

// export const aps_ = aps =>
//   APS_.find(a => {
//     console.log(a, typeof a.ns, a.ns, typeof aps, aps, 'result:', a.ns === aps)
//     return a.ns === aps
//   })

// export const aps_ = aps => APS_.find(a => a.ns === aps)
