import Link from "next/link";
// import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { useComm } from "src/lib/useWebSocket";

export default function Navbar({ aps, name, title }) {
  const { comm } = useComm(
    `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${aps}/info`
  );

  return (
    <Grid container>
      <Grid item xs={12} sx={{ height: "6vh", lineHeight: "6vh" }}>
        <Grid
          container
          px={6}
          sx={{
            // backgroundColor: "gray", // "#282c34",
            color: "#fff",
            fontSize: "16px",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <Link href={`/${aps}/dss`}>
              <a
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  paddingRight: 16,
                }}
              >
                <FontAwesomeIcon icon={faTv} />
                &nbsp;&nbsp;&nbsp;&nbsp;DSS
              </a>
            </Link>
            SOTEFIN SA
          </Grid>
          <Grid item xs={4}>
            {name}
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "right" }}>
            <Tooltip title={`PLC IS ${comm ? "ONLINE" : "OFFLINE"}`}>
              {comm ? (
                <Chip label="ONLINE" color="success" />
              ) : (
                <Chip label="OFFLINE" color="error" />
              )}
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ height: "14vh", lineHeight: "14vh" }}>
        <Grid container>
          {/* <Grid item xs={4}>
            1
          </Grid> */}
          <Grid item xs={12}>
            {title}
          </Grid>
          {/* <Grid item xs={4}>
            3
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
