import React from "react";
import Carousel from "react-material-ui-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "next-translate/useTranslation";

const PastelsColorPalette = [
  "#e0e300",
  "#00bfaf",
  "#ff598f",
  "#e0e300",
  "#fd8a5e",
  "#8a5efd",
];

export default function Primary({ data }) {
  const { t } = useTranslation("dss");

  const items = [];
  data.running.forEach((item, key) => {
    items.push(
      <div style={{ color: PastelsColorPalette[key] }} key={key}>
        <FontAwesomeIcon icon={faCar} />
        &nbsp;&#35;&nbsp;{item.card}
      </div>
    );
    items.push(
      <div style={{ color: PastelsColorPalette[key] }} key={key}>
        {t(item.mesg)}
      </div>
    );
    items.push(
      <div style={{ color: PastelsColorPalette[key] }} key={key}>
        {item.name}
      </div>
    );
  });

  const idle = [
    <div>{t("exit-wait-call-1")}</div>,
    <div>{t("exit-wait-call-2")}</div>,
  ];

  return (
    <Carousel
      animation="fade"
      duration={2500}
      // interval={5000}
      indicators={false}
      stopAutoPlayOnHover={false}
      swipe={false}
    >
      {items.length > 0 ? items : idle}
    </Carousel>
  );
}
