import React from "react";
import Carousel from "react-material-ui-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "next-translate/useTranslation";

export default function Primary({ data }) {
  const { t } = useTranslation("dss");

  const items = [];
  data.running.forEach((item, key) => {
    items.push(
      <div key={key}>
        <FontAwesomeIcon icon={faCar} />
        &nbsp;&#35;&nbsp;{item.card}
      </div>
    );
    items.push(<div key={key}>{t(item.mesg)}</div>);
    // items.push(<div key={key}>{item.name}</div>);
    items.push(<div key={key}>{t("exit-name", { id: key + 1 })}</div>);
  });

  return (
    <Carousel
      animation="fade"
      duration={3000}
      // interval={5000}
      indicators={false}
      stopAutoPlayOnHover={false}
      swipe={false}
    >
      {items}
    </Carousel>
  );
}
