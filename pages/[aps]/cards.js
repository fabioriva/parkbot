// import parser from 'ua-parser-js'
import { aps, apsPaths } from 'src/constants/aps'
import { CARDS, EDIT_CARD } from 'src/constants/roles'
import fetchJson from 'src/lib/fetchJson'
import Cards from 'src/components/cards/Cards'
import withAuthSync from 'src/hocs/withAuthSync'
import { withSnackbar } from 'notistack'

const Page = props => {
  return <Cards {...props} />
}
export async function getStaticPaths ({ locales }) {
  return {
    paths: await apsPaths(locales),
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  if (aps(params.aps) === -1) {
    return {
      notFound: true
    }
  }

  const { APS_NAME, BACKEND_URL, WEBSOCK_URL } = await import(
    `src/constants/${params.aps}`
  )
  const json = await fetchJson(`${BACKEND_URL}/cards`)

  return {
    props: {
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        pageRole: CARDS,
        pageTitle: 'title-cards',
        userRole: EDIT_CARD
      },
      json
    }
  }
}

export default withAuthSync(withSnackbar(Page))

// export async function getServerSideProps ({ params, req }) {
//   const ua = parser(req.headers['user-agent'])

//   if (ua.device.type === 'mobile') {
//     return {
//       redirect: {
//         destination: `/m/${params.aps}/cards`,
//         permanent: false
//       }
//     }
//   }

//   if (aps(params.aps) === -1) {
//     return {
//       notFound: true
//     }
//   }

//   const { APS_NAME, BACKEND_URL, WEBSOCK_URL } = await import(
//     `src/constants/${params.aps}`
//   )
//   const json = await fetchJson(`${BACKEND_URL}/cards`)

//   return {
//     props: {
//       definitions: {
//         apsName: APS_NAME,
//         backendUrl: BACKEND_URL,
//         websockUrl: WEBSOCK_URL,
//         pageRole: CARDS,
//         userRole: EDIT_CARD
//       },
//       json
//     }
//   }
// }

// export default withAuthSync(Page)
