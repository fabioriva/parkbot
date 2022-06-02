import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Error from "src/components/Error";
import Primary from "src/components/dss/Primary";
import Secondary from "src/components/dss/Secondary";
import { useComm } from "src/lib/useWebSocket";
import useSWR from "swr";

const fetcher = (url) => global.fetch(url).then((r) => r.json());

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      my={3}
      mx={3}
      sx={{
        borderRadius: 2,
        fontSize: "3vw",
        fontWeight: "700",
        height: "4vw",
        lineHeight: "4vw",
        verticalAlign: "middle",
        ...sx,
      }}
      {...other}
    />
  );
}

export default function Screen(props) {
  if (props.json.err) return <Error {...props} pageTitle="DSS" />;

  const router = useRouter();
  const { id } = router.query;

  const { comm } = useComm(
    `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/info`
  );

  const [screen, setScreen] = React.useState(props.json);
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/dss/garage/${id}`;
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
          <Grid container>
            <Grid item xs={4}>
              <Item sx={{ backgroundColor: "#adb5bd", color: "#000" }}>
                SOTEFIN SA
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Link href={`/${props.aps}/dss`}>
                <a style={{ textDecoration: "none", color: "white" }}>
                  <Item sx={{ backgroundColor: "#0d6efd" }}>{screen.name}</Item>
                </a>
              </Link>
            </Grid>
            <Grid item xs={4}>
              {comm ? (
                <Item sx={{ backgroundColor: "#198754" }}>ONLINE</Item>
              ) : (
                <Item sx={{ backgroundColor: "#dc3545" }}>OFFLINE</Item>
              )}
            </Grid>
          </Grid>
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
            font-size: 3vw;
            font-weight: bold;
          }
          .screen-main {
            height: 60vh;
            line-height: 60vh;
            vertical-align: middle;
            font-size: 14vw;
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
