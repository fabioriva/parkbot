const APS = ['bassano', 'wallstreet', 'wareham', 'washingtonblvd']

export default async function paths (locales, args) {
  const paths = APS.flatMap(aps =>
    locales.map(locale => ({ params: { aps, ...args }, locale }))
  )
  // console.log(paths)
  return paths
}
