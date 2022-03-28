import React from "react";
import useTranslation from "next-translate/useTranslation";
// import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Error from "src/components/Error";
import Device from "src/components/overview/DeviceReduced";
import OperationDialog from "src/components/overview/OperationDialog";
import Queue from "src/components/overview/Queue";
import fetch from "src/lib/fetch";
import { useData } from "src/lib/useWebSocket";
import { ACTIONS, isAllowed } from "/src/constants/auth";

export default function Overview(props) {
  const { t } = useTranslation("overview");

  if (props.json.err) return <Error {...props} pageTitle={t("page-title")} />;

  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/${props.side}/overview`;

  const [overview, setOverview] = React.useState(props.data);
  const { data, loading } = useData(url, {
    initialData: overview,
    page: "overview",
  });
  React.useEffect(() => setOverview(data), [data]);

  // Dialog
  const [id, setId] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleOperationId = (id) => {
    setId(id);
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleConfirm = async (card) => {
    setOpen(false);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/${props.side}/system/operation`;
    const json = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + props.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ card, id }),
    });
    setOpenMessage(true);
    setResponse(json);
  };

  const handleDelete = async ({ card, index }) => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/${props.side}/system/queue/delete`;
    const json = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + props.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ card, index }),
    });
    setOpenMessage(true);
    setResponse(json);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={8} xl={9}>
          <Grid
            container
            spacing={2}
            // direction="row"
            // justifyContent="space-around"
            // alignItems="center"
          >
            <Grid item xs={12} md={4}>
              <Device
                item={overview.devices[0]}
                aps={props.aps}
                auth={isAllowed(props.user, [ACTIONS])}
                user={props.user}
                loading={loading}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Device
                item={overview.devices[1]}
                aps={props.aps}
                auth={isAllowed(props.user, [ACTIONS])}
                user={props.user}
                loading={loading}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Device
                item={overview.devices[2]}
                aps={props.aps}
                auth={isAllowed(props.user, [ACTIONS])}
                user={props.user}
                loading={loading}
              />
            </Grid>
            {overview.devices.slice(3).map((element, index) => (
              <Grid item key={index} xs={12} md={6}>
                <Device
                  item={element}
                  aps={props.aps}
                  // actions={[handleOpen]} //, handleRollback]}
                  auth={isAllowed(props.user, [ACTIONS])}
                  user={props.user}
                  // authorization={isAllowed(user, [userRole])
                  loading={loading}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <Queue
            auth={isAllowed(props.user, [ACTIONS])}
            data={overview.exitQueue}
            onDelete={handleDelete}
            // onExit={() => setOpen(true)}
            onExit={() => handleOperationId(0)}
            loading={loading}
          />
        </Grid>
      </Grid>
      <OperationDialog
        open={open}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        // value={operation}
        id={id}
        minCard={1}
        maxCard={overview.definitions.cards}
      />
    </>
  );
}
