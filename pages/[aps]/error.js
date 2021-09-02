import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Paper from '@mui/material/Paper'
import Layout from 'src/components/Layout'
import { aps, apsPaths } from 'src/constants/aps'
import useTranslation from 'next-translate/useTranslation'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => {
  const { t } = useTranslation('common')

  return (
    <Layout {...props} pageTitle={t('error-title')}>
      <Paper>
        <Alert severity='error'>
          <AlertTitle>{t('error-code', { code: 500 })}</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
      </Paper>
    </Layout>
  )
}

export async function getStaticProps ({ locale, params }) {
  if (aps(params.aps) === -1) {
    return {
      notFound: true
    }
  }

  const { APS_NAME } = await import(`src/constants/${params.aps}`)

  return {
    props: {
      aps: params.aps,
      apsName: APS_NAME,
      locale,
      executionTime: process.hrtime()
    }
  }
}

export async function getStaticPaths ({ locales }) {
  return { paths: await apsPaths(locales), fallback: false }
}

export default withAuthSync(Page)
