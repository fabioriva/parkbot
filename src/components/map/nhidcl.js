import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Map = ({ levels, occupancy, view }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} xl={8}>
        <Grid container spacing={1}>
          {levels.map((level, key) => (
            <Grid item key={key}>
              <Box sx={{ mb: 1, mx: { xs: 2, md: 0 }, overflow: 'hidden' }}>
                {level}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mx: { xs: 2, md: 0 } }}>{view}</Box>
      </Grid>
      <Grid item xs={12} xl={3}>
        <Box sx={{ display: { xs: 'none', xl: 'block' } }}>{occupancy}</Box>
      </Grid>
      <style jsx global>
        {`
          .l {
            position: relative;
            background-color: #ddd;
            /* border: 1px solid #888; */
            margin-bottom: 14px;
            height: 166px;
            width: 169px;
            box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
              rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
          }
          .el {
            position: absolute;
            background-color: #c0c0c0;
            border: 1px solid #000;
            font-weight: bold;
            height: 32px;
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
          /* Level +1 */
          #el-a1 {
            top: 65px;
            left: 2px;
          }
          #el-b1 {
            top: 65px;
            left: 125px;
          }
          #s-1 {
            top: 132px;
            left: 2px;
          }
          #s-2 {
            top: 99px;
            left: 2px;
          }
          #s-3 {
            top: 33px;
            left: 2px;
          }
          #s-4 {
            top: 2px;
            left: 2px;
          }
          #s-5 {
            top: 132px;
            left: 43px;
          }
          #s-6 {
            top: 99px;
            left: 43px;
          }
          #s-7 {
            top: 33px;
            left: 43px;
          }
          #s-8 {
            top: 2px;
            left: 43px;
          }
          #s-9 {
            top: 132px;
            left: 84px;
          }
          #s-10 {
            top: 99px;
            left: 84px;
          }
          #s-11 {
            top: 33px;
            left: 84px;
          }
          #s-12 {
            top: 2px;
            left: 84px;
          }
          #s-13 {
            top: 132px;
            left: 125px;
          }
          #s-14 {
            top: 99px;
            left: 125px;
          }
          #s-15 {
            top: 33px;
            left: 125px;
          }
          #s-16 {
            top: 2px;
            left: 125px;
          }
          /* Level +2 */
          #el-a2 {
            top: 65px;
            left: 2px;
          }
          #el-b2 {
            top: 65px;
            left: 125px;
          }
          #s-17 {
            top: 132px;
            left: 2px;
          }
          #s-18 {
            top: 99px;
            left: 2px;
          }
          #s-19 {
            top: 33px;
            left: 2px;
          }
          #s-20 {
            top: 2px;
            left: 2px;
          }
          #s-21 {
            top: 132px;
            left: 43px;
          }
          #s-22 {
            top: 99px;
            left: 43px;
          }
          #s-23 {
            top: 33px;
            left: 43px;
          }
          #s-24 {
            top: 2px;
            left: 43px;
          }
          #s-25 {
            top: 132px;
            left: 84px;
          }
          #s-26 {
            top: 99px;
            left: 84px;
          }
          #s-27 {
            top: 33px;
            left: 84px;
          }
          #s-28 {
            top: 2px;
            left: 84px;
          }
          #s-29 {
            top: 132px;
            left: 125px;
          }
          #s-30 {
            top: 99px;
            left: 125px;
          }
          #s-31 {
            top: 33px;
            left: 125px;
          }
          #s-32 {
            top: 2px;
            left: 125px;
          }
          /* Level +3 */
          #el-a3 {
            top: 65px;
            left: 2px;
          }
          #el-b3 {
            top: 65px;
            left: 125px;
          }
          #s-33 {
            top: 132px;
            left: 2px;
          }
          #s-34 {
            top: 99px;
            left: 2px;
          }
          #s-35 {
            top: 33px;
            left: 2px;
          }
          #s-36 {
            top: 2px;
            left: 2px;
          }
          #s-37 {
            top: 132px;
            left: 43px;
          }
          #s-38 {
            top: 99px;
            left: 43px;
          }
          #s-39 {
            top: 33px;
            left: 43px;
          }
          #s-40 {
            top: 2px;
            left: 43px;
          }
          #s-41 {
            top: 132px;
            left: 84px;
          }
          #s-42 {
            top: 99px;
            left: 84px;
          }
          #s-43 {
            top: 33px;
            left: 84px;
          }
          #s-44 {
            top: 2px;
            left: 84px;
          }
          #s-45 {
            top: 132px;
            left: 125px;
          }
          #s-46 {
            top: 99px;
            left: 125px;
          }
          #s-47 {
            top: 33px;
            left: 125px;
          }
          #s-48 {
            top: 2px;
            left: 125px;
          }
          /* Level +4 */
          #el-a4 {
            top: 65px;
            left: 2px;
          }
          #el-b4 {
            top: 65px;
            left: 125px;
          }
          #s-49 {
            top: 132px;
            left: 2px;
          }
          #s-50 {
            top: 99px;
            left: 2px;
          }
          #s-51 {
            top: 33px;
            left: 2px;
          }
          #s-52 {
            top: 2px;
            left: 2px;
          }
          #s-53 {
            top: 132px;
            left: 43px;
          }
          #s-54 {
            top: 99px;
            left: 43px;
          }
          #s-55 {
            top: 33px;
            left: 43px;
          }
          #s-56 {
            top: 2px;
            left: 43px;
          }
          #s-57 {
            top: 132px;
            left: 84px;
          }
          #s-58 {
            top: 99px;
            left: 84px;
          }
          #s-59 {
            top: 33px;
            left: 84px;
          }
          #s-60 {
            top: 2px;
            left: 84px;
          }
          #s-61 {
            top: 132px;
            left: 125px;
          }
          #s-62 {
            top: 99px;
            left: 125px;
          }
          #s-63 {
            top: 33px;
            left: 125px;
          }
          #s-64 {
            top: 2px;
            left: 125px;
          }
          /* Level +5 */
          #el-a5 {
            top: 65px;
            left: 2px;
          }
          #el-b5 {
            top: 65px;
            left: 125px;
          }
          #s-65 {
            top: 132px;
            left: 2px;
          }
          #s-66 {
            top: 99px;
            left: 2px;
          }
          #s-67 {
            top: 33px;
            left: 2px;
          }
          #s-68 {
            top: 2px;
            left: 2px;
          }
          #s-69 {
            top: 132px;
            left: 43px;
          }
          #s-70 {
            top: 99px;
            left: 43px;
          }
          #s-71 {
            top: 33px;
            left: 43px;
          }
          #s-72 {
            top: 2px;
            left: 43px;
          }
          #s-73 {
            top: 132px;
            left: 84px;
          }
          #s-74 {
            top: 99px;
            left: 84px;
          }
          #s-75 {
            top: 33px;
            left: 84px;
          }
          #s-76 {
            top: 2px;
            left: 84px;
          }
          #s-77 {
            top: 132px;
            left: 125px;
          }
          #s-78 {
            top: 99px;
            left: 125px;
          }
          #s-79 {
            top: 33px;
            left: 125px;
          }
          #s-80 {
            top: 2px;
            left: 125px;
          }
          /* Level +6 */
          #el-a6 {
            top: 65px;
            left: 2px;
          }
          #el-b6 {
            top: 65px;
            left: 125px;
          }
          #s-81 {
            top: 132px;
            left: 2px;
          }
          #s-82 {
            top: 99px;
            left: 2px;
          }
          #s-83 {
            top: 33px;
            left: 2px;
          }
          #s-84 {
            top: 2px;
            left: 2px;
          }
          #s-85 {
            top: 132px;
            left: 43px;
          }
          #s-86 {
            top: 99px;
            left: 43px;
          }
          #s-87 {
            top: 33px;
            left: 43px;
          }
          #s-88 {
            top: 2px;
            left: 43px;
          }
          #s-89 {
            top: 132px;
            left: 84px;
          }
          #s-90 {
            top: 99px;
            left: 84px;
          }
          #s-91 {
            top: 33px;
            left: 84px;
          }
          #s-92 {
            top: 2px;
            left: 84px;
          }
          #s-93 {
            top: 132px;
            left: 125px;
          }
          #s-94 {
            top: 99px;
            left: 125px;
          }
          #s-95 {
            top: 33px;
            left: 125px;
          }
          #s-96 {
            top: 2px;
            left: 125px;
          }
          /* Level +7 */
          #el-a7 {
            top: 65px;
            left: 2px;
          }
          #el-b7 {
            top: 65px;
            left: 125px;
          }
          #s-97 {
            top: 132px;
            left: 2px;
          }
          #s-98 {
            top: 99px;
            left: 2px;
          }
          #s-99 {
            top: 33px;
            left: 2px;
          }
          #s-100 {
            top: 2px;
            left: 2px;
          }
          #s-101 {
            top: 132px;
            left: 43px;
          }
          #s-102 {
            top: 99px;
            left: 43px;
          }
          #s-103 {
            top: 33px;
            left: 43px;
          }
          #s-104 {
            top: 2px;
            left: 43px;
          }
          #s-105 {
            top: 132px;
            left: 84px;
          }
          #s-106 {
            top: 99px;
            left: 84px;
          }
          #s-107 {
            top: 33px;
            left: 84px;
          }
          #s-108 {
            top: 2px;
            left: 84px;
          }
          #s-109 {
            top: 132px;
            left: 125px;
          }
          #s-110 {
            top: 99px;
            left: 125px;
          }
          #s-111 {
            top: 33px;
            left: 125px;
          }
          #s-112 {
            top: 2px;
            left: 125px;
          }
        `}
      </style>
    </Grid>
  )
}

export default Map
