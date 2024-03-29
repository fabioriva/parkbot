import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Map = ({ levels, occupancy, view }) => {
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} md={8}>
        <Box sx={{ mb: 1, mx: { xs: 1, md: 0 }, overflow: 'scroll' }}>
          {[...levels].reverse()}
        </Box>
        <Box sx={{ mx: { xs: 1, md: 0 } }}>{view}</Box>
      </Grid>
      <Grid item xs={12} md={4}>
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
            width: 784px;
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
          /* Level P1 */
          #s-1 {
            top: 2px;
            left: 2px;
          }
          #s-2 {
            top: 2px;
            left: 43px;
          }
          #s-3 {
            top: 2px;
            left: 84px;
          }
          #s-4 {
            top: 2px;
            left: 166px;
          }
          #s-5 {
            top: 2px;
            left: 207px;
          }
          #s-6 {
            top: 2px;
            left: 248px;
          }
          #s-7 {
            top: 34px;
            left: 43px;
          }
          #s-8 {
            top: 34px;
            left: 84px;
          }
          #s-9 {
            top: 34px;
            left: 166px;
          }
          #s-10 {
            top: 34px;
            left: 207px;
          }
          #s-11 {
            top: 34px;
            left: 248px;
          }
          #s-12 {
            top: 66px;
            left: 43px;
          }
          #s-13 {
            top: 66px;
            left: 84px;
          }
          #s-14 {
            top: 66px;
            left: 166px;
          }
          #s-15 {
            top: 66px;
            left: 207px;
          }
          /* Level P2 */
          #s-39 {
            top: 2px;
            left: 2px;
          }
          #s-40 {
            top: 2px;
            left: 43px;
          }
          #s-41 {
            top: 2px;
            left: 84px;
          }
          #s-42 {
            top: 2px;
            left: 166px;
          }
          #s-43 {
            top: 2px;
            left: 207px;
          }
          #s-44 {
            top: 2px;
            left: 248px;
          }
          #s-45 {
            top: 34px;
            left: 43px;
          }
          #s-46 {
            top: 34px;
            left: 84px;
          }
          #s-47 {
            top: 34px;
            left: 166px;
          }
          #s-48 {
            top: 34px;
            left: 207px;
          }
          #s-49 {
            top: 34px;
            left: 248px;
          }
          #s-50 {
            top: 66px;
            left: 43px;
          }
          #s-51 {
            top: 66px;
            left: 84px;
          }
          #s-52 {
            top: 66px;
            left: 166px;
          }
          #s-53 {
            top: 66px;
            left: 207px;
          }
          /* Level P3 */
          #s-77 {
            top: 2px;
            left: 2px;
          }
          #s-78 {
            top: 2px;
            left: 43px;
          }
          #s-79 {
            top: 2px;
            left: 84px;
          }
          #s-80 {
            top: 2px;
            left: 166px;
          }
          #s-81 {
            top: 2px;
            left: 207px;
          }
          #s-82 {
            top: 2px;
            left: 248px;
          }
          #s-83 {
            top: 34px;
            left: 43px;
          }
          #s-84 {
            top: 34px;
            left: 84px;
          }
          #s-85 {
            top: 34px;
            left: 166px;
          }
          #s-86 {
            top: 34px;
            left: 207px;
          }
          #s-87 {
            top: 34px;
            left: 248px;
          }
          #s-88 {
            top: 66px;
            left: 43px;
          }
          #s-89 {
            top: 66px;
            left: 84px;
          }
          #s-90 {
            top: 66px;
            left: 166px;
          }
          #s-91 {
            top: 66px;
            left: 207px;
          }
          /* Level P4 */
          #s-115 {
            top: 2px;
            left: 2px;
          }
          #s-116 {
            top: 2px;
            left: 43px;
          }
          #s-117 {
            top: 2px;
            left: 84px;
          }
          #s-118 {
            top: 2px;
            left: 166px;
          }
          #s-119 {
            top: 2px;
            left: 207px;
          }
          #s-120 {
            top: 2px;
            left: 248px;
          }
          #s-121 {
            top: 34px;
            left: 43px;
          }
          #s-122 {
            top: 34px;
            left: 84px;
          }
          #s-123 {
            top: 34px;
            left: 166px;
          }
          #s-124 {
            top: 34px;
            left: 207px;
          }
          #s-125 {
            top: 34px;
            left: 248px;
          }
          #s-126 {
            top: 66px;
            left: 43px;
          }
          #s-127 {
            top: 66px;
            left: 84px;
          }
          #s-128 {
            top: 66px;
            left: 166px;
          }
          #s-129 {
            top: 66px;
            left: 207px;
          }
          /* Level P5 */
          #s-153 {
            top: 2px;
            left: 2px;
          }
          #s-154 {
            top: 2px;
            left: 43px;
          }
          #s-155 {
            top: 2px;
            left: 84px;
          }
          #s-156 {
            top: 2px;
            left: 166px;
          }
          #s-157 {
            top: 2px;
            left: 207px;
          }
          #s-158 {
            top: 2px;
            left: 248px;
          }
          #s-159 {
            top: 34px;
            left: 43px;
          }
          #s-160 {
            top: 34px;
            left: 84px;
          }
          #s-161 {
            top: 34px;
            left: 166px;
          }
          #s-162 {
            top: 34px;
            left: 207px;
          }
          #s-163 {
            top: 34px;
            left: 248px;
          }
          #s-164 {
            top: 66px;
            left: 43px;
          }
          #s-165 {
            top: 66px;
            left: 84px;
          }
          #s-166 {
            top: 66px;
            left: 166px;
          }
          #s-167 {
            top: 66px;
            left: 207px;
          }
          /* Level P6 */
          #s-191 {
            top: 2px;
            left: 2px;
          }
          #s-192 {
            top: 2px;
            left: 43px;
          }
          #s-193 {
            top: 2px;
            left: 84px;
          }
          #s-194 {
            top: 2px;
            left: 166px;
          }
          #s-195 {
            top: 2px;
            left: 207px;
          }
          #s-196 {
            top: 2px;
            left: 248px;
          }
          #s-197 {
            top: 34px;
            left: 43px;
          }
          #s-198 {
            top: 34px;
            left: 84px;
          }
          #s-199 {
            top: 34px;
            left: 166px;
          }
          #s-200 {
            top: 34px;
            left: 207px;
          }
          #s-201 {
            top: 34px;
            left: 248px;
          }
          #s-202 {
            top: 66px;
            left: 43px;
          }
          #s-203 {
            top: 66px;
            left: 84px;
          }
          #s-204 {
            top: 66px;
            left: 166px;
          }
          #s-205 {
            top: 66px;
            left: 207px;
          }
          /* Level P7 */
          #s-228 {
            top: 2px;
            left: 2px;
          }
          #s-229 {
            top: 2px;
            left: 43px;
          }
          #s-230 {
            top: 2px;
            left: 84px;
          }
          #s-231 {
            top: 2px;
            left: 166px;
          }
          #s-232 {
            top: 2px;
            left: 207px;
          }
          #s-233 {
            top: 34px;
            left: 43px;
          }
          #s-234 {
            top: 34px;
            left: 84px;
          }
          #s-235 {
            top: 34px;
            left: 166px;
          }
          #s-236 {
            top: 34px;
            left: 207px;
          }
          #s-237 {
            top: 66px;
            left: 43px;
          }
          #s-238 {
            top: 66px;
            left: 84px;
          }
          #s-239 {
            top: 66px;
            left: 166px;
          }
          #s-240 {
            top: 66px;
            left: 207px;
          }
          /* Level P8 */
          #s-256 {
            top: 2px;
            left: 2px;
          }
          #s-257 {
            top: 2px;
            left: 43px;
          }
          #s-258 {
            top: 2px;
            left: 84px;
          }
          #s-259 {
            top: 2px;
            left: 166px;
          }
          #s-260 {
            top: 2px;
            left: 207px;
          }
          #s-261 {
            top: 34px;
            left: 43px;
          }
          #s-262 {
            top: 34px;
            left: 84px;
          }
          #s-263 {
            top: 66px;
            left: 166px;
          }
          #s-264 {
            top: 66px;
            left: 207px;
          }
          /* Transfer stalls */
          #s-271 {
            top: 66px;
            left: 43px;
            border: 2px solid #0000ff;
          }
          #s-272 {
            top: 34px;
            left: 186px;
            border: 2px solid #0000ff;
          }
          /* EVT4 */
          #el-4 {
            top: 2px;
            left: 125px;
          }
          /* Level P1 */
          #s-16 {
            top: 2px;
            left: 330px;
          }
          #s-17 {
            top: 2px;
            left: 371px;
          }
          #s-18 {
            top: 2px;
            left: 453px;
          }
          #s-19 {
            top: 2px;
            left: 494px;
          }
          #s-20 {
            top: 34px;
            left: 330px;
          }
          #s-21 {
            top: 34px;
            left: 371px;
          }
          #s-22 {
            top: 34px;
            left: 453px;
          }
          #s-23 {
            top: 34px;
            left: 494px;
          }
          #s-24 {
            top: 66px;
            left: 371px;
          }
          #s-25 {
            top: 66px;
            left: 453px;
          }
          #s-26 {
            top: 66px;
            left: 494px;
          }
          /* Level P2 */
          #s-54 {
            top: 2px;
            left: 330px;
          }
          #s-55 {
            top: 2px;
            left: 371px;
          }
          #s-56 {
            top: 2px;
            left: 453px;
          }
          #s-57 {
            top: 2px;
            left: 494px;
          }
          #s-58 {
            top: 34px;
            left: 330px;
          }
          #s-59 {
            top: 34px;
            left: 371px;
          }
          #s-60 {
            top: 34px;
            left: 453px;
          }
          #s-61 {
            top: 34px;
            left: 494px;
          }
          #s-62 {
            top: 66px;
            left: 371px;
          }
          #s-63 {
            top: 66px;
            left: 453px;
          }
          #s-64 {
            top: 66px;
            left: 494px;
          }
          /* Level P3 */
          #s-92 {
            top: 2px;
            left: 330px;
          }
          #s-93 {
            top: 2px;
            left: 371px;
          }
          #s-94 {
            top: 2px;
            left: 453px;
          }
          #s-95 {
            top: 2px;
            left: 494px;
          }
          #s-96 {
            top: 34px;
            left: 330px;
          }
          #s-97 {
            top: 34px;
            left: 371px;
          }
          #s-98 {
            top: 34px;
            left: 453px;
          }
          #s-99 {
            top: 34px;
            left: 494px;
          }
          #s-100 {
            top: 66px;
            left: 371px;
          }
          #s-101 {
            top: 66px;
            left: 453px;
          }
          #s-102 {
            top: 66px;
            left: 494px;
          }
          /* Level P4 */
          #s-130 {
            top: 2px;
            left: 330px;
          }
          #s-131 {
            top: 2px;
            left: 371px;
          }
          #s-132 {
            top: 2px;
            left: 453px;
          }
          #s-133 {
            top: 2px;
            left: 494px;
          }
          #s-134 {
            top: 34px;
            left: 330px;
          }
          #s-135 {
            top: 34px;
            left: 371px;
          }
          #s-136 {
            top: 34px;
            left: 453px;
          }
          #s-137 {
            top: 34px;
            left: 494px;
          }
          #s-138 {
            top: 66px;
            left: 371px;
          }
          #s-139 {
            top: 66px;
            left: 453px;
          }
          #s-140 {
            top: 66px;
            left: 494px;
          }
          /* Level P5 */
          #s-168 {
            top: 2px;
            left: 330px;
          }
          #s-169 {
            top: 2px;
            left: 371px;
          }
          #s-170 {
            top: 2px;
            left: 453px;
          }
          #s-171 {
            top: 2px;
            left: 494px;
          }
          #s-172 {
            top: 34px;
            left: 330px;
          }
          #s-173 {
            top: 34px;
            left: 371px;
          }
          #s-174 {
            top: 34px;
            left: 453px;
          }
          #s-175 {
            top: 34px;
            left: 494px;
          }
          #s-176 {
            top: 66px;
            left: 371px;
          }
          #s-177 {
            top: 66px;
            left: 453px;
          }
          #s-178 {
            top: 66px;
            left: 494px;
          }
          /* Level P6 */
          #s-206 {
            top: 2px;
            left: 371px;
          }
          #s-207 {
            top: 2px;
            left: 453px;
          }
          #s-208 {
            top: 2px;
            left: 494px;
          }
          #s-209 {
            top: 34px;
            left: 330px;
          }
          #s-210 {
            top: 34px;
            left: 371px;
          }
          #s-211 {
            top: 34px;
            left: 453px;
          }
          #s-212 {
            top: 34px;
            left: 494px;
          }
          #s-213 {
            top: 66px;
            left: 371px;
          }
          #s-214 {
            top: 66px;
            left: 453px;
          }
          #s-215 {
            top: 66px;
            left: 494px;
          }
          /* Level P7 */
          #s-241 {
            top: 2px;
            left: 371px;
          }
          #s-242 {
            top: 2px;
            left: 453px;
          }
          #s-243 {
            top: 34px;
            left: 371px;
          }
          #s-244 {
            top: 34px;
            left: 453px;
          }
          #s-245 {
            top: 66px;
            left: 371px;
          }
          #s-246 {
            top: 66px;
            left: 453px;
          }
          /* Level P8 */
          #s-265 {
            top: 2px;
            left: 371px;
          }
          #s-266 {
            top: 34px;
            left: 371px;
          }
          #s-267 {
            top: 66px;
            left: 453px;
          }
          /* Transfer stalls */
          #s-273 {
            top: 66px;
            left: 330px;
            border: 2px solid #0000ff;
          }
          #s-274 {
            top: 34px;
            left: 453px;
            border: 2px solid #0000ff;
          }
          /* EVT5 */
          #el-5 {
            top: 2px;
            left: 412px;
          }
          /* Level P1 */
          #s-27 {
            top: 2px;
            left: 576px;
          }
          #s-28 {
            top: 2px;
            left: 617px;
          }
          #s-29 {
            top: 2px;
            left: 699px;
          }
          #s-30 {
            top: 2px;
            left: 740px;
          }
          #s-31 {
            top: 34px;
            left: 576px;
          }
          #s-32 {
            top: 34px;
            left: 617px;
          }
          #s-33 {
            top: 34px;
            left: 699px;
          }
          #s-34 {
            top: 34px;
            left: 740px;
          }
          #s-35 {
            top: 66px;
            left: 576px;
          }
          #s-36 {
            top: 66px;
            left: 617px;
          }
          #s-37 {
            top: 66px;
            left: 699px;
          }
          #s-38 {
            top: 66px;
            left: 740px;
          }
          /* Level P2 */
          #s-65 {
            top: 2px;
            left: 576px;
          }
          #s-66 {
            top: 2px;
            left: 617px;
          }
          #s-67 {
            top: 2px;
            left: 699px;
          }
          #s-68 {
            top: 2px;
            left: 740px;
          }
          #s-69 {
            top: 34px;
            left: 576px;
          }
          #s-70 {
            top: 34px;
            left: 617px;
          }
          #s-71 {
            top: 34px;
            left: 699px;
          }
          #s-72 {
            top: 34px;
            left: 740px;
          }
          #s-73 {
            top: 66px;
            left: 576px;
          }
          #s-74 {
            top: 66px;
            left: 617px;
          }
          #s-75 {
            top: 66px;
            left: 699px;
          }
          #s-76 {
            top: 66px;
            left: 740px;
          }
          /* Level P3 */
          #s-103 {
            top: 2px;
            left: 576px;
          }
          #s-104 {
            top: 2px;
            left: 617px;
          }
          #s-105 {
            top: 2px;
            left: 699px;
          }
          #s-106 {
            top: 2px;
            left: 740px;
          }
          #s-107 {
            top: 34px;
            left: 576px;
          }
          #s-108 {
            top: 34px;
            left: 617px;
          }
          #s-109 {
            top: 34px;
            left: 699px;
          }
          #s-110 {
            top: 34px;
            left: 740px;
          }
          #s-111 {
            top: 66px;
            left: 576px;
          }
          #s-112 {
            top: 66px;
            left: 617px;
          }
          #s-113 {
            top: 66px;
            left: 699px;
          }
          #s-114 {
            top: 66px;
            left: 740px;
          }
          /* Level P4 */
          #s-141 {
            top: 2px;
            left: 576px;
          }
          #s-142 {
            top: 2px;
            left: 617px;
          }
          #s-143 {
            top: 2px;
            left: 699px;
          }
          #s-144 {
            top: 2px;
            left: 740px;
          }
          #s-145 {
            top: 34px;
            left: 576px;
          }
          #s-146 {
            top: 34px;
            left: 617px;
          }
          #s-147 {
            top: 34px;
            left: 699px;
          }
          #s-148 {
            top: 34px;
            left: 740px;
          }
          #s-149 {
            top: 66px;
            left: 576px;
          }
          #s-150 {
            top: 66px;
            left: 617px;
          }
          #s-151 {
            top: 66px;
            left: 699px;
          }
          #s-152 {
            top: 66px;
            left: 740px;
          }
          /* Level P5 */
          #s-179 {
            top: 2px;
            left: 576px;
          }
          #s-180 {
            top: 2px;
            left: 617px;
          }
          #s-181 {
            top: 2px;
            left: 699px;
          }
          #s-182 {
            top: 2px;
            left: 740px;
          }
          #s-183 {
            top: 34px;
            left: 576px;
          }
          #s-184 {
            top: 34px;
            left: 617px;
          }
          #s-185 {
            top: 34px;
            left: 699px;
          }
          #s-186 {
            top: 34px;
            left: 740px;
          }
          #s-187 {
            top: 66px;
            left: 576px;
          }
          #s-188 {
            top: 66px;
            left: 617px;
          }
          #s-189 {
            top: 66px;
            left: 699px;
          }
          #s-190 {
            top: 66px;
            left: 740px;
          }
          /* Level P6 */
          #s-216 {
            top: 2px;
            left: 576px;
          }
          #s-217 {
            top: 2px;
            left: 617px;
          }
          #s-218 {
            top: 2px;
            left: 699px;
          }
          #s-219 {
            top: 2px;
            left: 740px;
          }
          #s-220 {
            top: 34px;
            left: 576px;
          }
          #s-221 {
            top: 34px;
            left: 617px;
          }
          #s-222 {
            top: 34px;
            left: 699px;
          }
          #s-223 {
            top: 34px;
            left: 740px;
          }
          #s-224 {
            top: 66px;
            left: 576px;
          }
          #s-225 {
            top: 66px;
            left: 617px;
          }
          #s-226 {
            top: 66px;
            left: 699px;
          }
          #s-227 {
            top: 66px;
            left: 740px;
          }
          /* Level P7 */
          #s-247 {
            top: 2px;
            left: 576px;
          }
          #s-248 {
            top: 2px;
            left: 617px;
          }
          #s-249 {
            top: 2px;
            left: 699px;
          }
          #s-250 {
            top: 34px;
            left: 576px;
          }
          #s-251 {
            top: 34px;
            left: 617px;
          }
          #s-252 {
            top: 34px;
            left: 699px;
          }
          #s-253 {
            top: 66px;
            left: 576px;
          }
          #s-254 {
            top: 66px;
            left: 617px;
          }
          #s-255 {
            top: 66px;
            left: 699px;
          }
          /* Level P8 */
          #s-268 {
            top: 2px;
            left: 699px;
          }
          #s-269 {
            top: 66px;
            left: 576px;
          }
          #s-270 {
            top: 66px;
            left: 617px;
          }
          /* Transfer stalls */
          #s-275 {
            top: 34px;
            left: 596px;
            border: 2px solid #0000ff;
          }
          #s-276 {
            top: 34px;
            left: 699px;
            border: 2px solid #0000ff;
          }
          /* EVT6 */
          #el-6 {
            top: 2px;
            left: 658px;
          }
        `}
      </style>
    </Grid>
  )
}

export default Map
