import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Map = ({ levels, occupancy, view }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} xl={9}>
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
            background-color: rgb(234, 238, 243);
            border: 1px solid rgba(0, 0, 0, 0.26);
            margin-bottom: 16px;
            height: 100px;
            width: 251px;
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
          /* Level P1 */
          #s-1 {
            top: 2px;
            left: 2px;
          }
          #s-2 {
            top: 66px;
            left: 2px;
          }
          #s-3 {
            top: 2px;
            left: 43px;
          }
          #s-4 {
            top: 66px;
            left: 43px;
          }
          #s-5 {
            top: 2px;
            left: 84px;
          }
          #s-6 {
            top: 66px;
            left: 84px;
          }
          #s-7 {
            top: 2px;
            left: 125px;
          }
          #s-8 {
            top: 66px;
            left: 125px;
          }
          #s-9 {
            top: 2px;
            left: 166px;
          }
          #s-10 {
            top: 66px;
            left: 166px;
          }
          #s-11 {
            top: 2px;
            left: 207px;
          }
          #s-12 {
            top: 66px;
            left: 207px;
          }
          /* Level P2 */
          #s-13 {
            top: 2px;
            left: 2px;
          }
          #s-14 {
            top: 66px;
            left: 2px;
          }
          #s-15 {
            top: 2px;
            left: 43px;
          }
          #s-16 {
            top: 66px;
            left: 43px;
          }
          #s-17 {
            top: 2px;
            left: 84px;
          }
          #s-18 {
            top: 66px;
            left: 84px;
          }
          #s-19 {
            top: 2px;
            left: 125px;
          }
          #s-20 {
            top: 66px;
            left: 125px;
          }
          #s-21 {
            top: 2px;
            left: 166px;
          }
          #s-22 {
            top: 66px;
            left: 166px;
          }
          #s-23 {
            top: 2px;
            left: 207px;
          }
          #s-24 {
            top: 66px;
            left: 207px;
          }
          /* Level P3 */
          #s-25 {
            top: 2px;
            left: 2px;
          }
          #s-26 {
            top: 66px;
            left: 2px;
          }
          #s-27 {
            top: 2px;
            left: 43px;
          }
          #s-28 {
            top: 66px;
            left: 43px;
          }
          #s-29 {
            top: 2px;
            left: 84px;
          }
          #s-30 {
            top: 66px;
            left: 84px;
          }
          #s-31 {
            top: 2px;
            left: 125px;
          }
          #s-32 {
            top: 66px;
            left: 125px;
          }
          #s-33 {
            top: 2px;
            left: 166px;
          }
          #s-34 {
            top: 66px;
            left: 166px;
          }
          #s-35 {
            top: 2px;
            left: 207px;
          }
          #s-36 {
            top: 66px;
            left: 207px;
          }
          /* Level P4 */
          #s-37 {
            top: 2px;
            left: 2px;
          }
          #s-38 {
            top: 66px;
            left: 2px;
          }
          #s-39 {
            top: 2px;
            left: 43px;
          }
          #s-40 {
            top: 66px;
            left: 43px;
          }
          #s-41 {
            top: 2px;
            left: 84px;
          }
          #s-42 {
            top: 66px;
            left: 84px;
          }
          #s-43 {
            top: 2px;
            left: 125px;
          }
          #s-44 {
            top: 66px;
            left: 125px;
          }
          #s-45 {
            top: 2px;
            left: 166px;
          }
          #s-46 {
            top: 66px;
            left: 166px;
          }
          #s-47 {
            top: 2px;
            left: 207px;
          }
          #s-48 {
            top: 66px;
            left: 207px;
          }
          /* Level P5 */
          #s-49 {
            top: 2px;
            left: 2px;
          }
          #s-50 {
            top: 66px;
            left: 2px;
          }
          #s-51 {
            top: 2px;
            left: 43px;
          }
          #s-52 {
            top: 66px;
            left: 43px;
          }
          #s-53 {
            top: 2px;
            left: 84px;
          }
          #s-54 {
            top: 66px;
            left: 84px;
          }
          #s-55 {
            top: 2px;
            left: 125px;
          }
          #s-56 {
            top: 66px;
            left: 125px;
          }
          #s-57 {
            top: 2px;
            left: 166px;
          }
          #s-58 {
            top: 66px;
            left: 166px;
          }
          #s-59 {
            top: 2px;
            left: 207px;
          }
          #s-60 {
            top: 66px;
            left: 207px;
          }
          /* Level P6 */
          #s-61 {
            top: 2px;
            left: 2px;
          }
          #s-62 {
            top: 66px;
            left: 2px;
          }
          #s-63 {
            top: 2px;
            left: 43px;
          }
          #s-64 {
            top: 66px;
            left: 43px;
          }
          #s-65 {
            top: 2px;
            left: 84px;
          }
          #s-66 {
            top: 66px;
            left: 84px;
          }
          #s-67 {
            top: 2px;
            left: 125px;
          }
          #s-68 {
            top: 66px;
            left: 125px;
          }
          #s-69 {
            top: 2px;
            left: 166px;
          }
          #s-70 {
            top: 66px;
            left: 166px;
          }
          #s-71 {
            top: 2px;
            left: 207px;
          }
          #s-72 {
            top: 66px;
            left: 207px;
          }
          /* Level P7 */
          #s-73 {
            top: 2px;
            left: 2px;
          }
          #s-74 {
            top: 66px;
            left: 2px;
          }
          #s-75 {
            top: 2px;
            left: 43px;
          }
          #s-76 {
            top: 66px;
            left: 43px;
          }
          #s-77 {
            top: 2px;
            left: 84px;
          }
          #s-78 {
            top: 66px;
            left: 84px;
          }
          #s-79 {
            top: 2px;
            left: 125px;
          }
          #s-80 {
            top: 66px;
            left: 125px;
          }
          #s-81 {
            top: 2px;
            left: 166px;
          }
          #s-82 {
            top: 66px;
            left: 166px;
          }
          #s-83 {
            top: 2px;
            left: 207px;
          }
          #s-84 {
            top: 66px;
            left: 207px;
          }
          /* Level P8 */
          #s-85 {
            top: 2px;
            left: 2px;
          }
          #s-86 {
            top: 66px;
            left: 2px;
          }
          #s-87 {
            top: 2px;
            left: 43px;
          }
          #s-88 {
            top: 66px;
            left: 43px;
          }
          #s-89 {
            top: 2px;
            left: 84px;
          }
          #s-90 {
            top: 66px;
            left: 84px;
          }
          #s-91 {
            top: 2px;
            left: 125px;
          }
          #s-92 {
            top: 66px;
            left: 125px;
          }
          #s-93 {
            top: 2px;
            left: 166px;
          }
          #s-94 {
            top: 66px;
            left: 166px;
          }
          #s-95 {
            top: 2px;
            left: 207px;
          }
          #s-96 {
            top: 66px;
            left: 207px;
          }
          /* Level P9 */
          #s-97 {
            top: 2px;
            left: 2px;
          }
          #s-98 {
            top: 66px;
            left: 2px;
          }
          #s-99 {
            top: 2px;
            left: 43px;
          }
          #s-100 {
            top: 66px;
            left: 43px;
          }
          #s-101 {
            top: 2px;
            left: 84px;
          }
          #s-102 {
            top: 66px;
            left: 84px;
          }
          #s-103 {
            top: 2px;
            left: 125px;
          }
          #s-104 {
            top: 66px;
            left: 125px;
          }
          #s-105 {
            top: 2px;
            left: 166px;
          }
          #s-106 {
            top: 66px;
            left: 166px;
          }
          #s-107 {
            top: 2px;
            left: 207px;
          }
          #s-108 {
            top: 66px;
            left: 207px;
          }
          /* Level P10 */
          #s-109 {
            top: 2px;
            left: 2px;
          }
          #s-110 {
            top: 66px;
            left: 2px;
          }
          #s-111 {
            top: 2px;
            left: 43px;
          }
          #s-112 {
            top: 66px;
            left: 43px;
          }
          #s-113 {
            top: 2px;
            left: 84px;
          }
          #s-114 {
            top: 66px;
            left: 84px;
          }
          #s-115 {
            top: 2px;
            left: 125px;
          }
          #s-116 {
            top: 66px;
            left: 125px;
          }
          #s-117 {
            top: 2px;
            left: 166px;
          }
          #s-118 {
            top: 66px;
            left: 166px;
          }
          #s-119 {
            top: 2px;
            left: 207px;
          }
          #s-120 {
            top: 66px;
            left: 207px;
          }
          /* Level P11 */
          #s-121 {
            top: 2px;
            left: 2px;
          }
          #s-122 {
            top: 66px;
            left: 2px;
          }
          #s-123 {
            top: 2px;
            left: 43px;
          }
          #s-124 {
            top: 66px;
            left: 43px;
          }
          #s-125 {
            top: 2px;
            left: 84px;
          }
          #s-126 {
            top: 66px;
            left: 84px;
          }
          #s-127 {
            top: 2px;
            left: 125px;
          }
          #s-128 {
            top: 66px;
            left: 125px;
          }
          #s-129 {
            top: 2px;
            left: 166px;
          }
          #s-130 {
            top: 66px;
            left: 166px;
          }
          #s-131 {
            top: 2px;
            left: 207px;
          }
          #s-132 {
            top: 66px;
            left: 207px;
          }
          /* Level P12 */
          #s-133 {
            top: 2px;
            left: 2px;
          }
          #s-134 {
            top: 66px;
            left: 2px;
          }
          #s-135 {
            top: 2px;
            left: 43px;
          }
          #s-136 {
            top: 66px;
            left: 43px;
          }
          #s-137 {
            top: 2px;
            left: 84px;
          }
          #s-138 {
            top: 66px;
            left: 84px;
          }
          #s-139 {
            top: 2px;
            left: 125px;
          }
          #s-140 {
            top: 66px;
            left: 125px;
          }
          #s-141 {
            top: 2px;
            left: 166px;
          }
          #s-142 {
            top: 66px;
            left: 166px;
          }
          #s-143 {
            top: 2px;
            left: 207px;
          }
          #s-144 {
            top: 66px;
            left: 207px;
          }
          /* Level P13 */
          #s-145 {
            top: 2px;
            left: 2px;
          }
          #s-146 {
            top: 66px;
            left: 2px;
          }
          #s-147 {
            top: 2px;
            left: 43px;
          }
          #s-148 {
            top: 66px;
            left: 43px;
          }
          #s-149 {
            top: 2px;
            left: 84px;
          }
          #s-150 {
            top: 66px;
            left: 84px;
          }
          #s-151 {
            top: 2px;
            left: 125px;
          }
          #s-152 {
            top: 66px;
            left: 125px;
          }
          #s-153 {
            top: 2px;
            left: 166px;
          }
          #s-154 {
            top: 66px;
            left: 166px;
          }
          #s-155 {
            top: 2px;
            left: 207px;
          }
          #s-156 {
            top: 66px;
            left: 207px;
          }
          /* Level P14 */
          #s-157 {
            top: 2px;
            left: 2px;
          }
          #s-158 {
            top: 66px;
            left: 2px;
          }
          #s-159 {
            top: 2px;
            left: 43px;
          }
          #s-160 {
            top: 66px;
            left: 43px;
          }
          #s-161 {
            top: 2px;
            left: 84px;
          }
          #s-162 {
            top: 66px;
            left: 84px;
          }
          #s-163 {
            top: 2px;
            left: 125px;
          }
          #s-164 {
            top: 66px;
            left: 125px;
          }
          #s-165 {
            top: 2px;
            left: 166px;
          }
          #s-166 {
            top: 66px;
            left: 166px;
          }
          #s-167 {
            top: 2px;
            left: 207px;
          }
          #s-168 {
            top: 66px;
            left: 207px;
          }
          /* Level P15 */
          #s-169 {
            top: 2px;
            left: 2px;
          }
          #s-170 {
            top: 66px;
            left: 2px;
          }
          #s-171 {
            top: 2px;
            left: 43px;
          }
          #s-172 {
            top: 66px;
            left: 43px;
          }
          #s-173 {
            top: 2px;
            left: 84px;
          }
          #s-174 {
            top: 66px;
            left: 84px;
          }
          #s-175 {
            top: 2px;
            left: 125px;
          }
          #s-176 {
            top: 66px;
            left: 125px;
          }
          #s-177 {
            top: 2px;
            left: 166px;
          }
          #s-178 {
            top: 66px;
            left: 166px;
          }
          #s-179 {
            top: 2px;
            left: 207px;
          }
          #s-180 {
            top: 66px;
            left: 207px;
          }
          /* Level P16 */
          #s-181 {
            top: 2px;
            left: 2px;
          }
          #s-182 {
            top: 66px;
            left: 2px;
          }
          #s-183 {
            top: 2px;
            left: 43px;
          }
          #s-184 {
            top: 66px;
            left: 43px;
          }
          #s-185 {
            top: 2px;
            left: 84px;
          }
          #s-186 {
            top: 66px;
            left: 84px;
          }
          #s-187 {
            top: 2px;
            left: 125px;
          }
          #s-188 {
            top: 66px;
            left: 125px;
          }
          #s-189 {
            top: 2px;
            left: 166px;
          }
          #s-190 {
            top: 66px;
            left: 166px;
          }
          #s-191 {
            top: 2px;
            left: 207px;
          }
          #s-192 {
            top: 66px;
            left: 207px;
          }
          /* Level P17 */
          #s-193 {
            top: 2px;
            left: 2px;
          }
          #s-194 {
            top: 66px;
            left: 2px;
          }
          #s-195 {
            top: 2px;
            left: 43px;
          }
          #s-196 {
            top: 66px;
            left: 43px;
          }
          #s-197 {
            top: 2px;
            left: 84px;
          }
          #s-198 {
            top: 66px;
            left: 84px;
          }
          #s-199 {
            top: 2px;
            left: 125px;
          }
          #s-200 {
            top: 66px;
            left: 125px;
          }
          #s-201 {
            top: 2px;
            left: 166px;
          }
          #s-202 {
            top: 66px;
            left: 166px;
          }
          #s-203 {
            top: 2px;
            left: 207px;
          }
          #s-204 {
            top: 66px;
            left: 207px;
          }
          /* Level P18 */
          #s-205 {
            top: 2px;
            left: 2px;
          }
          #s-206 {
            top: 66px;
            left: 2px;
          }
          #s-207 {
            top: 2px;
            left: 43px;
          }
          #s-208 {
            top: 66px;
            left: 43px;
          }
          #s-209 {
            top: 2px;
            left: 84px;
          }
          #s-210 {
            top: 66px;
            left: 84px;
          }
          #s-211 {
            top: 2px;
            left: 125px;
          }
          #s-212 {
            top: 66px;
            left: 125px;
          }
          #s-213 {
            top: 2px;
            left: 166px;
          }
          #s-214 {
            top: 66px;
            left: 166px;
          }
          #s-215 {
            top: 2px;
            left: 207px;
          }
          #s-216 {
            top: 66px;
            left: 207px;
          }
          /* Level P19 */
          #s-217 {
            top: 2px;
            left: 2px;
          }
          #s-218 {
            top: 66px;
            left: 2px;
          }
          #s-219 {
            top: 2px;
            left: 43px;
          }
          #s-220 {
            top: 66px;
            left: 43px;
          }
          #s-221 {
            top: 2px;
            left: 84px;
          }
          #s-222 {
            top: 66px;
            left: 84px;
          }
          #s-223 {
            top: 2px;
            left: 125px;
          }
          #s-224 {
            top: 66px;
            left: 125px;
          }
          #s-225 {
            top: 2px;
            left: 166px;
          }
          #s-226 {
            top: 66px;
            left: 166px;
          }
          #s-227 {
            top: 2px;
            left: 207px;
          }
          #s-228 {
            top: 66px;
            left: 207px;
          }
          /* Level P20 */
          #s-229 {
            top: 2px;
            left: 2px;
          }
          #s-230 {
            top: 66px;
            left: 2px;
          }
          #s-231 {
            top: 2px;
            left: 43px;
          }
          #s-232 {
            top: 66px;
            left: 43px;
          }
          #s-233 {
            top: 2px;
            left: 84px;
          }
          #s-234 {
            top: 66px;
            left: 84px;
          }
          #s-235 {
            top: 2px;
            left: 125px;
          }
          #s-236 {
            top: 66px;
            left: 125px;
          }
          #s-237 {
            top: 2px;
            left: 166px;
          }
          #s-238 {
            top: 66px;
            left: 166px;
          }
          #s-239 {
            top: 2px;
            left: 207px;
          }
          #s-240 {
            top: 66px;
            left: 207px;
          }
          /* EL1 */
          #el-1 {
            top: 34px;
            left: 2px;
          }
          /* EL2 */
          #el-2 {
            top: 34px;
            left: 207px;
          }
        `}
      </style>
    </Grid>
  )
}

export default Map
