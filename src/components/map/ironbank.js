import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Map = ({ levels, occupancy, view }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} xl={8}>
        <Box sx={{ mb: 1, mx: { xs: 1, md: 0 }, overflow: 'scroll' }}>
          {levels[3]}
          {levels[2]}
          {levels[1]}
          {levels[0]}
        </Box>
        <Box sx={{ mx: { xs: 1, md: 0 } }}>{view}</Box>
      </Grid>
      <Grid item xs={12} xl={4}>
        <Box sx={{ display: { xs: 'none', xl: 'block' } }}>{occupancy}</Box>
      </Grid>
      <style jsx global>
        {`
          .l {
            position: relative;
            background-color: rgb(234, 238, 243);
            border: 1px solid rgba(0, 0, 0, 0.26);
            margin-bottom: 16px;
            height: 132px;
            width: 620px;
            /* box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
              rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px; */
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
          .sh {
            position: absolute;
            background-color: #c0c0c0;
            border: 1px solid #000;
            font-weight: bold;
            height: 30px;
            width: 54px;
            text-align: center;
            vertical-align: middle;
            line-height: 30px;
          }
          /* Level B3 */
          #s-1 {
            top: 66px;
            left: 2px;
          }
          #s-2 {
            top: 2px;
            left: 2px;
          }
          #s-9 {
            top: 66px;
            left: 43px;
          }
          #s-10 {
            top: 2px;
            left: 43px;
          }
          #s-17 {
            top: 66px;
            left: 84px;
          }
          #s-18 {
            top: 2px;
            left: 84px;
          }
          #s-25 {
            top: 66px;
            left: 125px;
          }
          #s-26 {
            top: 2px;
            left: 125px;
          }
          #s-31 {
            top: 66px;
            left: 166px;
          }
          #s-32 {
            top: 2px;
            left: 166px;
          }
          #s-37 {
            top: 66px;
            left: 207px;
          }
          #s-38 {
            top: 2px;
            left: 207px;
          }
          #s-43 {
            top: 98px;
            left: 248px;
          }
          #s-44 {
            top: 66px;
            left: 248px;
          }
          #s-45 {
            top: 2px;
            left: 248px;
          }
          #s-51 {
            top: 98px;
            left: 289px;
          }
          #s-52 {
            top: 66px;
            left: 289px;
          }
          #s-53 {
            top: 2px;
            left: 289px;
          }
          #s-59 {
            top: 98px;
            left: 330px;
          }
          #s-60 {
            top: 66px;
            left: 330px;
          }
          #s-61 {
            top: 2px;
            left: 330px;
          }
          #s-67 {
            top: 98px;
            left: 371px;
          }
          #s-68 {
            top: 66px;
            left: 371px;
          }
          #s-69 {
            top: 2px;
            left: 371px;
          }
          #s-75 {
            top: 98px;
            left: 412px;
          }
          #s-76 {
            top: 66px;
            left: 412px;
          }
          #s-77 {
            top: 2px;
            left: 412px;
          }
          #s-83 {
            top: 98px;
            left: 453px;
          }
          #s-84 {
            top: 66px;
            left: 453px;
          }
          #s-85 {
            top: 2px;
            left: 453px;
          }
          #s-91 {
            top: 98px;
            left: 494px;
          }
          #s-92 {
            top: 66px;
            left: 494px;
          }
          #s-93 {
            top: 2px;
            left: 494px;
          }
          #s-99 {
            top: 98px;
            left: 535px;
          }
          #s-100 {
            top: 66px;
            left: 535px;
          }
          #s-101 {
            top: 2px;
            left: 535px;
          }
          #s-107 {
            top: 98px;
            left: 576px;
          }
          #s-108 {
            top: 66px;
            left: 576px;
          }
          #s-109 {
            top: 2px;
            left: 576px;
          }
          /* Level B2 */
          #s-3 {
            top: 66px;
            left: 2px;
          }
          #s-4 {
            top: 2px;
            left: 2px;
          }
          #s-11 {
            top: 66px;
            left: 43px;
          }
          #s-12 {
            top: 2px;
            left: 43px;
          }
          #s-19 {
            top: 66px;
            left: 84px;
          }
          #s-20 {
            top: 2px;
            left: 84px;
          }
          #s-27 {
            top: 66px;
            left: 125px;
          }
          #s-28 {
            top: 2px;
            left: 125px;
          }
          #s-33 {
            top: 66px;
            left: 166px;
          }
          #s-34 {
            top: 2px;
            left: 166px;
          }
          #s-39 {
            top: 66px;
            left: 207px;
          }
          #s-40 {
            top: 2px;
            left: 207px;
          }
          #s-46 {
            top: 98px;
            left: 248px;
          }
          #s-47 {
            top: 66px;
            left: 248px;
          }
          #s-48 {
            top: 2px;
            left: 248px;
          }
          #s-54 {
            top: 98px;
            left: 289px;
          }
          #s-55 {
            top: 66px;
            left: 289px;
          }
          #s-56 {
            top: 2px;
            left: 289px;
          }
          #s-62 {
            top: 98px;
            left: 330px;
          }
          #s-63 {
            top: 66px;
            left: 330px;
          }
          #s-64 {
            top: 2px;
            left: 330px;
          }
          #s-70 {
            top: 98px;
            left: 371px;
          }
          #s-71 {
            top: 66px;
            left: 371px;
          }
          #s-72 {
            top: 2px;
            left: 371px;
          }
          #s-78 {
            top: 98px;
            left: 412px;
          }
          #s-79 {
            top: 66px;
            left: 412px;
          }
          #s-80 {
            top: 2px;
            left: 412px;
          }
          #s-86 {
            top: 98px;
            left: 453px;
          }
          #s-87 {
            top: 66px;
            left: 453px;
          }
          #s-88 {
            top: 2px;
            left: 453px;
          }
          #s-94 {
            top: 98px;
            left: 494px;
          }
          #s-95 {
            top: 66px;
            left: 494px;
          }
          #s-96 {
            top: 2px;
            left: 494px;
          }
          #s-102 {
            top: 98px;
            left: 535px;
          }
          #s-103 {
            top: 66px;
            left: 535px;
          }
          #s-104 {
            top: 2px;
            left: 535px;
          }
          #s-110 {
            top: 98px;
            left: 576px;
          }
          #s-111 {
            top: 66px;
            left: 576px;
          }
          #s-112 {
            top: 2px;
            left: 576px;
          }
          /* Level B0 */
          #s-5 {
            top: 66px;
            left: 2px;
          }
          #s-6 {
            top: 2px;
            left: 2px;
          }
          #s-13 {
            top: 66px;
            left: 43px;
          }
          #s-14 {
            top: 2px;
            left: 43px;
          }
          #s-21 {
            top: 66px;
            left: 84px;
          }
          #s-22 {
            top: 2px;
            left: 84px;
          }
          #s-29 {
            top: 2px;
            left: 125px;
          }
          #s-35 {
            top: 2px;
            left: 166px;
          }
          #s-41 {
            top: 2px;
            left: 207px;
          }
          #s-49 {
            top: 2px;
            left: 248px;
          }
          #s-57 {
            top: 2px;
            left: 289px;
          }
          #s-65 {
            top: 2px;
            left: 330px;
          }
          #s-73 {
            top: 2px;
            left: 371px;
          }
          #s-81 {
            top: 2px;
            left: 412px;
          }
          #s-89 {
            top: 2px;
            left: 453px;
          }
          #s-97 {
            top: 2px;
            left: 494px;
          }
          #s-105 {
            top: 2px;
            left: 535px;
          }
          #s-113 {
            top: 2px;
            left: 576px;
          }
          /* Level B1 */
          #s-7 {
            top: 66px;
            left: 2px;
          }
          #s-8 {
            top: 2px;
            left: 2px;
          }
          #s-15 {
            top: 66px;
            left: 43px;
          }
          #s-16 {
            top: 2px;
            left: 43px;
          }
          #s-23 {
            top: 66px;
            left: 84px;
          }
          #s-24 {
            top: 2px;
            left: 84px;
          }
          #s-30 {
            top: 2px;
            left: 125px;
          }
          #s-36 {
            top: 2px;
            left: 166px;
          }
          #s-42 {
            top: 2px;
            left: 207px;
          }
          #s-50 {
            top: 2px;
            left: 248px;
          }
          #s-58 {
            top: 2px;
            left: 289px;
          }
          #s-66 {
            top: 2px;
            left: 330px;
          }
          #s-74 {
            top: 2px;
            left: 371px;
          }
          #s-82 {
            top: 2px;
            left: 412px;
          }
          #s-90 {
            top: 2px;
            left: 453px;
          }
          #s-98 {
            top: 2px;
            left: 494px;
          }
          #s-106 {
            top: 2px;
            left: 535px;
          }
          #s-114 {
            top: 2px;
            left: 576px;
          }
          #el-1 {
            top: 34px;
            left: 166px;
          }
          #el-2 {
            top: 34px;
            left: 453px;
          }
          #vg-a {
            top: 66px;
            left: 166px;
          }
          #vg-b {
            top: 66px;
            left: 289px;
          }
          #vg-c {
            top: 66px;
            left: 535px;
          }
        `}
      </style>
    </Grid>
  )
}

export default Map
