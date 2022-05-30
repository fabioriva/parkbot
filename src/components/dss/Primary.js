import React from "react";
import Carousel from "react-material-ui-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleArrowUp,
  faCircleArrowDown,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import useTranslation from 'next-translate/useTranslation'

export default function Primary({ data }) {
  const { t } = useTranslation('dss')
  return (
    <React.Fragment>
      {data.L3 === 0 && <FontAwesomeIcon icon={faExclamation} size="2xl" />}
      {data.L3 === 1 && (
        <Carousel
          interval={2000}
          indicators={false}
          stopAutoPlayOnHover={false}
          swipe={false}
        >
          <div>{t("drive-in")}</div>
          <FontAwesomeIcon
            icon={faCircleArrowUp}
            size="2xl"
            color="#198754"
          />
        </Carousel>
      )}
      {data.L3 === 2 && (
        <Carousel
          interval={2000}
          indicators={false}
          stopAutoPlayOnHover={false}
          swipe={false}
        >
          <div>{t("drive-back")}</div>
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            size="2xl"
            color="#ffc107"
          />
        </Carousel>
      )}
      {data.L3 === 3 && (
        <Carousel
          interval={2000}
          indicators={false}
          stopAutoPlayOnHover={false}
          swipe={false}
        >
          <div>{t("stop")}</div>
          <FontAwesomeIcon
            icon={faCircle}
            size="2xl"
            color="#dc3545"
          />
        </Carousel>
      )}
    </React.Fragment>
  )
}