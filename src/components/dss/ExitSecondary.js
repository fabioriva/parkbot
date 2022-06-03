import React from "react";
import Carousel from "react-material-ui-carousel";
// import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "next-translate/useTranslation";

export default function Primary({ data }) {
  const { t } = useTranslation("dss");

  return (
    <Carousel
      animation="slide"
      duration={3000}
      // interval={5000}
      indicators={false}
      stopAutoPlayOnHover={false}
      swipe={false}
    >
      {data.waiting.map(
        (item, key) =>
          item.card !== 0 && (
            <div style={{ color: "#adb5bd" }} key={key}>
              <span>{t("exit-next")}</span>&nbsp;
              <FontAwesomeIcon icon={faCar} />
              &nbsp;&#35;&nbsp;{item.card}
            </div>
          )
      )}
    </Carousel>
  );

  // return (
  //   <>
  //     {data.waiting.length > 0 && (
  //       <Grid container>
  //         <Grid item xs={6}>
  //           <div className="text-secondary">{t("exit-next")}</div>
  //         </Grid>
  //         <Grid item xs={6}>
  //           <Carousel
  //             animation="slide"
  //             duration={3000}
  //             // interval={5000}
  //             indicators={false}
  //             stopAutoPlayOnHover={false}
  //             swipe={false}
  //           >
  //             {data.waiting.map(
  //               (element, key) =>
  //                 element.card !== 0 && (
  //                   <div style={{ color: "#adb5bd" }} key={key}>
  //                     <FontAwesomeIcon icon={faCar} /> {element.card}
  //                   </div>
  //                 )
  //             )}
  //           </Carousel>
  //         </Grid>
  //       </Grid>
  //     )}
  //   </>
  // );
}
