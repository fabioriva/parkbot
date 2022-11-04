import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Map = ({ levels, occupancy, view }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} xl={6}>
        <Box sx={{ mb: 1, mx: { xs: 2, md: 0 }, overflow: "scroll" }}>
          {levels[2]}
          {levels[1]}
          {levels[0]}
        </Box>
        <Box sx={{ mx: { xs: 2, md: 0 } }}>{view}</Box>
      </Grid>
      <Grid item xs={12} xl={6}>
        <Box sx={{ display: { xs: "none", xl: "block" } }}>{occupancy}</Box>
      </Grid>
      <style jsx global>
        {`
          .l {
            position: relative;
            background-color: rgb(234, 238, 243);
            border: 1px solid rgba(0, 0, 0, 0.26);
            margin-bottom: 16px;
            height: 188px;
            width: 190px;
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
            top: 78px;
            left: 75px;
          }
          /* P1 */
          #s-1 {
            top: 2px;
            left: 75px;
          }
          #s-2 {
            top: 18px;
            left: 124px;
            transform: rotate(-45deg);
          }
          #s-3 {
            top: 58px;
            left: 144px;
            transform: rotate(-10deg);
          }
          #s-4 {
            top: 98px;
            left: 144px;
            transform: rotate(10deg);
          }
          #s-5 {
            top: 138px;
            left: 124px;
            transform: rotate(45deg);
          }
          #s-6 {
            top: 154px;
            left: 75px;
          }
          #s-7 {
            top: 138px;
            left: 26px;
            transform: rotate(-45deg);
          }
          #s-8 {
            top: 58px;
            left: 4px;
            transform: rotate(10deg);
          }
          #s-9 {
            top: 98px;
            left: 4px;
            transform: rotate(-10deg);
          }
          #s-10 {
            top: 18px;
            left: 26px;
            transform: rotate(45deg);
          }
          /* P2 */
          #s-11 {
            top: 2px;
            left: 75px;
          }
          #s-12 {
            top: 18px;
            left: 124px;
            transform: rotate(-45deg);
          }
          #s-13 {
            top: 58px;
            left: 144px;
            transform: rotate(-10deg);
          }
          #s-14 {
            top: 98px;
            left: 144px;
            transform: rotate(10deg);
          }
          #s-15 {
            top: 138px;
            left: 124px;
            transform: rotate(45deg);
          }
          #s-16 {
            top: 154px;
            left: 75px;
          }
          #s-17 {
            top: 138px;
            left: 26px;
            transform: rotate(-45deg);
          }
          #s-18 {
            top: 58px;
            left: 4px;
            transform: rotate(10deg);
          }
          #s-19 {
            top: 98px;
            left: 4px;
            transform: rotate(-10deg);
          }
          #s-20 {
            top: 18px;
            left: 26px;
            transform: rotate(45deg);
          }
          /* P3 */
          #s-21 {
            top: 2px;
            left: 75px;
          }
          #s-22 {
            top: 18px;
            left: 124px;
            transform: rotate(-45deg);
          }
          #s-23 {
            top: 58px;
            left: 144px;
            transform: rotate(-10deg);
          }
          #s-24 {
            top: 98px;
            left: 144px;
            transform: rotate(10deg);
          }
          #s-25 {
            top: 138px;
            left: 124px;
            transform: rotate(45deg);
          }
          #s-26 {
            top: 154px;
            left: 75px;
          }
          #s-27 {
            top: 138px;
            left: 26px;
            transform: rotate(-45deg);
          }
          #s-28 {
            top: 58px;
            left: 4px;
            transform: rotate(10deg);
          }
          #s-29 {
            top: 98px;
            left: 4px;
            transform: rotate(-10deg);
          }
          #s-30 {
            top: 18px;
            left: 26px;
            transform: rotate(45deg);
          }
        `}
      </style>
    </Grid>
  );
};

export default Map;
