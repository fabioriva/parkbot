import React from "react";
import useTranslation from "next-translate/useTranslation";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Error from "src/components/Error";
import Layout from "src/components/Layout";
import Message from "src/components/Message";
import fetch from "src/lib/fetch";
import authSSR from "src/lib/authSSR";
import { OVERVIEW } from "/src/constants/auth";
import Overview from "src/components/overview/kn";
import withAuthSync from "src/hocs/withAuthSync";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Page = (props) => {
  const { t } = useTranslation("overview");
  // Message
  const [openMessage, setOpenMessage] = React.useState(false);
  const [response, setResponse] = React.useState(null);
  const handleCloseMessage = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenMessage(false);
  };
  // Tabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (props.json.err) return <Error {...props} pageTitle={t("page-title")} />;

  return (
    <Layout {...props} pageTitle={t("page-title")}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Left" {...a11yProps(0)} />
            <Tab label="Right" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Overview {...props} data={props.json.left} side="left" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Overview {...props} data={props.json.right} side="right" />
        </TabPanel>
      </Box>
      <Message
        open={openMessage}
        response={response}
        handleClose={handleCloseMessage}
      />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const hrstart = process.hrtime();

  const props = await authSSR(ctx, "kn", OVERVIEW);
  if (props.notFound || props.redirect) return props;

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/kn/overview`;
  const json = await fetch(url, {
    headers: { Authorization: "Bearer " + props.token },
  });

  const hrend = process.hrtime(hrstart);

  return { props: { ...props, json, executionTime: hrend } };
}

export default withAuthSync(Page);
