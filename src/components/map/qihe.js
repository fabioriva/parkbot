import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Map = ({ levels, occupancy, view }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={8}>
        <Box sx={{ mb: 1, mx: { xs: 2, md: 0 }, overflow: 'scroll' }}>
          {levels[4]}
          {levels[3]}
          {levels[2]}
          {levels[1]}
          {levels[0]}
        </Box>
        <Box sx={{ mx: { xs: 2, md: 0 } }}>{view}</Box>
      </Grid>
      <Grid item xs={12} md={4}>
        {occupancy}
      </Grid>
      <style jsx global>
        {`
          .l {
            position: relative;
            background-color: rgb(234, 238, 243);
            border: 1px solid rgba(0, 0, 0, 0.26);
            margin-bottom: 14px;
            height: 100px;
            width: 620px;
            /* box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
              rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px; */
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
          #el-1 {
            top: 33px;
            left: 2px;
          }
          #el-2 {
            top: 33px;
            left: 576px;
          }
          #s-1 {
            top: 66px;
            left: 2px;
          }
          #s-2 {
            top: 2px;
            left: 2px;
          }
          #s-3 {
            top: 66px;
            left: 43px;
          }
          #s-4 {
            top: 2px;
            left: 43px;
          }
          #s-5 {
            top: 66px;
            left: 84px;
          }
          #s-6 {
            top: 2px;
            left: 84px;
          }
          #s-7 {
            top: 66px;
            left: 125px;
          }
          #s-8 {
            top: 2px;
            left: 125px;
          }
          #s-9 {
            top: 66px;
            left: 166px;
          }
          #s-10 {
            top: 2px;
            left: 166px;
          }
          #s-11 {
            top: 66px;
            left: 207px;
          }
          #s-12 {
            top: 2px;
            left: 248px;
          }
          #s-13 {
            top: 66px;
            left: 248px;
          }
          #s-14 {
            top: 2px;
            left: 289px;
          }
          #s-15 {
            top: 66px;
            left: 289px;
          }
          #s-16 {
            top: 2px;
            left: 330px;
          }
          #s-17 {
            top: 66px;
            left: 330px;
          }
          #s-18 {
            top: 2px;
            left: 371px;
          }
          #s-19 {
            top: 66px;
            left: 371px;
          }
          #s-20 {
            top: 2px;
            left: 412px;
          }
          #s-21 {
            top: 66px;
            left: 412px;
          }
          #s-22 {
            top: 2px;
            left: 453px;
          }
          #s-23 {
            top: 66px;
            left: 453px;
          }
          #s-24 {
            top: 2px;
            left: 494px;
          }
          #s-25 {
            top: 66px;
            left: 494px;
          }
          #s-26 {
            top: 2px;
            left: 535px;
          }
          #s-27 {
            top: 66px;
            left: 535px;
          }
          #s-28 {
            top: 2px;
            left: 576px;
          }
          #s-29 {
            top: 66px;
            left: 576px;
          }
          /* Level +2 */
          #el-1 {
            top: 33px;
            left: 2px;
          }
          #el-2 {
            top: 33px;
            left: 576px;
          }
          #s-30 {
            top: 66px;
            left: 2px;
          }
          #s-31 {
            top: 2px;
            left: 2px;
          }
          #s-32 {
            top: 66px;
            left: 43px;
          }
          #s-33 {
            top: 2px;
            left: 43px;
          }
          #s-34 {
            top: 66px;
            left: 84px;
          }
          #s-35 {
            top: 2px;
            left: 84px;
          }
          #s-36 {
            top: 66px;
            left: 125px;
          }
          #s-37 {
            top: 2px;
            left: 125px;
          }
          #s-38 {
            top: 66px;
            left: 166px;
          }
          #s-39 {
            top: 2px;
            left: 166px;
          }
          #s-40 {
            top: 66px;
            left: 207px;
          }
          #s-41 {
            top: 2px;
            left: 248px;
          }
          #s-42 {
            top: 66px;
            left: 248px;
          }
          #s-43 {
            top: 2px;
            left: 289px;
          }
          #s-44 {
            top: 66px;
            left: 289px;
          }
          #s-45 {
            top: 2px;
            left: 330px;
          }
          #s-46 {
            top: 66px;
            left: 330px;
          }
          #s-47 {
            top: 2px;
            left: 371px;
          }
          #s-48 {
            top: 66px;
            left: 371px;
          }
          #s-49 {
            top: 2px;
            left: 412px;
          }
          #s-50 {
            top: 66px;
            left: 412px;
          }
          #s-51 {
            top: 2px;
            left: 453px;
          }
          #s-52 {
            top: 66px;
            left: 453px;
          }
          #s-53 {
            top: 2px;
            left: 494px;
          }
          #s-54 {
            top: 66px;
            left: 494px;
          }
          #s-55 {
            top: 2px;
            left: 535px;
          }
          #s-56 {
            top: 66px;
            left: 535px;
          }
          #s-57 {
            top: 2px;
            left: 576px;
          }
          #s-58 {
            top: 66px;
            left: 576px;
          }
          /* Level +3 */
          #el-1 {
            top: 33px;
            left: 2px;
          }
          #el-2 {
            top: 33px;
            left: 576px;
          }
          #s-59 {
            top: 66px;
            left: 2px;
          }
          #s-60 {
            top: 2px;
            left: 2px;
          }
          #s-61 {
            top: 66px;
            left: 43px;
          }
          #s-62 {
            top: 2px;
            left: 43px;
          }
          #s-63 {
            top: 66px;
            left: 84px;
          }
          #s-64 {
            top: 2px;
            left: 84px;
          }
          #s-65 {
            top: 66px;
            left: 125px;
          }
          #s-66 {
            top: 2px;
            left: 125px;
          }
          #s-67 {
            top: 66px;
            left: 166px;
          }
          #s-68 {
            top: 2px;
            left: 166px;
          }
          #s-69 {
            top: 66px;
            left: 207px;
          }
          #s-70 {
            top: 2px;
            left: 248px;
          }
          #s-71 {
            top: 66px;
            left: 248px;
          }
          #s-72 {
            top: 2px;
            left: 289px;
          }
          #s-73 {
            top: 66px;
            left: 289px;
          }
          #s-74 {
            top: 2px;
            left: 330px;
          }
          #s-75 {
            top: 66px;
            left: 330px;
          }
          #s-76 {
            top: 2px;
            left: 371px;
          }
          #s-77 {
            top: 66px;
            left: 371px;
          }
          #s-78 {
            top: 2px;
            left: 412px;
          }
          #s-79 {
            top: 66px;
            left: 412px;
          }
          #s-80 {
            top: 2px;
            left: 453px;
          }
          #s-81 {
            top: 66px;
            left: 453px;
          }
          #s-82 {
            top: 2px;
            left: 494px;
          }
          #s-83 {
            top: 66px;
            left: 494px;
          }
          #s-84 {
            top: 2px;
            left: 535px;
          }
          #s-85 {
            top: 66px;
            left: 535px;
          }
          #s-86 {
            top: 2px;
            left: 576px;
          }
          #s-87 {
            top: 66px;
            left: 576px;
          }
          /* Level +4 */
          #el-1 {
            top: 33px;
            left: 2px;
          }
          #el-2 {
            top: 33px;
            left: 576px;
          }
          #s-88 {
            top: 66px;
            left: 2px;
          }
          #s-89 {
            top: 2px;
            left: 2px;
          }
          #s-90 {
            top: 66px;
            left: 43px;
          }
          #s-91 {
            top: 2px;
            left: 43px;
          }
          #s-92 {
            top: 66px;
            left: 84px;
          }
          #s-93 {
            top: 2px;
            left: 84px;
          }
          #s-94 {
            top: 66px;
            left: 125px;
          }
          #s-95 {
            top: 2px;
            left: 125px;
          }
          #s-96 {
            top: 66px;
            left: 166px;
          }
          #s-97 {
            top: 2px;
            left: 166px;
          }
          #s-98 {
            top: 66px;
            left: 207px;
          }
          #s-99 {
            top: 2px;
            left: 248px;
          }
          #s-100 {
            top: 66px;
            left: 248px;
          }
          #s-101 {
            top: 2px;
            left: 289px;
          }
          #s-102 {
            top: 66px;
            left: 289px;
          }
          #s-103 {
            top: 2px;
            left: 330px;
          }
          #s-104 {
            top: 66px;
            left: 330px;
          }
          #s-105 {
            top: 2px;
            left: 371px;
          }
          #s-106 {
            top: 66px;
            left: 371px;
          }
          #s-107 {
            top: 2px;
            left: 412px;
          }
          #s-108 {
            top: 66px;
            left: 412px;
          }
          #s-109 {
            top: 2px;
            left: 453px;
          }
          #s-110 {
            top: 66px;
            left: 453px;
          }
          #s-111 {
            top: 2px;
            left: 494px;
          }
          #s-112 {
            top: 66px;
            left: 494px;
          }
          #s-113 {
            top: 2px;
            left: 535px;
          }
          #s-114 {
            top: 66px;
            left: 535px;
          }
          #s-115 {
            top: 2px;
            left: 576px;
          }
          #s-116 {
            top: 66px;
            left: 576px;
          }
          /* Level +5 */
          #el-1 {
            top: 33px;
            left: 2px;
          }
          #el-2 {
            top: 33px;
            left: 576px;
          }
          #s-117 {
            top: 66px;
            left: 2px;
          }
          #s-118 {
            top: 2px;
            left: 2px;
          }
          #s-119 {
            top: 66px;
            left: 43px;
          }
          #s-120 {
            top: 2px;
            left: 43px;
          }
          #s-121 {
            top: 66px;
            left: 84px;
          }
          #s-122 {
            top: 2px;
            left: 84px;
          }
          #s-123 {
            top: 66px;
            left: 125px;
          }
          #s-124 {
            top: 2px;
            left: 125px;
          }
          #s-125 {
            top: 66px;
            left: 166px;
          }
          #s-126 {
            top: 2px;
            left: 166px;
          }
          #s-127 {
            top: 66px;
            left: 207px;
          }
          #s-128 {
            top: 2px;
            left: 248px;
          }
          #s-129 {
            top: 66px;
            left: 248px;
          }
          #s-130 {
            top: 2px;
            left: 289px;
          }
          #s-131 {
            top: 66px;
            left: 289px;
          }
          #s-132 {
            top: 2px;
            left: 330px;
          }
          #s-133 {
            top: 66px;
            left: 330px;
          }
          #s-134 {
            top: 2px;
            left: 371px;
          }
          #s-135 {
            top: 66px;
            left: 371px;
          }
          #s-136 {
            top: 2px;
            left: 412px;
          }
          #s-137 {
            top: 66px;
            left: 412px;
          }
          #s-138 {
            top: 2px;
            left: 453px;
          }
          #s-139 {
            top: 66px;
            left: 453px;
          }
          #s-140 {
            top: 2px;
            left: 494px;
          }
          #s-141 {
            top: 66px;
            left: 494px;
          }
          #s-142 {
            top: 2px;
            left: 535px;
          }
          #s-143 {
            top: 66px;
            left: 535px;
          }
          #s-144 {
            top: 2px;
            left: 576px;
          }
          #s-145 {
            top: 66px;
            left: 576px;
          }
        `}
      </style>
    </Grid>
  )
}

export default Map
