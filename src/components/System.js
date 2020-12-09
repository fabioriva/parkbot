// import { useState, useEffect } from 'react'
// import Error from 'next/error'
import Layout from 'src/components/Layout'
// import List from 'src/components/AlarmsList'
// import { hasRole, isAllowed } from 'src/lib/auth'
// import { DASHBOARD, ACTIONS } from 'src/constants/roles'
// import useWebSocket from 'src/hooks/useWebsocket'
// import { withTranslation } from 'i18n'
import { useTranslation } from 'react-i18next'
import { useData } from 'src/lib/websocket'

const System = ({ definitions, json, user }) => {
  const { t } = useTranslation(['system'])

  const { apsName, websockUrl } = definitions
  const { mesg, send } = useData('overview', `${websockUrl}?channel=ch1`)

  return (
    <Layout
      apsName={apsName}
      pageTitle={t('title')}
      socket={`${websockUrl}?channel=ch2`}
      user={user}
    >
      {t('title')}
    </Layout>
  )
}

export default System
