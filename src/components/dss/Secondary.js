import React from "react";
import Carousel from "react-material-ui-carousel";
import useTranslation from "next-translate/useTranslation";

export default function Secondary({ data }) {
  const { t } = useTranslation("dss");
  const options = {
    animation: "slide",
    duration: 1500,
  };
  switch (data.L3) {
    case 1:
      return (
        <Carousel
          animation={options.animation}
          duration={options.duration}
          indicators={false}
          stopAutoPlayOnHover={false}
          swipe={false}
        >
          <div>{t("drive-in-mesg-1")}</div>
        </Carousel>
      );
    case 2:
      return (
        <Carousel
          animation={options.animation}
          duration={options.duration}
          indicators={false}
          stopAutoPlayOnHover={false}
          swipe={false}
        >
          <div>{t("drive-back-mesg-1")}</div>
        </Carousel>
      );
    case 3:
      return (
        <Carousel
          animation={options.animation}
          duration={options.duration}
          indicators={false}
          stopAutoPlayOnHover={false}
          swipe={false}
        >
          <div>{t("stop-mesg-1")}</div>
          <div>{t("stop-mesg-2")}</div>
          <div>{t("stop-mesg-3")}</div>
        </Carousel>
      );
    default:
      return <div>{t("dss")}</div>;
  }
}
