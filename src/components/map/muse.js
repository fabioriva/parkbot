import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Map = ({ levels, occupancy, view }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={8}>
        <Grid
          container
          spacing={1}
          sx={{ mb: 1, mx: { xs: 1, md: 0 }, overflow: 'scroll' }}
        >
          {[...levels].reverse().map((item, key) => (
            <Grid key={key} item xs={12} md={3}>
              {item}
            </Grid>
          ))}
        </Grid>
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
            width: 169px;
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
          #el-3 {
            top: 33px;
            left: 2px;
          }
          #el-4 {
            top: 33px;
            left: 125px;
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
            left: 2px;
          }
          #s-10 {
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
          #s-13 {
            top: 66px;
            left: 84px;
          }
          #s-14 {
            top: 2px;
            left: 84px;
          }
          #s-15 {
            top: 66px;
            left: 125px;
          }
          #s-16 {
            top: 2px;
            left: 125px;
          }
          #s-17 {
            top: 66px;
            left: 2px;
          }
          #s-18 {
            top: 2px;
            left: 2px;
          }
          #s-19 {
            top: 66px;
            left: 43px;
          }
          #s-20 {
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
          #s-23 {
            top: 66px;
            left: 125px;
          }
          #s-24 {
            top: 2px;
            left: 125px;
          }
          #s-25 {
            top: 66px;
            left: 2px;
          }
          #s-26 {
            top: 2px;
            left: 2px;
          }
          #s-27 {
            top: 66px;
            left: 43px;
          }
          #s-28 {
            top: 2px;
            left: 43px;
          }
          #s-29 {
            top: 66px;
            left: 84px;
          }
          #s-30 {
            top: 2px;
            left: 84px;
          }
          #s-31 {
            top: 66px;
            left: 125px;
          }
          #s-32 {
            top: 2px;
            left: 125px;
          }
          #s-33 {
            top: 66px;
            left: 2px;
          }
          #s-34 {
            top: 2px;
            left: 2px;
          }
          #s-35 {
            top: 66px;
            left: 43px;
          }
          #s-36 {
            top: 2px;
            left: 43px;
          }
          #s-37 {
            top: 66px;
            left: 84px;
          }
          #s-38 {
            top: 2px;
            left: 84px;
          }
          #s-39 {
            top: 66px;
            left: 125px;
          }
          #s-40 {
            top: 2px;
            left: 125px;
          }
          #s-41 {
            top: 66px;
            left: 2px;
          }
          #s-42 {
            top: 2px;
            left: 2px;
          }
          #s-43 {
            top: 66px;
            left: 43px;
          }
          #s-44 {
            top: 2px;
            left: 43px;
          }
          #s-45 {
            top: 66px;
            left: 84px;
          }
          #s-46 {
            top: 2px;
            left: 84px;
          }
          #s-47 {
            top: 66px;
            left: 125px;
          }
          #s-48 {
            top: 2px;
            left: 125px;
          }
          #s-49 {
            top: 66px;
            left: 2px;
          }
          #s-50 {
            top: 2px;
            left: 2px;
          }
          #s-51 {
            top: 66px;
            left: 43px;
          }
          #s-52 {
            top: 2px;
            left: 43px;
          }
          #s-53 {
            top: 66px;
            left: 84px;
          }
          #s-54 {
            top: 2px;
            left: 84px;
          }
          #s-55 {
            top: 66px;
            left: 125px;
          }
          #s-56 {
            top: 2px;
            left: 125px;
          }
          #s-57 {
            top: 66px;
            left: 2px;
          }
          #s-58 {
            top: 2px;
            left: 2px;
          }
          #s-59 {
            top: 66px;
            left: 43px;
          }
          #s-60 {
            top: 2px;
            left: 43px;
          }
          #s-61 {
            top: 66px;
            left: 84px;
          }
          #s-62 {
            top: 2px;
            left: 84px;
          }
          #s-63 {
            top: 66px;
            left: 125px;
          }
          #s-64 {
            top: 2px;
            left: 125px;
          }
          #s-65 {
            top: 66px;
            left: 2px;
          }
          #s-66 {
            top: 2px;
            left: 2px;
          }
          #s-67 {
            top: 66px;
            left: 43px;
          }
          #s-68 {
            top: 2px;
            left: 43px;
          }
          #s-69 {
            top: 66px;
            left: 84px;
          }
          #s-70 {
            top: 2px;
            left: 84px;
          }
          #s-71 {
            top: 66px;
            left: 125px;
          }
          #s-72 {
            top: 2px;
            left: 125px;
          }
          #s-73 {
            top: 66px;
            left: 2px;
          }
          #s-74 {
            top: 2px;
            left: 2px;
          }
          #s-75 {
            top: 66px;
            left: 43px;
          }
          #s-76 {
            top: 2px;
            left: 43px;
          }
          #s-77 {
            top: 66px;
            left: 84px;
          }
          #s-78 {
            top: 2px;
            left: 84px;
          }
          #s-79 {
            top: 66px;
            left: 125px;
          }
          #s-80 {
            top: 2px;
            left: 125px;
          }
          #s-81 {
            top: 66px;
            left: 2px;
          }
          #s-82 {
            top: 2px;
            left: 2px;
          }
          #s-83 {
            top: 66px;
            left: 43px;
          }
          #s-84 {
            top: 2px;
            left: 43px;
          }
          #s-85 {
            top: 66px;
            left: 84px;
          }
          #s-86 {
            top: 2px;
            left: 84px;
          }
          #s-87 {
            top: 66px;
            left: 125px;
          }
          #s-88 {
            top: 2px;
            left: 125px;
          }
          #s-89 {
            top: 66px;
            left: 2px;
          }
          #s-90 {
            top: 2px;
            left: 2px;
          }
          #s-91 {
            top: 66px;
            left: 43px;
          }
          #s-92 {
            top: 2px;
            left: 43px;
          }
          #s-93 {
            top: 66px;
            left: 84px;
          }
          #s-94 {
            top: 2px;
            left: 84px;
          }
          #s-95 {
            top: 66px;
            left: 125px;
          }
          #s-96 {
            top: 2px;
            left: 125px;
          }
          #s-97 {
            top: 66px;
            left: 2px;
          }
          #s-98 {
            top: 2px;
            left: 2px;
          }
          #s-99 {
            top: 66px;
            left: 43px;
          }
          #s-100 {
            top: 2px;
            left: 43px;
          }
          #s-101 {
            top: 66px;
            left: 84px;
          }
          #s-102 {
            top: 2px;
            left: 84px;
          }
          #s-103 {
            top: 66px;
            left: 125px;
          }
          #s-104 {
            top: 2px;
            left: 125px;
          }
          #s-105 {
            top: 66px;
            left: 2px;
          }
          #s-106 {
            top: 2px;
            left: 2px;
          }
          #s-107 {
            top: 66px;
            left: 43px;
          }
          #s-108 {
            top: 2px;
            left: 43px;
          }
          #s-109 {
            top: 66px;
            left: 84px;
          }
          #s-110 {
            top: 2px;
            left: 84px;
          }
          #s-111 {
            top: 66px;
            left: 125px;
          }
          #s-112 {
            top: 2px;
            left: 125px;
          }
          #s-113 {
            top: 66px;
            left: 2px;
          }
          #s-114 {
            top: 2px;
            left: 2px;
          }
          #s-115 {
            top: 66px;
            left: 43px;
          }
          #s-116 {
            top: 2px;
            left: 43px;
          }
          #s-117 {
            top: 66px;
            left: 84px;
          }
          #s-118 {
            top: 2px;
            left: 84px;
          }
          #s-119 {
            top: 66px;
            left: 125px;
          }
          #s-120 {
            top: 2px;
            left: 125px;
          }
          #s-121 {
            top: 66px;
            left: 2px;
          }
          #s-122 {
            top: 2px;
            left: 2px;
          }
          #s-123 {
            top: 66px;
            left: 43px;
          }
          #s-124 {
            top: 2px;
            left: 43px;
          }
          #s-125 {
            top: 66px;
            left: 84px;
          }
          #s-126 {
            top: 2px;
            left: 84px;
          }
          #s-127 {
            top: 66px;
            left: 125px;
          }
          #s-128 {
            top: 2px;
            left: 125px;
          }
          #s-129 {
            top: 66px;
            left: 2px;
          }
          #s-130 {
            top: 2px;
            left: 2px;
          }
          #s-131 {
            top: 66px;
            left: 43px;
          }
          #s-132 {
            top: 2px;
            left: 43px;
          }
          #s-133 {
            top: 66px;
            left: 84px;
          }
          #s-134 {
            top: 2px;
            left: 84px;
          }
          #s-135 {
            top: 66px;
            left: 125px;
          }
          #s-136 {
            top: 2px;
            left: 125px;
          }
          #s-137 {
            top: 66px;
            left: 2px;
          }
          #s-138 {
            top: 2px;
            left: 2px;
          }
          #s-139 {
            top: 66px;
            left: 43px;
          }
          #s-140 {
            top: 2px;
            left: 43px;
          }
          #s-141 {
            top: 66px;
            left: 84px;
          }
          #s-142 {
            top: 2px;
            left: 84px;
          }
          #s-143 {
            top: 66px;
            left: 125px;
          }
          #s-144 {
            top: 2px;
            left: 125px;
          }
          #s-145 {
            top: 66px;
            left: 2px;
          }
          #s-146 {
            top: 2px;
            left: 2px;
          }
          #s-147 {
            top: 66px;
            left: 43px;
          }
          #s-148 {
            top: 2px;
            left: 43px;
          }
          #s-149 {
            top: 66px;
            left: 84px;
          }
          #s-150 {
            top: 2px;
            left: 84px;
          }
          #s-151 {
            top: 66px;
            left: 125px;
          }
          #s-152 {
            top: 2px;
            left: 125px;
          }
          #s-153 {
            top: 66px;
            left: 2px;
          }
          #s-154 {
            top: 2px;
            left: 2px;
          }
          #s-155 {
            top: 66px;
            left: 43px;
          }
          #s-156 {
            top: 2px;
            left: 43px;
          }
          #s-157 {
            top: 66px;
            left: 84px;
          }
          #s-158 {
            top: 2px;
            left: 84px;
          }
          #s-159 {
            top: 66px;
            left: 125px;
          }
          #s-160 {
            top: 2px;
            left: 125px;
          }
          #s-161 {
            top: 66px;
            left: 2px;
          }
          #s-162 {
            top: 2px;
            left: 2px;
          }
          #s-163 {
            top: 66px;
            left: 43px;
          }
          #s-164 {
            top: 2px;
            left: 43px;
          }
          #s-165 {
            top: 66px;
            left: 84px;
          }
          #s-166 {
            top: 2px;
            left: 84px;
          }
          #s-167 {
            top: 66px;
            left: 125px;
          }
          #s-168 {
            top: 2px;
            left: 125px;
          }
          #s-169 {
            top: 66px;
            left: 2px;
          }
          #s-170 {
            top: 2px;
            left: 2px;
          }
          #s-171 {
            top: 66px;
            left: 43px;
          }
          #s-172 {
            top: 2px;
            left: 43px;
          }
          #s-173 {
            top: 66px;
            left: 84px;
          }
          #s-174 {
            top: 2px;
            left: 84px;
          }
          #s-175 {
            top: 66px;
            left: 125px;
          }
          #s-176 {
            top: 2px;
            left: 125px;
          }
          #s-177 {
            top: 66px;
            left: 2px;
          }
          #s-178 {
            top: 2px;
            left: 2px;
          }
          #s-179 {
            top: 66px;
            left: 43px;
          }
          #s-180 {
            top: 2px;
            left: 43px;
          }
          #s-181 {
            top: 66px;
            left: 84px;
          }
          #s-182 {
            top: 2px;
            left: 84px;
          }
          #s-183 {
            top: 66px;
            left: 125px;
          }
          #s-184 {
            top: 2px;
            left: 125px;
          }
          #s-185 {
            top: 66px;
            left: 2px;
          }
          #s-186 {
            top: 2px;
            left: 2px;
          }
          #s-187 {
            top: 66px;
            left: 43px;
          }
          #s-188 {
            top: 2px;
            left: 43px;
          }
          #s-189 {
            top: 66px;
            left: 84px;
          }
          #s-190 {
            top: 2px;
            left: 84px;
          }
          #s-191 {
            top: 66px;
            left: 125px;
          }
          #s-192 {
            top: 2px;
            left: 125px;
          }
          #s-193 {
            top: 66px;
            left: 2px;
          }
          #s-194 {
            top: 2px;
            left: 2px;
          }
          #s-195 {
            top: 66px;
            left: 43px;
          }
          #s-196 {
            top: 2px;
            left: 43px;
          }
          #s-197 {
            top: 66px;
            left: 84px;
          }
          #s-198 {
            top: 2px;
            left: 84px;
          }
          #s-199 {
            top: 66px;
            left: 125px;
          }
          #s-200 {
            top: 2px;
            left: 125px;
          }
          #s-201 {
            top: 66px;
            left: 2px;
          }
          #s-202 {
            top: 2px;
            left: 2px;
          }
          #s-203 {
            top: 66px;
            left: 43px;
          }
          #s-204 {
            top: 2px;
            left: 43px;
          }
          #s-205 {
            top: 66px;
            left: 84px;
          }
          #s-206 {
            top: 2px;
            left: 84px;
          }
          #s-207 {
            top: 66px;
            left: 125px;
          }
          #s-208 {
            top: 2px;
            left: 125px;
          }
        `}
      </style>
    </Grid>
  )
}

export default Map
