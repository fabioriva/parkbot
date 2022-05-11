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
            width: 538px;
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
            top: 95px;
            left: 2px;
          }
          /* Level -7 */
          #s-1 {
            top: 126px;
            left: 2px;
          }
          #s-2 {
            top: 64px;
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
            top: 126px;
            left: 43px;
          }
          #s-6 {
            top: 64px;
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
            top: 126px;
            left: 84px;
          }
          #s-10 {
            top: 33px;
            left: 84px;
          }
          #s-11 {
            top: 2px;
            left: 84px;
          }
          #s-12 {
            top: 126px;
            left: 125px;
          }
          #s-13 {
            top: 126px;
            left: 166px;
          }
          #s-14 {
            top: 126px;
            left: 207px;
          }
          #s-15 {
            top: 126px;
            left: 248px;
          }
          #s-16 {
            top: 126px;
            left: 289px;
          }
          #s-17 {
            top: 64px;
            left: 289px;
          }
          #s-18 {
            top: 33px;
            left: 289px;
          }
          #s-19 {
            top: 126px;
            left: 330px;
          }
          #s-20 {
            top: 64px;
            left: 330px;
          }
          #s-21 {
            top: 126px;
            left: 371px;
          }
          #s-22 {
            top: 64px;
            left: 371px;
          }
          #s-23 {
            top: 33px;
            left: 371px;
          }
          #s-24 {
            top: 126px;
            left: 412px;
          }
          #s-25 {
            top: 64px;
            left: 412px;
          }
          #s-26 {
            top: 33px;
            left: 412px;
          }
          #s-27 {
            top: 126px;
            left: 453px;
          }
          #s-28 {
            top: 64px;
            left: 453px;
          }
          #s-29 {
            top: 33px;
            left: 453px;
          }
          #s-30 {
            top: 126px;
            left: 494px;
          }
          #s-31 {
            top: 64px;
            left: 494px;
          }
          #s-32 {
            top: 33px;
            left: 494px;
          }
          #s-33 {
            top: 2px;
            left: 494px;
          }
          /* Level -6 */
          #s-34 {
            top: 126px;
            left: 2px;
          }
          #s-35 {
            top: 64px;
            left: 2px;
          }
          #s-36 {
            top: 33px;
            left: 2px;
          }
          #s-37 {
            top: 2px;
            left: 2px;
          }
          #s-38 {
            top: 126px;
            left: 43px;
          }
          #s-39 {
            top: 64px;
            left: 43px;
          }
          #s-40 {
            top: 33px;
            left: 43px;
          }
          #s-41 {
            top: 2px;
            left: 43px;
          }
          #s-42 {
            top: 126px;
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
            top: 126px;
            left: 125px;
          }
          #s-46 {
            top: 126px;
            left: 166px;
          }
          #s-47 {
            top: 126px;
            left: 207px;
          }
          #s-48 {
            top: 126px;
            left: 248px;
          }
          #s-49 {
            top: 126px;
            left: 289px;
          }
          #s-50 {
            top: 64px;
            left: 289px;
          }
          #s-51 {
            top: 33px;
            left: 289px;
          }
          #s-52 {
            top: 126px;
            left: 330px;
          }
          #s-53 {
            top: 64px;
            left: 330px;
          }
          #s-54 {
            top: 126px;
            left: 371px;
          }
          #s-55 {
            top: 64px;
            left: 371px;
          }
          #s-56 {
            top: 33px;
            left: 371px;
          }
          #s-57 {
            top: 126px;
            left: 412px;
          }
          #s-58 {
            top: 64px;
            left: 412px;
          }
          #s-59 {
            top: 33px;
            left: 412px;
          }
          #s-60 {
            top: 126px;
            left: 453px;
          }
          #s-61 {
            top: 64px;
            left: 453px;
          }
          #s-62 {
            top: 33px;
            left: 453px;
          }
          #s-63 {
            top: 126px;
            left: 494px;
          }
          #s-64 {
            top: 64px;
            left: 494px;
          }
          #s-65 {
            top: 33px;
            left: 494px;
          }
          #s-66 {
            top: 2px;
            left: 494px;
          }
          /* Level -5 */
          #s-67 {
            top: 126px;
            left: 2px;
          }
          #s-68 {
            top: 64px;
            left: 2px;
          }
          #s-69 {
            top: 33px;
            left: 2px;
          }
          #s-70 {
            top: 2px;
            left: 2px;
          }
          #s-71 {
            top: 126px;
            left: 43px;
          }
          #s-72 {
            top: 64px;
            left: 43px;
          }
          #s-73 {
            top: 33px;
            left: 43px;
          }
          #s-74 {
            top: 2px;
            left: 43px;
          }
          #s-75 {
            top: 126px;
            left: 84px;
          }
          #s-76 {
            top: 33px;
            left: 84px;
          }
          #s-77 {
            top: 2px;
            left: 84px;
          }
          #s-78 {
            top: 126px;
            left: 125px;
          }
          #s-79 {
            top: 126px;
            left: 166px;
          }
          #s-80 {
            top: 126px;
            left: 207px;
          }
          #s-81 {
            top: 126px;
            left: 248px;
          }
          #s-82 {
            top: 126px;
            left: 289px;
          }
          #s-83 {
            top: 64px;
            left: 289px;
          }
          #s-84 {
            top: 33px;
            left: 289px;
          }
          #s-85 {
            top: 126px;
            left: 330px;
          }
          #s-86 {
            top: 64px;
            left: 330px;
          }
          #s-87 {
            top: 126px;
            left: 371px;
          }
          #s-88 {
            top: 64px;
            left: 371px;
          }
          #s-89 {
            top: 33px;
            left: 371px;
          }
          #s-90 {
            top: 126px;
            left: 412px;
          }
          #s-91 {
            top: 64px;
            left: 412px;
          }
          #s-92 {
            top: 33px;
            left: 412px;
          }
          #s-93 {
            top: 126px;
            left: 453px;
          }
          #s-94 {
            top: 64px;
            left: 453px;
          }
          #s-95 {
            top: 33px;
            left: 453px;
          }
          #s-96 {
            top: 126px;
            left: 494px;
          }
          #s-97 {
            top: 64px;
            left: 494px;
          }
          #s-98 {
            top: 33px;
            left: 494px;
          }
          #s-99 {
            top: 2px;
            left: 494px;
          }
          /* Level -4 */
          #s-100 {
            top: 126px;
            left: 2px;
          }
          #s-101 {
            top: 64px;
            left: 2px;
          }
          #s-102 {
            top: 33px;
            left: 2px;
          }
          #s-103 {
            top: 2px;
            left: 2px;
          }
          #s-104 {
            top: 126px;
            left: 43px;
          }
          #s-105 {
            top: 64px;
            left: 43px;
          }
          #s-106 {
            top: 33px;
            left: 43px;
          }
          #s-107 {
            top: 2px;
            left: 43px;
          }
          #s-108 {
            top: 126px;
            left: 84px;
          }
          #s-109 {
            top: 33px;
            left: 84px;
          }
          #s-110 {
            top: 2px;
            left: 84px;
          }
          #s-111 {
            top: 126px;
            left: 125px;
          }
          #s-112 {
            top: 126px;
            left: 166px;
          }
          #s-113 {
            top: 126px;
            left: 207px;
          }
          #s-114 {
            top: 126px;
            left: 248px;
          }
          #s-115 {
            top: 126px;
            left: 289px;
          }
          #s-116 {
            top: 64px;
            left: 289px;
          }
          #s-117 {
            top: 33px;
            left: 289px;
          }
          #s-118 {
            top: 64px;
            left: 330px;
          }
          #s-119 {
            top: 126px;
            left: 371px;
          }
          #s-120 {
            top: 64px;
            left: 371px;
          }
          #s-121 {
            top: 33px;
            left: 371px;
          }
          #s-122 {
            top: 126px;
            left: 412px;
          }
          #s-123 {
            top: 64px;
            left: 412px;
          }
          #s-124 {
            top: 33px;
            left: 412px;
          }
          #s-125 {
            top: 126px;
            left: 453px;
          }
          #s-126 {
            top: 64px;
            left: 453px;
          }
          #s-127 {
            top: 33px;
            left: 453px;
          }
          #s-128 {
            top: 126px;
            left: 494px;
          }
          #s-129 {
            top: 64px;
            left: 494px;
          }
          #s-130 {
            top: 33px;
            left: 494px;
          }
          #s-131 {
            top: 2px;
            left: 494px;
          }
          /* Level -3 */
          #s-132 {
            top: 126px;
            left: 2px;
          }
          #s-133 {
            top: 64px;
            left: 2px;
          }
          #s-134 {
            top: 33px;
            left: 2px;
          }
          #s-135 {
            top: 2px;
            left: 2px;
          }
          #s-136 {
            top: 126px;
            left: 43px;
          }
          #s-137 {
            top: 64px;
            left: 43px;
          }
          #s-138 {
            top: 33px;
            left: 43px;
          }
          #s-139 {
            top: 2px;
            left: 43px;
          }
          #s-140 {
            top: 126px;
            left: 84px;
          }
          #s-141 {
            top: 33px;
            left: 84px;
          }
          #s-142 {
            top: 2px;
            left: 84px;
          }
          #s-143 {
            top: 126px;
            left: 125px;
          }
          #s-144 {
            top: 126px;
            left: 166px;
          }
          #s-145 {
            top: 126px;
            left: 207px;
          }
          #s-146 {
            top: 126px;
            left: 248px;
          }
          #s-147 {
            top: 126px;
            left: 289px;
          }
          #s-148 {
            top: 64px;
            left: 289px;
          }
          #s-149 {
            top: 33px;
            left: 289px;
          }
          #s-150 {
            top: 64px;
            left: 330px;
          }
          #s-151 {
            top: 64px;
            left: 371px;
          }
          #s-152 {
            top: 33px;
            left: 371px;
          }
          #s-153 {
            top: 126px;
            left: 412px;
          }
          #s-154 {
            top: 64px;
            left: 412px;
          }
          #s-155 {
            top: 33px;
            left: 412px;
          }
          #s-156 {
            top: 126px;
            left: 453px;
          }
          #s-157 {
            top: 64px;
            left: 453px;
          }
          #s-158 {
            top: 33px;
            left: 453px;
          }
          #s-159 {
            top: 126px;
            left: 494px;
          }
          #s-160 {
            top: 64px;
            left: 494px;
          }
          #s-161 {
            top: 33px;
            left: 494px;
          }
        `}
      </style>
    </Grid>
  )
}

export default Map
