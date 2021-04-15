// material-ui
import Grid from '@material-ui/core/Grid'

const Map = ({ levels, occupancy, view }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={8}>
        {levels[0]}
        {view}
      </Grid>
      <Grid item xs={12} md={4}>
        {occupancy}
      </Grid>
      <style jsx global>
        {`
          .l {
            position: relative;
            background-color: #f0f0f0;
            border: 1px solid #888;
            margin-bottom: 14px;
            height: 191px;
            width: 702px;
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
          /* Level +1 */
          #s-1 {
            top: 64px;
            left: 2px;
          }
          #s-2 {
            top: 33px;
            left: 2px;
          }
          #s-3 {
            top: 2px;
            left: 2px;
          }
          #s-4 {
            top: 64px;
            left: 43px;
          }
          #s-5 {
            top: 33px;
            left: 43px;
          }
          #s-6 {
            top: 2px;
            left: 43px;
          }

          #s-7 {
            top: 157px;
            left: 84px;
          }
          #s-8 {
            top: 126px;
            left: 84px;
          }
          #s-9 {
            top: 64px;
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
            top: 157px;
            left: 125px;
          }
          #s-13 {
            top: 126px;
            left: 125px;
          }
          #s-14 {
            top: 64px;
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
          #s-17 {
            top: 157px;
            left: 166px;
          }
          #s-18 {
            top: 126px;
            left: 166px;
          }
          #s-19 {
            top: 64px;
            left: 166px;
          }
          #s-20 {
            top: 33px;
            left: 166px;
          }
          #s-21 {
            top: 2px;
            left: 166px;
          }
          #s-22 {
            top: 157px;
            left: 207px;
          }
          #s-23 {
            top: 126px;
            left: 207px;
          }
          #s-24 {
            top: 64px;
            left: 207px;
          }
          #s-25 {
            top: 33px;
            left: 207px;
          }
          #s-26 {
            top: 2px;
            left: 207px;
          }
          #s-27 {
            top: 64px;
            left: 248px;
          }
          #s-28 {
            top: 33px;
            left: 248px;
          }
          #s-29 {
            top: 2px;
            left: 248px;
          }
          #s-30 {
            top: 64px;
            left: 289px;
          }
          #s-31 {
            top: 33px;
            left: 289px;
          }
          #s-32 {
            top: 2px;
            left: 289px;
          }
          #s-33 {
            top: 157px;
            left: 330px;
          }
          #s-34 {
            top: 126px;
            left: 330px;
          }
          #s-35 {
            top: 64px;
            left: 330px;
          }
          #s-36 {
            top: 33px;
            left: 330px;
          }
          #s-37 {
            top: 2px;
            left: 330px;
          }
          #s-38 {
            top: 157px;
            left: 371px;
          }
          #s-39 {
            top: 126px;
            left: 371px;
          }
          #el-1 {
            top: 64px;
            left: 371px;
          }
          #s-40 {
            top: 33px;
            left: 371px;
          }
          #s-41 {
            top: 2px;
            left: 371px;
          }
          #s-42 {
            top: 157px;
            left: 412px;
          }
          #s-43 {
            top: 126px;
            left: 412px;
          }
          #s-44 {
            top: 64px;
            left: 412px;
          }
          #s-45 {
            top: 33px;
            left: 412px;
          }
          #s-46 {
            top: 2px;
            left: 412px;
          }
          #s-47 {
            top: 157px;
            left: 453px;
          }
          #s-48 {
            top: 126px;
            left: 453px;
          }
          #el-2 {
            top: 64px;
            left: 453px;
          }
          #s-49 {
            top: 33px;
            left: 453px;
          }
          #s-50 {
            top: 2px;
            left: 453px;
          }
          #s-51 {
            top: 157px;
            left: 494px;
          }
          #s-52 {
            top: 126px;
            left: 494px;
          }
          #s-53 {
            top: 64px;
            left: 494px;
          }
          #s-54 {
            top: 33px;
            left: 494px;
          }
          #s-55 {
            top: 2px;
            left: 494px;
          }

          #s-56 {
            top: 157px;
            left: 535px;
          }
          #s-57 {
            top: 126px;
            left: 535px;
          }
          #s-58 {
            top: 64px;
            left: 535px;
          }
          #s-59 {
            top: 33px;
            left: 535px;
          }
          #s-60 {
            top: 2px;
            left: 535px;
          }
          #s-61 {
            top: 157px;
            left: 576px;
          }
          #s-62 {
            top: 126px;
            left: 576px;
          }
          #s-63 {
            top: 64px;
            left: 576px;
          }
          #s-64 {
            top: 33px;
            left: 576px;
          }
          #s-65 {
            top: 2px;
            left: 576px;
          }
          #s-66 {
            top: 64px;
            left: 617px;
          }
          #s-67 {
            top: 33px;
            left: 617px;
          }
          #s-68 {
            top: 2px;
            left: 617px;
          }
          #s-69 {
            top: 64px;
            left: 658px;
          }
          #s-70 {
            top: 33px;
            left: 658px;
          }
          #s-71 {
            top: 2px;
            left: 658px;
          }
        `}
      </style>
    </Grid>
  )
}

export default Map
