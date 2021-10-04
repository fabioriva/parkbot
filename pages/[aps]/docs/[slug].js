import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Paper from '@mui/material/Paper'
// import Layout from 'src/components/Layout'
import { aps_, apsPaths } from 'src/constants/aps'
import { getDocBySlug, getAllDocs } from 'src/lib/api'
import markdownToHtml from 'src/lib/markdownToHtml'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => {
  const router = useRouter()
  const { locale } = router
  const { aps, slug, key, query } = router.query

  const { t } = useTranslation('io')

  return (
    // <Layout {...props} pageTitle={props.doc.title}>
    <Paper sx={{ p: 0 }}>
      {/* <h2>{props.doc.slug}</h2>
        <p>Title: {props.doc.title}</p>
        <p>Description: {props.doc.description}</p>
        <p>Content: {props.doc.content}</p>
        <p>{locale}</p>
        <p>{aps}</p>
        <p>{slug}</p> */}
      <Alert severity='warning'>
        <AlertTitle>Help</AlertTitle>
        <h1 dangerouslySetInnerHTML={{ __html: props.doc.description }} />
        <p>
          <strong>{key}</strong> {t(key)}
        </p>
        <div dangerouslySetInnerHTML={{ __html: props.doc.content }} />
        {/* <p>{query}</p> */}
      </Alert>
    </Paper>
    // </Layout>
  )
}

export async function getStaticProps ({ locale, params }) {
  // if (aps(params.aps) === -1) {
  //   return {
  //     notFound: true
  //   }
  // }

  // const { APS_NAME } = await import(`src/constants/${params.aps}`)

  const APS = aps_(params.aps)

  const doc = getDocBySlug(
    params.slug,
    ['title', 'description', 'slug', 'content'],
    locale
  )
  const content = await markdownToHtml(doc.content || '')

  return {
    props: {
      // aps: params.aps,
      // apsName: APS_NAME,
      aps: APS.ns,
      apsName: APS.name,
      locale,
      executionTime: process.hrtime(),
      doc: {
        ...doc,
        content
      }
    }
  }
}

export async function getStaticPaths ({ locales, defaultLocale }) {
  const docs = getAllDocs(['slug'])

  const paths = []

  const APS = ['wallstreet', 'washingtonblvd']

  locales.forEach((locale, i) => {
    APS.forEach((aps, i) => {
      docs.forEach((doc, i) => {
        paths.push({ params: { aps, slug: doc.slug }, locale })
      })
    })
  })

  // console.log(locales, defaultLocale, paths)

  return { paths, fallback: false }
}

// export async function getStaticPaths ({ locales }) {
//   const docs = getAllDocs(['slug'])

//   const paths = locales.flatMap(locale =>
//     docs.map(doc => ({ params: { locale, slug: doc.slug } }))
//   )
//   console.log(paths)

//   return {
//     paths: paths,
//     fallback: false
//   }
// }

// export async function getStaticPaths ({ locales }) {
//   const docs = getAllDocs(['slug'])

//   return {
//     paths: docs.map(doc => {
//       return {
//         params: {
//           slug: doc.slug
//         }
//       }
//     }),
//     fallback: false
//   }
// }

export default withAuthSync(Page)
