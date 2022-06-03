import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";

const Item = ({ label, loading, value }) => (
  <Box sx={{ display: "flex", px: 3 }}>
    <Box sx={{ flexGrow: 1, fontSize: "2.5vw" }}>{label}:</Box>
    <Box sx={{ color: "#198754", fontSize: "6vw" }}>
      {loading ? (
        <Skeleton variant="text" animation="wave" width="80%" />
      ) : (
        value
      )}
    </Box>
  </Box>
);

export default function Occupancy({ aps, data }) {
  console.log(data.occupancy);
  return (
    <Grid container style={{ textAlign: "left" }}>
      <Grid item xs={2}>
        <Link href={`/${aps}/dss`}>
          <a style={{ textDecoration: "none", color: "white" }}>
            <FontAwesomeIcon icon={faTv} />
          </a>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Item
          label="FREE SPACES"
          loading={false}
          value={data.occupancy[0].free}
        />
      </Grid>
      <Grid item xs={3}>
        <Item label="SEDAN" loading={false} value={data.occupancy[2].free} />
      </Grid>
      <Grid item xs={3}>
        <Item label="SUV" loading={false} value={data.occupancy[1].free} />
      </Grid>
    </Grid>
  );
}
