import Image from 'next/image'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Layout from 'src/components/Layout'
import useTranslation from 'next-translate/useTranslation'

export default function ErrorPage (props) {
  const { t } = useTranslation('common')

  return (
    <Layout {...props} pageTitle={props.pageTitle}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        <Alert sx={{ my: 3 }} severity='error'>
          {t('error-fetch')}
        </Alert>
        <Image src='/bot.svg' alt='ParkBot' width={100} height={100} />
      </Box>
    </Layout>
  )
}
