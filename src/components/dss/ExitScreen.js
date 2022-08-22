import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Error from "src/components/Error";
import Header from "src/components/dss/Navbar";
import Primary from "src/components/dss/ExitPrimary";
import Secondary from "src/components/dss/ExitSecondary";
import useSWR from "swr";
import useTranslation from "next-translate/useTranslation";

const fetcher = (url) => global.fetch(url).then((r) => r.json());

export default function Screen(props) {
  const { t } = useTranslation("dss");

  if (props.json.err) return <Error {...props} pageTitle="DSS" />;

  const [screen, setScreen] = React.useState(props.json);
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/dss/exit`;
  const { data, error } = useSWR(url, fetcher, {
    fallbackData: screen,
    refreshInterval: 1000,
  });

  React.useEffect(() => {
    if (data) setScreen(data);
  }, [data]);

  return (
    <>
      <Container maxWidth={false} className="screen">
        <Box className="screen-header">
          <Header aps={props.aps} name={screen.name} title={t("screen-exit")} />
        </Box>
        <Box className="screen-main">
          <Primary data={data} />
        </Box>
        <Box className="screen-footer">
          <Secondary data={data} />
        </Box>
      </Container>
      <style jsx global>
        {`
          .screen {
            background-color: #282c34;
            color: white;
            text-align: center;
          }
          .screen-header {
            height: 20vh;
            line-height: 20vh;
            vertical-align: middle;
            font-size: 4vw;
            font-weight: bold;
          }
          .screen-main {
            height: 60vh;
            line-height: 60vh;
            vertical-align: middle;
            font-size: 10vw;
            font-weight: bold;
            letter-spacing: 1px;
          }
          .screen-footer {
            height: 20vh;
            line-height: 20vh;
            vertical-align: middle;
            font-size: 6vw;
            font-weight: bold;
            letter-spacing: 2px;
          }
        `}
      </style>
    </>
  );
}
