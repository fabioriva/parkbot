import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Map = ({ levels, occupancy, view }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} xl={7}>
        <Box sx={{ mb: 1, mx: { xs: 2, md: 0 }, overflow: 'scroll' }}>
          {levels[4]}
          {levels[3]}
          {levels[2]}
          {levels[1]}
          {levels[0]}
        </Box>
        <Box sx={{ mx: { xs: 2, md: 0 } }}>{view}</Box>
      </Grid>
      <Grid item xs={12} xl={5}>
        <Box sx={{ display: { xs: 'none', xl: 'block' } }}>{occupancy}</Box>
      </Grid>
      <style jsx global>
        {`
          .l {
            position: relative;
            background-color: rgb(234, 238, 243);
            border: 1px solid rgba(0, 0, 0, 0.26);
            margin-bottom: 8px;
            height: 160px;
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
            line-height: 29px;
          }
          #el {
            top: 33px;
            left: 2px;
          }
          /* Level -7 */
          #s-1 {
            top: 126px;
            left: 2px;
          }
          #s-2 {
            top: 95px;
            left: 2px;
          }
          #s-3 {
            top: 64px;
            left: 2px;
          }
          #s-4 {
            top: 2px;
            left: 2px;
          }
          #s-5 {
            top: 126px;
            left: 43px;
          }
          #s-6 {
            top: 95px;
            left: 43px;
          }
          #s-7 {
            top: 64px;
            left: 43px;
          }
          #s-8 {
            top: 2px;
            left: 43px;
          }
          #s-9 {
            top: 126px;
            left: 84px;
          }
          #s-10 {
            top: 95px;
            left: 84px;
          }
          #s-11 {
            top: 64px;
            left: 84px;
          }
          #s-12 {
            top: 2px;
            left: 84px;
          }
          #s-13 {
            top: 126px;
            left: 125px;
          }
          #s-14 {
            top: 95px;
            left: 125px;
          }
          #s-15 {
            top: 64px;
            left: 125px;
          }
          #s-16 {
            top: 2px;
            left: 125px;
          }
          #s-17 {
            top: 2px;
            left: 207px;
          }
          /* Level -6 */
          #s-18 {
            top: 126px;
            left: 2px;
          }
          #s-19 {
            top: 95px;
            left: 2px;
          }
          #s-20 {
            top: 64px;
            left: 2px;
          }
          #s-21 {
            top: 2px;
            left: 2px;
          }
          #s-22 {
            top: 126px;
            left: 43px;
          }
          #s-23 {
            top: 95px;
            left: 43px;
          }
          #s-24 {
            top: 64px;
            left: 43px;
          }
          #s-25 {
            top: 2px;
            left: 43px;
          }
          #s-26 {
            top: 126px;
            left: 84px;
          }
          #s-27 {
            top: 95px;
            left: 84px;
          }
          #s-28 {
            top: 64px;
            left: 84px;
          }
          #s-29 {
            top: 2px;
            left: 84px;
          }
          #s-30 {
            top: 126px;
            left: 125px;
          }
          #s-31 {
            top: 95px;
            left: 125px;
          }
          #s-32 {
            top: 64px;
            left: 125px;
          }
          #s-33 {
            top: 2px;
            left: 125px;
          }
          #s-34 {
            top: 2px;
            left: 207px;
          }
          /* Level -5 */
          #s-35 {
            top: 126px;
            left: 2px;
          }
          #s-36 {
            top: 95px;
            left: 2px;
          }
          #s-37 {
            top: 64px;
            left: 2px;
          }
          #s-38 {
            top: 2px;
            left: 2px;
          }
          #s-39 {
            top: 126px;
            left: 43px;
          }
          #s-40 {
            top: 95px;
            left: 43px;
          }
          #s-41 {
            top: 64px;
            left: 43px;
          }
          #s-42 {
            top: 2px;
            left: 43px;
          }
          #s-43 {
            top: 126px;
            left: 84px;
          }
          #s-44 {
            top: 95px;
            left: 84px;
          }
          #s-45 {
            top: 64px;
            left: 84px;
          }
          #s-46 {
            top: 2px;
            left: 84px;
          }
          #s-47 {
            top: 126px;
            left: 125px;
          }
          #s-48 {
            top: 95px;
            left: 125px;
          }
          #s-49 {
            top: 64px;
            left: 125px;
          }
          #s-50 {
            top: 2px;
            left: 125px;
          }
          #s-51 {
            top: 2px;
            left: 207px;
          }
          /* Level -4 */
          #s-52 {
            top: 126px;
            left: 2px;
          }
          #s-53 {
            top: 95px;
            left: 2px;
          }
          #s-54 {
            top: 64px;
            left: 2px;
          }
          #s-55 {
            top: 2px;
            left: 2px;
          }
          #s-56 {
            top: 126px;
            left: 43px;
          }
          #s-57 {
            top: 95px;
            left: 43px;
          }
          #s-58 {
            top: 64px;
            left: 43px;
          }
          #s-59 {
            top: 2px;
            left: 43px;
          }
          #s-60 {
            top: 126px;
            left: 84px;
          }
          #s-61 {
            top: 95px;
            left: 84px;
          }
          #s-62 {
            top: 64px;
            left: 84px;
          }
          #s-63 {
            top: 2px;
            left: 84px;
          }
          #s-64 {
            top: 126px;
            left: 125px;
          }
          #s-65 {
            top: 95px;
            left: 125px;
          }
          #s-66 {
            top: 64px;
            left: 125px;
          }
          #s-67 {
            top: 2px;
            left: 125px;
          }
          #s-68 {
            top: 2px;
            left: 207px;
          }
          /* Level -3 */
          #s-69 {
            top: 126px;
            left: 2px;
          }
          #s-70 {
            top: 95px;
            left: 2px;
          }
          #s-71 {
            top: 64px;
            left: 2px;
          }
          #s-72 {
            top: 126px;
            left: 43px;
          }
          #s-73 {
            top: 95px;
            left: 43px;
          }
          #s-74 {
            top: 64px;
            left: 43px;
          }
          #s-75 {
            top: 126px;
            left: 84px;
          }
          #s-76 {
            top: 95px;
            left: 84px;
          }
          #s-77 {
            top: 64px;
            left: 84px;
          }
          #s-78 {
            top: 126px;
            left: 125px;
          }
          #s-79 {
            top: 95px;
            left: 125px;
          }
          #s-80 {
            top: 64px;
            left: 125px;
          }
          #s-81 {
            top: 2px;
            left: 207px;
          }
         
        `}
      </style>
    </Grid>
  )
}

export default Map
