import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Map = ({ levels, occupancy, view }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={8}>
        {/* <Box sx={{ mb: 1, mx: { xs: 2, md: 0 }, overflow: "scroll" }}>
          {levels}
        </Box> */}
        <Grid
          container
          spacing={1}
          sx={{ mb: 1, mx: { xs: 1, md: 0 }, overflow: "scroll" }}
        >
          {[...levels].map((item, key) => (
            <Grid key={key} item xs={12} md={4}>
              {item}
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mx: { xs: 2, md: 0 } }}>{view}</Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box sx={{ display: { xs: "none", xl: "block" } }}>{occupancy}</Box>
      </Grid>
      <style jsx global>
        {`
          .l {
            position: relative;
            background-color: rgb(234, 238, 243);
            border: 1px solid rgba(0, 0, 0, 0.26);
            margin-bottom: 16px;
            height: 168px;
            width: 251px;
          }
          .el {
            position: absolute;
            background-color: #c0c0c0;
            border: 1px solid #000;
            font-weight: bold;
            height: 30px;
            width: 40px;
            text-align: center;
            vertical-align: middle;
            line-height: 32px;
          }
          #el {
            top: 34px;
            left: 2px;
          }
          /* P1 */
          #s-1 {
            top: 2px;
            left: 2px;
          }
          #s-2 {
            top: 66px;
            left: 2px;
          }
          #s-3 {
            top: 2px;
            left: 43px;
          }
          #s-4 {
            top: 66px;
            left: 43px;
          }
          #s-5 {
            top: 2px;
            left: 84px;
          }
          #s-6 {
            top: 66px;
            left: 84px;
          }
          #s-7 {
            top: 2px;
            left: 125px;
          }
          #s-8 {
            top: 66px;
            left: 125px;
          }
          #s-9 {
            top: 66px;
            left: 166px;
          }
          #s-10 {
            top: 66px;
            left: 207px;
          }
          /* P2 */
          #s-11 {
            top: 2px;
            left: 2px;
          }
          #s-12 {
            top: 66px;
            left: 2px;
          }
          #s-13 {
            top: 2px;
            left: 43px;
          }
          #s-14 {
            top: 66px;
            left: 43px;
          }
          #s-15 {
            top: 2px;
            left: 84px;
          }
          #s-16 {
            top: 66px;
            left: 84px;
          }
          #s-17 {
            top: 2px;
            left: 125px;
          }
          #s-18 {
            top: 66px;
            left: 125px;
          }
          #s-19 {
            top: 66px;
            left: 166px;
          }
          #s-20 {
            top: 66px;
            left: 207px;
          }
          /* P3 */
          #s-21 {
            top: 2px;
            left: 2px;
          }
          #s-22 {
            top: 66px;
            left: 2px;
          }
          #s-23 {
            top: 2px;
            left: 43px;
          }
          #s-24 {
            top: 66px;
            left: 43px;
          }
          #s-25 {
            top: 2px;
            left: 84px;
          }
          #s-26 {
            top: 66px;
            left: 84px;
          }
          #s-27 {
            top: 2px;
            left: 125px;
          }
          #s-28 {
            top: 66px;
            left: 125px;
          }
          /* P4 */
          #s-29 {
            top: 2px;
            left: 2px;
          }
          #s-30 {
            top: 2px;
            left: 43px;
          }
          #s-31 {
            top: 2px;
            left: 84px;
          }
          #s-32 {
            top: 2px;
            left: 125px;
          }
          /* P5 */
          #s-33 {
            top: 2px;
            left: 2px;
          }
          #s-34 {
            top: 66px;
            left: 2px;
          }
          #s-35 {
            top: 2px;
            left: 43px;
          }
          #s-36 {
            top: 66px;
            left: 43px;
          }
          #s-37 {
            top: 2px;
            left: 84px;
          }
          #s-38 {
            top: 66px;
            left: 84px;
          }
          #s-39 {
            top: 2px;
            left: 125px;
          }
          #s-40 {
            top: 66px;
            left: 125px;
          }
          /* P6 */
          #s-41 {
            top: 2px;
            left: 2px;
          }
          #s-42 {
            top: 66px;
            left: 2px;
          }
          #s-43 {
            top: 2px;
            left: 43px;
          }
          #s-44 {
            top: 66px;
            left: 43px;
          }
          #s-45 {
            top: 2px;
            left: 84px;
          }
          #s-46 {
            top: 66px;
            left: 84px;
          }
          #s-47 {
            top: 2px;
            left: 125px;
          }
          #s-48 {
            top: 66px;
            left: 125px;
          }
          /* P7 */
          #s-49 {
            top: 2px;
            left: 2px;
          }
          #s-50 {
            top: 66px;
            left: 2px;
          }
          #s-51 {
            top: 2px;
            left: 43px;
          }
          #s-52 {
            top: 66px;
            left: 43px;
          }
          #s-53 {
            top: 2px;
            left: 84px;
          }
          #s-54 {
            top: 66px;
            left: 84px;
          }
          #s-55 {
            top: 2px;
            left: 125px;
          }
          #s-56 {
            top: 66px;
            left: 125px;
          }
          /* P8 */
          #s-57 {
            top: 2px;
            left: 2px;
          }
          #s-58 {
            top: 66px;
            left: 2px;
          }
          #s-59 {
            top: 2px;
            left: 43px;
          }
          #s-60 {
            top: 66px;
            left: 43px;
          }
          #s-61 {
            top: 2px;
            left: 84px;
          }
          #s-62 {
            top: 66px;
            left: 84px;
          }
          #s-63 {
            top: 2px;
            left: 125px;
          }
          #s-64 {
            top: 66px;
            left: 125px;
          }
          /* P9 */
          #s-65 {
            top: 2px;
            left: 2px;
          }
          #s-66 {
            top: 66px;
            left: 2px;
          }
          #s-67 {
            top: 2px;
            left: 43px;
          }
          #s-68 {
            top: 66px;
            left: 43px;
          }
          #s-69 {
            top: 2px;
            left: 84px;
          }
          #s-70 {
            top: 66px;
            left: 84px;
          }
          #s-71 {
            top: 2px;
            left: 125px;
          }
          #s-72 {
            top: 66px;
            left: 125px;
          }
          /* P10 */
          #s-73 {
            top: 2px;
            left: 2px;
          }
          #s-74 {
            top: 66px;
            left: 2px;
          }
          #s-75 {
            top: 2px;
            left: 43px;
          }
          #s-76 {
            top: 66px;
            left: 43px;
          }
          #s-77 {
            top: 2px;
            left: 84px;
          }
          #s-78 {
            top: 66px;
            left: 84px;
          }
          #s-79 {
            top: 2px;
            left: 125px;
          }
          #s-80 {
            top: 66px;
            left: 125px;
          }
        `}
      </style>
    </Grid>
  );
};

export default Map;
