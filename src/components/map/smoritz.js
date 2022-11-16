import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Map = ({ levels, occupancy, view }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} xl={8}>
        <Box sx={{ mb: 1, mx: { xs: 2, md: 0 }, overflow: "scroll" }}>
          {levels[1]}
          {levels[0]}
        </Box>
        <Box sx={{ mx: { xs: 2, md: 0 } }}>{view}</Box>
      </Grid>
      <Grid item xs={12} xl={4}>
        <Box sx={{ display: { xs: "none", xl: "block" } }}>{occupancy}</Box>
      </Grid>
      <style jsx global>
        {`
          .l {
            position: relative;
            background-color: rgb(234, 238, 243);
            border: 1px solid rgba(0, 0, 0, 0.26);
            margin-bottom: 16px;
            height: 98px;
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
            line-height: 30px;
          }
          #el-l {
            top: 2px;
            left: 2px;
          }
          #s-9 {
            top: 33px;
            left: 2px;
          }
          #s-1 {
            top: 2px;
            left: 43px;
          }
          #s-2 {
            top: 2px;
            left: 84px;
          }
          #s-3 {
            top: 2px;
            left: 125px;
          }
          #s-4 {
            top: 2px;
            left: 166px;
          }
          #s-5 {
            top: 64px;
            left: 43px;
          }
          #s-6 {
            top: 64px;
            left: 84px;
          }
          #s-7 {
            top: 64px;
            left: 125px;
          }
          #s-8 {
            top: 64px;
            left: 166px;
          }
          #s-10 {
            top: 33px;
            left: 207px;
          }
          #el-r {
            top: 2px;
            left: 207px;
          }
        `}
      </style>
    </Grid>
  );
};

export default Map;
