import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useComm } from "src/lib/useWebSocket";

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

export default function ScreenHeader({ aps, name }) {
  const { comm } = useComm(
    `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${aps}/info`
  );

  return (
    <Grid container>
      <Grid item xs={4}>
        <Item sx={{ backgroundColor: "#adb5bd", color: "#000" }}>
          SOTEFIN SA
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Link href={`/${aps}/dss`}>
          <a style={{ textDecoration: "none", color: "white" }}>
            <Item sx={{ backgroundColor: "#0d6efd" }}>{name}</Item>
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
  );
}
