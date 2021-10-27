const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const nextTranslate = require('next-translate')

module.exports = nextTranslate(
  withPWA({
    // basePath: '/parkbot',
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    // swcMinify: true,
    // webpack5: true,
    pwa: {
      dest: 'public',
      runtimeCaching,
      disable: process.env.NODE_ENV !== 'production'
    }
  })
)

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/
// })

// module.exports = nextTranslate(
//   withPWA(
//     withMDX({
//       pageExtensions: ['js', 'jsx', 'md', 'mdx'],
//       pwa: {
//         dest: 'public',
//         runtimeCaching,
//         disable: process.env.NODE_ENV !== 'production'
//       }
//     })
//   )
// )
