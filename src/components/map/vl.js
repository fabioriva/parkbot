import Grid from '@mui/material/Grid'

const Map = ({ levels, occupancy, view }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={8}>
        <Grid container spacing={1}>
          {levels.map((item, key) => (
            <Grid key={key} item xs={12} md={3}>
              {item}
            </Grid>
          ))}
          {view}
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        {occupancy}
      </Grid>
      <style jsx global>
        {`
          .l {
            position: relative;
            background-color: #ddd;
            /* border: 1px solid #888; */
            margin-bottom: 14px;
            height: 166px;
            width: 87px;
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
          /* Level +2 */
          #el-a2 {
            top: 65px;
            left: 2px;
          }
          #s-9 {
            top: 132px;
            left: 2px;
          }
          #s-10 {
            top: 99px;
            left: 2px;
          }
          #s-11 {
            top: 33px;
            left: 2px;
          }
          #s-12 {
            top: 2px;
            left: 2px;
          }
          #s-13 {
            top: 132px;
            left: 43px;
          }
          #s-14 {
            top: 99px;
            left: 43px;
          }
          #s-15 {
            top: 33px;
            left: 43px;
          }
          #s-16 {
            top: 2px;
            left: 43px;
          }
          /* Level +3 */
          #el-a3 {
            top: 65px;
            left: 2px;
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
          /* Level +4 */
          #el-a4 {
            top: 65px;
            left: 2px;
          }
          #s-25 {
            top: 132px;
            left: 2px;
          }
          #s-26 {
            top: 99px;
            left: 2px;
          }
          #s-27 {
            top: 33px;
            left: 2px;
          }
          #s-28 {
            top: 2px;
            left: 2px;
          }
          #s-29 {
            top: 132px;
            left: 43px;
          }
          #s-30 {
            top: 99px;
            left: 43px;
          }
          #s-31 {
            top: 33px;
            left: 43px;
          }
          #s-32 {
            top: 2px;
            left: 43px;
          }
          /* Level +5 */
          #el-a5 {
            top: 65px;
            left: 2px;
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
          /* Level +6 */
          #el-a6 {
            top: 65px;
            left: 2px;
          }
          #s-41 {
            top: 132px;
            left: 2px;
          }
          #s-42 {
            top: 99px;
            left: 2px;
          }
          #s-43 {
            top: 33px;
            left: 2px;
          }
          #s-44 {
            top: 2px;
            left: 2px;
          }
          #s-45 {
            top: 132px;
            left: 43px;
          }
          #s-46 {
            top: 99px;
            left: 43px;
          }
          #s-47 {
            top: 33px;
            left: 43px;
          }
          #s-48 {
            top: 2px;
            left: 43px;
          }
          /* Level +7 */
          #el-a7 {
            top: 65px;
            left: 2px;
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
        `}
      </style>
    </Grid>
  )
}

export default Map
