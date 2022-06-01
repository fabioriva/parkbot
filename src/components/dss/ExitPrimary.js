import React from 'react'

import Carousel from 'react-material-ui-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import useTranslation from 'next-translate/useTranslation'

export default function Primary ({ data }) {
  const { t } = useTranslation('dss')

  const items = []
  data.running.forEach((device, key) => {
    items.push(<div key={key}>{device.garage}</div>)
    items.push(<div key={key}><FontAwesomeIcon icon={faCar} /> {device.card}</div>)
    items.push(<div key={key}>{t(device.op)}</div>)
  })

  return (
    <Carousel
      animation='slide'
      duration={3000}
      // interval={5000}
      indicators={false}
      stopAutoPlayOnHover={false}
      swipe={false}
    >
      {items}
    </Carousel>
  )
}
