import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Error from "src/components/Error";
// import Header from "src/components/dss/ScreenHeader";
import Navbar from "src/components/dss/Navbar";
// import Occupancy from "src/components/dss/Occupancy";
import Primary from "src/components/dss/Primary";
import Secondary from "src/components/dss/Secondary";
import useSWR from "swr";

const fetcher = (url) => global.fetch(url).then((r) => r.json());

export default function Screen(props) {
  if (props.json.err) return <Error {...props} pageTitle="DSS" />;

  const router = useRouter();
  const { id } = router.query;

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
          {/* <Occupancy aps={props.aps} data={screen} /> */}
          <Navbar aps={props.aps} name={screen.name} title="ENTRY OPERATION" />
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
          .traffic-light-red {
            color: #b81d13;
          }
          .traffic-light-yellow {
            color: #efb700;
          }
          .traffic-light-green {
            color: #008450;
          }
        `}
      </style>
    </>
  );
}
