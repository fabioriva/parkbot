import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Map = ({ levels, occupancy, view }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} xl={8}>
        <Box sx={{ mb: 1, mx: { xs: 2, md: 0 }, overflow: 'scroll' }}>
          {levels[2]}
          {levels[1]}
          {levels[0]}
        </Box>
        <Box sx={{ mx: { xs: 2, md: 0 } }}>{view}</Box>
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
            height: 129px;
            width: 292px;
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
          /* Level -3 */
          #el-1 {
            top: 33px;
            left: 43px;
          }
          #s-1 {
            top: 2px;
            left: 2px;
          }
          #s-2 {
            top: 64px;
            left: 2px;
          }
          #s-3 {
            top: 2px;
            left: 43px;
          }
          #s-4 {
            top: 64px;
            left: 43px;
          }
          #s-5 {
            top: 96px;
            left: 43px;
          }
          #s-6 {
            top: 2px;
            left: 84px;
          }
          #s-7 {
            top: 2px;
            left: 125px;
          }
          #s-8 {
            top: 2px;
            left: 166px;
          }
          #s-9 {
            top: 2px;
            left: 207px;
          }
          #s-10 {
            top: 64px;
            left: 207px;
          }
          #s-11 {
            top: 96px;
            left: 207px;
          }
          #s-12 {
            top: 2px;
            left: 248px;
          }
          /* Level -2 */
          #el-2 {
            top: 33px;
            left: 43px;
          }
          #s-13 {
            top: 2px;
            left: 2px;
          }
          #s-14 {
            top: 64px;
            left: 2px;
          }
          #s-15 {
            top: 2px;
            left: 43px;
          }
          #s-16 {
            top: 64px;
            left: 43px;
          }
          #s-17 {
            top: 96px;
            left: 43px;
          }
          #s-18 {
            top: 2px;
            left: 84px;
          }
          #s-19 {
            top: 2px;
            left: 125px;
          }
          #s-20 {
            top: 2px;
            left: 166px;
          }
          #s-21 {
            top: 2px;
            left: 207px;
          }
          #s-22 {
            top: 64px;
            left: 207px;
          }
          #s-23 {
            top: 96px;
            left: 207px;
          }
          #s-24 {
            top: 2px;
            left: 248px;
          }
          /* Level -1 */
          #el-3 {
            top: 33px;
            left: 43px;
          }
          #s-25 {
            top: 2px;
            left: 2px;
          }
          #s-26 {
            top: 64px;
            left: 2px;
          }
          #s-27 {
            top: 2px;
            left: 43px;
          }
          #s-28 {
            top: 64px;
            left: 43px;
          }
          #s-29 {
            top: 96px;
            left: 43px;
          }
          #s-30 {
            top: 2px;
            left: 84px;
          }
          #s-31 {
            top: 2px;
            left: 125px;
          }
          #s-32 {
            top: 2px;
            left: 166px;
          }
          #s-33 {
            top: 2px;
            left: 207px;
          }
          #s-34 {
            top: 64px;
            left: 207px;
          }
          #s-35 {
            top: 96px;
            left: 207px;
          }
          #s-36 {
            top: 2px;
            left: 248px;
          }
        `}
      </style>
    </Grid>
  )
}

export default Map
