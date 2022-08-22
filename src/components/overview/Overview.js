import React from "react";
import useTranslation from "next-translate/useTranslation";
import Grid from "@mui/material/Grid";
import Error from "src/components/Error";
import Layout from "src/components/Layout";
import Message from "src/components/Message";
import Device from "src/components/overview/Device";
import OperationDialog from "src/components/overview/OperationDialog";
import Queue from "src/components/overview/Queue";
import fetch from "src/lib/fetch";
import { useData } from "src/lib/useWebSocket";
import { ACTIONS, ENTRY, EXIT, isAllowed } from "/src/constants/auth";

export default function Overview(props) {
  const { t } = useTranslation("overview");

  if (props.json.err) return <Error {...props} pageTitle={t("page-title")} />;

  const [overview, setOverview] = React.useState(props.json);
  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/overview`;
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
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/system/operation`;
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
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/system/queue/delete`;
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

  // Message
  const [openMessage, setOpenMessage] = React.useState(false);
  const [response, setResponse] = React.useState(null);
  const handleCloseMessage = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenMessage(false);
  };

  return (
    <Layout {...props} pageTitle={t("page-title")}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={8} xl={9}>
          <Grid container spacing={2}>
            {/* <WrappedComponent {...props} devices={devices} /> */}
            {overview.devices.map((element, index) => (
              <Grid item key={index} xs={12} md={6} xl={4}>
                <Device
                  item={element}
                  aps={props.aps}
                  // actions={[handleOpen]} //, handleRollback]}
                  auth={isAllowed(props.user, [ACTIONS || ENTRY])}
                  action={() => handleOperationId(element.a.id)}
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
            auth={isAllowed(props.user, [ACTIONS || EXIT])}
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
      <Message
        open={openMessage}
        response={response}
        handleClose={handleCloseMessage}
      />
    </Layout>
  );
}
