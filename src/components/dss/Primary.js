import React from "react";
import Carousel from "react-material-ui-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircle,
  faCircleArrowUp,
  faCircleArrowDown,
  // faExclamation,
  faSquareParking,
} from "@fortawesome/free-solid-svg-icons";
import useTranslation from "next-translate/useTranslation";

export default function Primary({ data }) {
  const { t } = useTranslation("dss");
  return (
    <>
      {data.L3 === 0 && (
        <FontAwesomeIcon icon={faSquareParking} color="#0d6efd" size="2xl" />
      )}
      {data.L3 === 1 && (
        <Carousel
          interval={2000}
          indicators={false}
          stopAutoPlayOnHover={false}
          swipe={false}
        >
          <div>{t("drive-in")}</div>
          <FontAwesomeIcon
            className="traffic-light-green"
            icon={faCircleArrowUp}
            size="2xl"
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
            className="traffic-light-yellow"
            icon={faCircleArrowDown}
            size="2xl"
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
            className="traffic-light-red"
            icon={faCircle}
            size="2xl"
          />
        </Carousel>
      )}
      {data.L4 && (
        <div className="maxLeft blink">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      )}
      {data.L5 && (
        <div className="maxRight blink">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      )}
      <style jsx global>
        {`
          .maxLeft {
            position: absolute;
            background-color: #efb700;
            top: 0px;
            left: 0px;
            height: 100vh;
            width: 15vw;
            line-height: 100vh;
          }
          .maxRight {
            position: absolute;
            background-color: #efb700;
            top: 0px;
            right: 0px;
            height: 100vh;
            width: 15vw;
            line-height: 100vh;
          }
          .blink {
            animation: blinker 2s linear infinite;
          }
          @keyframes blinker {
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
}
