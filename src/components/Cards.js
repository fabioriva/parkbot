import { useState, useEffect } from 'react'
import Layout from 'src/dashboard/Layout'
// import CardsList from 'src/components/CardsList'
import CardsTable from 'src/components/CardsTable'

const Cards = ({ currentUser = {}, definitions, json }) => {
  const {
    activeTab,
    apsName,
    apsLocation,
    pageTitle,
    websockUrl
  } = definitions
  
  const [cards, setCards] = useState(json)

  return (
    <Layout
      activeTab={activeTab}
      apsName={apsName}
      apsLocation={apsLocation}
      pageTitle={pageTitle}
      socket={`${websockUrl}?channel=ch2`}
      user={currentUser}
    >
      <CardsTable cards={cards} />
      {/* <CardsList
        cards={cards}
        openModal={modalOpen}
      />
      <Modal
        data={modal}
        onCancel={modalClose}
        onConfirm={modalConfirm}
      /> */}
    </Layout>
  )
}

export default Cards
