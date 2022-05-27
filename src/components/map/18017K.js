import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Map = ({ levels, occupancy, view }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} xl={8}>
        <Box sx={{ mb: 1, mx: { xs: 2, md: 0 }, overflow: "scroll" }}>
          {levels[5]}
          {levels[4]}
          {levels[3]}
          {levels[2]}
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
            height: 168px;
            width: 374px;
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
            top: 66px;
            left: 2px;
          }
          /* P1 */
          #s-1 {
            top: 2px;
            left: 2px;
          }
          #s-2 {
            top: 34px;
            left: 2px;
          }
          #s-3 {
            top: 98px;
            left: 2px;
          }
          #s-4 {
            top: 126px;
            left: 2px;
          }
          #s-5 {
            top: 2px;
            left: 43px;
          }
          #s-6 {
            top: 34px;
            left: 43px;
          }
          #s-7 {
            top: 98px;
            left: 43px;
          }
          #s-8 {
            top: 126px;
            left: 43px;
          }
          #s-9 {
            top: 2px;
            left: 84px;
          }
          #s-10 {
            top: 34px;
            left: 84px;
          }
          #s-11 {
            top: 98px;
            left: 84px;
          }
          #s-12 {
            top: 126px;
            left: 84px;
          }
          #s-13 {
            top: 2px;
            left: 125px;
          }
          #s-14 {
            top: 34px;
            left: 125px;
          }
          #s-15 {
            top: 98px;
            left: 125px;
          }
          #s-16 {
            top: 126px;
            left: 125px;
          }
          #s-17 {
            top: 2px;
            left: 166px;
          }
          #s-18 {
            top: 34px;
            left: 166px;
          }
          #s-19 {
            top: 2px;
            left: 207px;
          }
          #s-20 {
            top: 34px;
            left: 207px;
          }
          /* P2 */
          #s-21 {
            top: 2px;
            left: 2px;
          }
          #s-22 {
            top: 34px;
            left: 2px;
          }
          #s-23 {
            top: 98px;
            left: 2px;
          }
          #s-24 {
            top: 126px;
            left: 2px;
          }
          #s-25 {
            top: 2px;
            left: 43px;
          }
          #s-26 {
            top: 34px;
            left: 43px;
          }
          #s-27 {
            top: 98px;
            left: 43px;
          }
          #s-28 {
            top: 126px;
            left: 43px;
          }
          #s-29 {
            top: 2px;
            left: 84px;
          }
          #s-30 {
            top: 34px;
            left: 84px;
          }
          #s-31 {
            top: 98px;
            left: 84px;
          }
          #s-32 {
            top: 126px;
            left: 84px;
          }
          #s-33 {
            top: 2px;
            left: 125px;
          }
          #s-34 {
            top: 34px;
            left: 125px;
          }
          #s-35 {
            top: 98px;
            left: 125px;
          }
          #s-36 {
            top: 126px;
            left: 125px;
          }
          #s-37 {
            top: 2px;
            left: 166px;
          }
          #s-38 {
            top: 34px;
            left: 166px;
          }
          #s-39 {
            top: 2px;
            left: 207px;
          }
          #s-40 {
            top: 34px;
            left: 207px;
          }
          /* P3 */
          #s-41 {
            top: 2px;
            left: 2px;
          }
          #s-42 {
            top: 34px;
            left: 2px;
          }
          #s-43 {
            top: 98px;
            left: 2px;
          }
          #s-44 {
            top: 126px;
            left: 2px;
          }
          #s-45 {
            top: 2px;
            left: 43px;
          }
          #s-46 {
            top: 34px;
            left: 43px;
          }
          #s-47 {
            top: 98px;
            left: 43px;
          }
          #s-48 {
            top: 126px;
            left: 43px;
          }
          #s-49 {
            top: 2px;
            left: 84px;
          }
          #s-50 {
            top: 34px;
            left: 84px;
          }
          #s-51 {
            top: 98px;
            left: 84px;
          }
          #s-52 {
            top: 126px;
            left: 84px;
          }
          #s-53 {
            top: 2px;
            left: 125px;
          }
          #s-54 {
            top: 34px;
            left: 125px;
          }
          #s-55 {
            top: 98px;
            left: 125px;
          }
          #s-56 {
            top: 126px;
            left: 125px;
          }
          #s-57 {
            top: 2px;
            left: 166px;
          }
          #s-58 {
            top: 34px;
            left: 166px;
          }
          #s-59 {
            top: 2px;
            left: 207px;
          }
          #s-60 {
            top: 34px;
            left: 207px;
          }
          /* P4 */
          #s-61 {
            top: 2px;
            left: 2px;
          }
          #s-62 {
            top: 34px;
            left: 2px;
          }
          #s-63 {
            top: 98px;
            left: 2px;
          }
          #s-64 {
            top: 126px;
            left: 2px;
          }
          #s-65 {
            top: 2px;
            left: 43px;
          }
          #s-66 {
            top: 34px;
            left: 43px;
          }
          #s-67 {
            top: 98px;
            left: 43px;
          }
          #s-68 {
            top: 126px;
            left: 43px;
          }
          #s-69 {
            top: 2px;
            left: 84px;
          }
          #s-70 {
            top: 34px;
            left: 84px;
          }
          #s-71 {
            top: 98px;
            left: 84px;
          }
          #s-72 {
            top: 126px;
            left: 84px;
          }
          #s-73 {
            top: 2px;
            left: 125px;
          }
          #s-74 {
            top: 34px;
            left: 125px;
          }
          #s-75 {
            top: 98px;
            left: 125px;
          }
          #s-76 {
            top: 126px;
            left: 125px;
          }
          #s-77 {
            top: 2px;
            left: 166px;
          }
          #s-78 {
            top: 34px;
            left: 166px;
          }
          #s-79 {
            top: 2px;
            left: 207px;
          }
          #s-80 {
            top: 34px;
            left: 207px;
          }
          /* P5 */
          #s-81 {
            top: 2px;
            left: 2px;
          }
          #s-82 {
            top: 34px;
            left: 2px;
          }
          #s-83 {
            top: 98px;
            left: 2px;
          }
          #s-84 {
            top: 126px;
            left: 2px;
          }
          #s-85 {
            top: 2px;
            left: 43px;
          }
          #s-86 {
            top: 34px;
            left: 43px;
          }
          #s-87 {
            top: 98px;
            left: 43px;
          }
          #s-88 {
            top: 126px;
            left: 43px;
          }
          #s-89 {
            top: 2px;
            left: 84px;
          }
          #s-90 {
            top: 34px;
            left: 84px;
          }
          #s-91 {
            top: 98px;
            left: 84px;
          }
          #s-92 {
            top: 126px;
            left: 84px;
          }
          #s-93 {
            top: 2px;
            left: 125px;
          }
          #s-94 {
            top: 34px;
            left: 125px;
          }
          #s-95 {
            top: 98px;
            left: 125px;
          }
          #s-96 {
            top: 126px;
            left: 125px;
          }
          #s-97 {
            top: 2px;
            left: 166px;
          }
          #s-98 {
            top: 34px;
            left: 166px;
          }
          #s-99 {
            top: 2px;
            left: 207px;
          }
          #s-100 {
            top: 34px;
            left: 207px;
          }
          /* P6 */
          #s-101 {
            top: 2px;
            left: 2px;
          }
          #s-102 {
            top: 34px;
            left: 2px;
          }
          #s-103 {
            top: 98px;
            left: 2px;
          }
          #s-104 {
            top: 126px;
            left: 2px;
          }
          #s-105 {
            top: 2px;
            left: 43px;
          }
          #s-106 {
            top: 34px;
            left: 43px;
          }
          #s-107 {
            top: 98px;
            left: 43px;
          }
          #s-108 {
            top: 126px;
            left: 43px;
          }
          #s-109 {
            top: 2px;
            left: 84px;
          }
          #s-110 {
            top: 34px;
            left: 84px;
          }
          #s-111 {
            top: 98px;
            left: 84px;
          }
          #s-112 {
            top: 126px;
            left: 84px;
          }
          #s-113 {
            top: 2px;
            left: 125px;
          }
          #s-114 {
            top: 34px;
            left: 125px;
          }
          #s-115 {
            top: 98px;
            left: 125px;
          }
          #s-116 {
            top: 126px;
            left: 125px;
          }
          #s-117 {
            top: 2px;
            left: 166px;
          }
          #s-118 {
            top: 34px;
            left: 166px;
          }
          #s-119 {
            top: 2px;
            left: 207px;
          }
          #s-120 {
            top: 34px;
            left: 207px;
          }
        `}
      </style>
    </Grid>
  );
};

export default Map;
