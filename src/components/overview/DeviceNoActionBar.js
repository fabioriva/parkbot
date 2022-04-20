import * as React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { green, orange, red } from "@mui/material/colors";
import Lamp from "src/components/overview/Lamp";
import Mode from "src/components/overview/Mode";
import Silomat from "src/components/overview/Silomat";
import Tooltip from 'src/components/Tooltip'
import VirtualGarage from "src/components/overview/VirtualGarage";
import useTranslation from "next-translate/useTranslation";
import { ALARMS, DIAGNOSTIC, hasRole, isAllowed } from "src/constants/auth";

import IconButton from '@mui/material/IconButton'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const bg = (op, theme) => {
  switch (op) {
    case 1:
      return theme.palette.ce;
    case 2:
      return theme.palette.cu;
    case 3:
      return theme.palette.pp;
    // default:
    //   return '#fff'
  }
};

const Item = ({ loading, title, value }) => (
  <React.Fragment>
    <Typography variant="body2" color="textSecondary" component="h1">
      {title}
    </Typography>
    <Typography
      variant="subtitle2"
      component="h2"
      // gutterBottom
      sx={{
        color: "info.dark",
        fontSize: 18,
        fontWeight: "bold",
        mb: "0.1rem",
      }}
    >
      {loading ? (
        <Skeleton variant="text" animation="wave" width="80%" />
      ) : (
        value
      )}
    </Typography>
  </React.Fragment>
);

export default function Device(props) {
  const { t } = useTranslation("overview");

  const { id, name, card, mode, motor, operation, size, stall, step } =
    props.item.a;

  const LS = (
    <Lamp
      key={0}
      color={props.item.c[0].status ? green[500] : green[100]}
      title={props.item.c[0].status ? t("device-on") : t("device-off")}
    />
  );
  const LC = (
    <Lamp
      key={1}
      color={props.item.c[1].status ? orange[500] : orange[100]}
      title={
        props.item.c[1].status ? t("device-ready-on") : t("device-ready-off")
      }
    />
  );
  const LA = (
    <Lamp
      key={2}
      color={props.item.c[2].status ? red[500] : red[100]}
      title={
        props.item.c[2].status ? t("device-alarm-on") : t("device-alarm-off")
      }
      active={props.item.alarms.length}
      disabled={!hasRole(props.user, [ALARMS])}
      href={`/${props.user.locale}/${props.aps}/active/${id - 1}`}
    />
  );

  const CAR = props.item.c[3] !== undefined && props.item.c[3].status === 1 && (
    <Tooltip title={t('device-car-on-board')}>
      <span>
        <IconButton
          aria-label='car on board'
          size='small'
          disabled
        >
          <DirectionsCarIcon color='action' />
        </IconButton>
      </span>
    </Tooltip>
  )

  return (
    <Card
      sx={{
        maxWidth: 420,
      }}
    >
      <CardHeader
        sx={{
          py: 1,
          "& .MuiCardHeader-title": {
            fontSize: 16,
          },
        }}
        action={[CAR, LA, LC, LS]}
        avatar={<Mode mode={mode} step={step} />}
        title={name}
        // subheader={`Device ${id}`}
      />
      <CardActionArea
        disabled={!isAllowed(props.user, [DIAGNOSTIC])}
        href={`/${props.user.locale}/${props.aps}/device/${id - 1}`}
      >
        <CardContent sx={{ bgcolor: (theme) => bg(operation, theme), py: 1 }}>
          {/* View 1 */}
          {motor === 0 && (
            <Grid container>
              {/* <Grid item xs={6}>
                <Item
                  title={t('device-mode')}
                  value={mode.key ? t(`common:${mode.key}`) : '---'}
                  loading={props.loading}
                />
              </Grid> */}
              <Grid item xs={6}>
                <Item
                  title={t("device-card")}
                  value={card}
                  loading={props.loading}
                />
              </Grid>
              <Grid item xs={6}>
                <Item
                  title={t("device-dest")}
                  value={stall}
                  loading={props.loading}
                />
              </Grid>
              <Grid item xs={6}>
                <Item
                  title={t("device-size")}
                  value={size}
                  loading={props.loading}
                />
              </Grid>
              {props.item.b.map((item, key) => (
                <Grid item key={key} xs={6}>
                  <Item
                    // title={item.name}
                    title={t("device-position")}
                    value={
                      <>
                        {item.position}&nbsp;&rarr;&nbsp;{item.destination}
                      </>
                    }
                    loading={props.loading}
                  />
                </Grid>
              ))}
            </Grid>
          )}
          {/* View 2 */}
          {motor === 1 && (
            <Silomat data={props.item.e} loading={props.loading} />
          )}
          {/* View 3 */}
          {motor === 2 && props.item.vg !== undefined && (
            <VirtualGarage
              loading={props.loading}
              panel={{
                l1: props.item.vg.panel[0].status,
                l2: props.item.vg.panel[1].status,
                l3: props.item.vg.panel[2].status,
                l4: props.item.vg.panel[3].status,
                l5: props.item.vg.panel[4].status,
              }}
              sensors={props.item.vg.sensors}
            />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
