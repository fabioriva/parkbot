// material-ui
import Grid from '@material-ui/core/Grid'

const Map = ({ levels, occupancy, view }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} xl={9}>
        {levels[2]}
        {levels[1]}
        {levels[0]}
        {view}
      </Grid>
      <Grid item xs={12} xl={3}>
        {occupancy}
      </Grid>

      <style jsx global>
        {`
          .l {
            position: relative;
            background-color: #f0f0f0;
            border: 1px solid #888;
            margin-bottom: 14px;
            height: 128px;
            width: 1193px;
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
          /* El */
          #el-1 {
            top: 64px;
            left: 535px;
          }
          #el-2 {
            top: 64px;
            left: 658px;
          }
          #el-3 {
            top: 64px;
            left: 904px;
          }
          /* Level 1 */
          #s-1 {
            top: 64px;
            left: 2px;
          }
          #s-2 {
            top: 2px;
            left: 2px;
          }
          #s-3 {
            top: 64px;
            left: 43px;
          }
          #s-4 {
            top: 2px;
            left: 43px;
          }
          #s-5 {
            top: 95px;
            left: 84px;
          }
          #s-6 {
            top: 64px;
            left: 84px;
          }
          #s-7 {
            top: 2px;
            left: 84px;
          }
          #s-8 {
            top: 95px;
            left: 125px;
          }
          #s-9 {
            top: 64px;
            left: 125px;
          }
          #s-10 {
            top: 2px;
            left: 125px;
          }
          #s-11 {
            top: 95px;
            left: 166px;
          }
          #s-12 {
            top: 64px;
            left: 166px;
          }
          #s-13 {
            top: 2px;
            left: 166px;
          }
          #s-14 {
            top: 95px;
            left: 207px;
          }
          #s-15 {
            top: 64px;
            left: 207px;
          }
          #s-16 {
            top: 2px;
            left: 207px;
          }
          #s-17 {
            top: 95px;
            left: 248px;
          }
          #s-18 {
            top: 64px;
            left: 248px;
          }
          #s-19 {
            top: 2px;
            left: 248px;
          }
          #s-20 {
            top: 95px;
            left: 289px;
          }
          #s-21 {
            top: 64px;
            left: 289px;
          }
          #s-22 {
            top: 2px;
            left: 289px;
          }
          #s-23 {
            top: 95px;
            left: 330px;
          }
          #s-24 {
            top: 64px;
            left: 330px;
          }
          #s-25 {
            top: 2px;
            left: 330px;
          }
          #s-26 {
            top: 95px;
            left: 371px;
          }
          #s-27 {
            top: 64px;
            left: 371px;
          }
          #s-28 {
            top: 2px;
            left: 371px;
          }
          #s-29 {
            top: 95px;
            left: 412px;
          }
          #s-30 {
            top: 64px;
            left: 412px;
          }
          #s-31 {
            top: 2px;
            left: 412px;
          }
          #s-32 {
            top: 95px;
            left: 453px;
          }
          #s-33 {
            top: 64px;
            left: 453px;
          }
          #s-34 {
            top: 2px;
            left: 453px;
          }
          #s-35 {
            top: 95px;
            left: 494px;
          }
          #s-36 {
            top: 64px;
            left: 494px;
          }
          #s-37 {
            top: 2px;
            left: 494px;
          }
          #s-38 {
            top: 95px;
            left: 535px;
          }
          #s-39 {
            top: 64px;
            left: 535px;
          }
          #s-40 {
            top: 2px;
            left: 535px;
          }
          #s-41 {
            top: 95px;
            left: 576px;
          }
          #s-42 {
            top: 64px;
            left: 576px;
          }
          #s-43 {
            top: 2px;
            left: 576px;
          }
          #s-44 {
            top: 95px;
            left: 617px;
          }
          #s-45 {
            top: 64px;
            left: 617px;
          }
          #s-46 {
            top: 2px;
            left: 617px;
          }
          #s-47 {
            top: 95px;
            left: 658px;
          }
          #s-48 {
            top: 64px;
            left: 658px;
          }
          #s-49 {
            top: 2px;
            left: 658px;
          }
          #s-50 {
            top: 2px;
            left: 699px;
          }
          #s-51 {
            top: 95px;
            left: 740px;
          }
          #s-52 {
            top: 2px;
            left: 740px;
          }
          #s-53 {
            top: 95px;
            left: 781px;
          }
          #s-54 {
            top: 64px;
            left: 781px;
          }
          #s-55 {
            top: 2px;
            left: 781px;
          }
          #s-56 {
            top: 2px;
            left: 822px;
          }
          #s-57 {
            top: 2px;
            left: 863px;
          }
          #s-58 {
            top: 95px;
            left: 904px;
          }
          #s-59 {
            top: 64px;
            left: 904px;
          }
          #s-60 {
            top: 2px;
            left: 904px;
          }
          #s-61 {
            top: 95px;
            left: 945px;
          }
          #s-62 {
            top: 64px;
            left: 945px;
          }
          #s-63 {
            top: 2px;
            left: 945px;
          }
          #s-64 {
            top: 95px;
            left: 986px;
          }
          #s-65 {
            top: 64px;
            left: 986px;
          }
          #s-66 {
            top: 2px;
            left: 986px;
          }
          #s-67 {
            top: 95px;
            left: 1027px;
          }
          #s-68 {
            top: 64px;
            left: 1027px;
          }
          #s-69 {
            top: 2px;
            left: 1027px;
          }
          #s-70 {
            top: 95px;
            left: 1068px;
          }
          #s-71 {
            top: 64px;
            left: 1068px;
          }
          #s-72 {
            top: 2px;
            left: 1068px;
          }
          #s-73 {
            top: 95px;
            left: 1109px;
          }
          #s-74 {
            top: 64px;
            left: 1109px;
          }
          #s-75 {
            top: 2px;
            left: 1109px;
          }
          #s-76 {
            top: 95px;
            left: 1150px;
          }
          #s-77 {
            top: 64px;
            left: 1150px;
          }
          #s-78 {
            top: 2px;
            left: 1150px;
          }
          /* Level 2 */
          #s-79 {
            top: 64px;
            left: 2px;
          }
          #s-80 {
            top: 2px;
            left: 2px;
          }
          #s-81 {
            top: 64px;
            left: 43px;
          }
          #s-82 {
            top: 2px;
            left: 43px;
          }
          #s-83 {
            top: 95px;
            left: 84px;
          }
          #s-84 {
            top: 64px;
            left: 84px;
          }
          #s-85 {
            top: 2px;
            left: 84px;
          }
          #s-86 {
            top: 95px;
            left: 125px;
          }
          #s-87 {
            top: 64px;
            left: 125px;
          }
          #s-88 {
            top: 2px;
            left: 125px;
          }
          #s-89 {
            top: 95px;
            left: 166px;
          }
          #s-90 {
            top: 64px;
            left: 166px;
          }
          #s-91 {
            top: 2px;
            left: 166px;
          }
          #s-92 {
            top: 95px;
            left: 207px;
          }
          #s-93 {
            top: 64px;
            left: 207px;
          }
          #s-94 {
            top: 2px;
            left: 207px;
          }
          #s-95 {
            top: 95px;
            left: 248px;
          }
          #s-96 {
            top: 64px;
            left: 248px;
          }
          #s-97 {
            top: 2px;
            left: 248px;
          }
          #s-98 {
            top: 95px;
            left: 289px;
          }
          #s-99 {
            top: 64px;
            left: 289px;
          }
          #s-100 {
            top: 2px;
            left: 289px;
          }
          #s-101 {
            top: 95px;
            left: 330px;
          }
          #s-102 {
            top: 64px;
            left: 330px;
          }
          #s-103 {
            top: 2px;
            left: 330px;
          }
          #s-104 {
            top: 95px;
            left: 371px;
          }
          #s-105 {
            top: 64px;
            left: 371px;
          }
          #s-106 {
            top: 2px;
            left: 371px;
          }
          #s-107 {
            top: 95px;
            left: 412px;
          }
          #s-108 {
            top: 64px;
            left: 412px;
          }
          #s-109 {
            top: 2px;
            left: 412px;
          }
          #s-110 {
            top: 95px;
            left: 453px;
          }
          #s-111 {
            top: 64px;
            left: 453px;
          }
          #s-112 {
            top: 2px;
            left: 453px;
          }
          #s-113 {
            top: 95px;
            left: 494px;
          }
          #s-114 {
            top: 64px;
            left: 494px;
          }
          #s-115 {
            top: 2px;
            left: 494px;
          }
          #s-116 {
            top: 2px;
            left: 535px;
          }
          #s-117 {
            top: 2px;
            left: 576px;
          }
          #s-118 {
            top: 2px;
            left: 617px;
          }
          #s-119 {
            top: 2px;
            left: 658px;
          }
          #s-120 {
            top: 2px;
            left: 699px;
          }
          #s-121 {
            top: 2px;
            left: 740px;
          }
          #s-122 {
            top: 95px;
            left: 781px;
          }
          #s-123 {
            top: 64px;
            left: 781px;
          }
          #s-124 {
            top: 2px;
            left: 781px;
          }
          #s-125 {
            top: 2px;
            left: 822px;
          }
          #s-126 {
            top: 64px;
            left: 863px;
          }
          #s-127 {
            top: 2px;
            left: 863px;
          }
          #s-128 {
            top: 2px;
            left: 904px;
          }
          #s-129 {
            top: 2px;
            left: 945px;
          }
          #s-130 {
            top: 95px;
            left: 986px;
          }
          #s-131 {
            top: 64px;
            left: 986px;
          }
          #s-132 {
            top: 2px;
            left: 986px;
          }
          #s-133 {
            top: 95px;
            left: 1027px;
          }
          #s-134 {
            top: 64px;
            left: 1027px;
          }
          #s-135 {
            top: 2px;
            left: 1027px;
          }
          #s-136 {
            top: 95px;
            left: 1068px;
          }
          #s-137 {
            top: 64px;
            left: 1068px;
          }
          #s-138 {
            top: 2px;
            left: 1068px;
          }
          #s-139 {
            top: 95px;
            left: 1109px;
          }
          #s-140 {
            top: 64px;
            left: 1109px;
          }
          #s-141 {
            top: 2px;
            left: 1109px;
          }
          #s-142 {
            top: 95px;
            left: 1150px;
          }
          #s-143 {
            top: 64px;
            left: 1150px;
          }
          #s-144 {
            top: 2px;
            left: 1150px;
          }
          /* Level 3 */
          #s-145 {
            top: 64px;
            left: 2px;
          }
          #s-146 {
            top: 2px;
            left: 2px;
          }
          #s-147 {
            top: 64px;
            left: 43px;
          }
          #s-148 {
            top: 2px;
            left: 43px;
          }
          #s-149 {
            top: 95px;
            left: 84px;
          }
          #s-150 {
            top: 64px;
            left: 84px;
          }
          #s-151 {
            top: 2px;
            left: 84px;
          }
          #s-152 {
            top: 95px;
            left: 125px;
          }
          #s-153 {
            top: 64px;
            left: 125px;
          }
          #s-154 {
            top: 2px;
            left: 125px;
          }
          #s-155 {
            top: 95px;
            left: 166px;
          }
          #s-156 {
            top: 64px;
            left: 166px;
          }
          #s-157 {
            top: 2px;
            left: 166px;
          }
          #s-158 {
            top: 95px;
            left: 207px;
          }
          #s-159 {
            top: 64px;
            left: 207px;
          }
          #s-160 {
            top: 2px;
            left: 207px;
          }
          #s-161 {
            top: 95px;
            left: 248px;
          }
          #s-162 {
            top: 64px;
            left: 248px;
          }
          #s-163 {
            top: 2px;
            left: 248px;
          }
          #s-164 {
            top: 95px;
            left: 289px;
          }
          #s-165 {
            top: 64px;
            left: 289px;
          }
          #s-166 {
            top: 2px;
            left: 289px;
          }
          #s-167 {
            top: 95px;
            left: 330px;
          }
          #s-168 {
            top: 64px;
            left: 330px;
          }
          #s-169 {
            top: 2px;
            left: 330px;
          }
          #s-170 {
            top: 95px;
            left: 371px;
          }
          #s-171 {
            top: 64px;
            left: 371px;
          }
          #s-172 {
            top: 2px;
            left: 371px;
          }
          #s-173 {
            top: 95px;
            left: 412px;
          }
          #s-174 {
            top: 64px;
            left: 412px;
          }
          #s-175 {
            top: 2px;
            left: 412px;
          }
          #s-176 {
            top: 95px;
            left: 453px;
          }
          #s-177 {
            top: 64px;
            left: 453px;
          }
          #s-178 {
            top: 2px;
            left: 453px;
          }
          #s-179 {
            top: 95px;
            left: 494px;
          }
          #s-180 {
            top: 64px;
            left: 494px;
          }
          #s-181 {
            top: 2px;
            left: 494px;
          }
          #s-182 {
            top: 95px;
            left: 535px;
          }
          #s-183 {
            top: 2px;
            left: 535px;
          }
          #s-184 {
            top: 2px;
            left: 576px;
          }
          #s-185 {
            top: 2px;
            left: 617px;
          }
          #s-186 {
            top: 95px;
            left: 658px;
          }
          #s-187 {
            top: 2px;
            left: 658px;
          }
          #s-188 {
            top: 2px;
            left: 699px;
          }
          #s-189 {
            top: 2px;
            left: 740px;
          }
          #s-190 {
            top: 95px;
            left: 781px;
          }
          #s-191 {
            top: 64px;
            left: 781px;
          }
          #s-192 {
            top: 2px;
            left: 781px;
          }
          #s-193 {
            top: 2px;
            left: 822px;
          }
          #s-194 {
            top: 64px;
            left: 863px;
          }
          #s-195 {
            top: 2px;
            left: 863px;
          }
          #s-196 {
            top: 95px;
            left: 904px;
          }
          #s-197 {
            top: 2px;
            left: 904px;
          }
          #s-198 {
            top: 2px;
            left: 945px;
          }
          #s-199 {
            top: 95px;
            left: 986px;
          }
          #s-200 {
            top: 64px;
            left: 986px;
          }
          #s-201 {
            top: 2px;
            left: 986px;
          }
          #s-202 {
            top: 95px;
            left: 1027px;
          }
          #s-203 {
            top: 64px;
            left: 1027px;
          }
          #s-204 {
            top: 2px;
            left: 1027px;
          }
          #s-205 {
            top: 95px;
            left: 1068px;
          }
          #s-206 {
            top: 64px;
            left: 1068px;
          }
          #s-207 {
            top: 2px;
            left: 1068px;
          }
          #s-208 {
            top: 95px;
            left: 1109px;
          }
          #s-209 {
            top: 64px;
            left: 1109px;
          }
          #s-210 {
            top: 2px;
            left: 1109px;
          }
          #s-211 {
            top: 95px;
            left: 1150px;
          }
          #s-212 {
            top: 64px;
            left: 1150px;
          }
          #s-213 {
            top: 2px;
            left: 1150px;
          }
        `}
      </style>
    </Grid>
  )
}

export default Map
