const Map = ({ levels }) => {
  return (
    <>
      {levels[4]}
      {levels[3]}
      {levels[2]}
      {levels[1]}
      {levels[0]}
      <style jsx global>
        {`
          .l {
            position: relative;
            background-color: #f0f0f0;
            border: 1px solid #888;
            margin-bottom: 14px;
            height: 100px;
            width: 661px;
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
          /* P1 */
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
            left: 207px;
          }
          #s-13 {
            top: 66px;
            left: 248px;
          }
          #s-14 {
            top: 2px;
            left: 248px;
          }
          #s-15 {
            top: 66px;
            left: 289px;
          }
          #s-16 {
            top: 2px;
            left: 289px;
          }
          #s-17 {
            top: 66px;
            left: 330px;
          }
          #s-18 {
            top: 2px;
            left: 330px;
          }
          #s-19 {
            top: 66px;
            left: 371px;
          }
          #s-20 {
            top: 2px;
            left: 371px;
          }
          #s-21 {
            top: 66px;
            left: 412px;
          }
          #s-22 {
            top: 2px;
            left: 412px;
          }
          #s-23 {
            top: 66px;
            left: 453px;
          }
          #s-24 {
            top: 2px;
            left: 453px;
          }
          #s-25 {
            top: 66px;
            left: 494px;
          }
          #s-26 {
            top: 2px;
            left: 494px;
          }
          #s-27 {
            top: 66px;
            left: 535px;
          }
          #s-28 {
            top: 2px;
            left: 535px;
          }
          #s-29 {
            top: 66px;
            left: 576px;
          }
          #s-30 {
            top: 2px;
            left: 576px;
          }
          #s-31 {
            top: 2px;
            left: 617px;
          }
          /* P2 */
          #s-32 {
            top: 66px;
            left: 2px;
          }
          #s-33 {
            top: 2px;
            left: 2px;
          }
          #s-34 {
            top: 66px;
            left: 43px;
          }
          #s-35 {
            top: 2px;
            left: 43px;
          }
          #s-36 {
            top: 66px;
            left: 84px;
          }
          #s-37 {
            top: 2px;
            left: 84px;
          }
          #s-38 {
            top: 66px;
            left: 125px;
          }
          #s-39 {
            top: 2px;
            left: 125px;
          }
          #s-40 {
            top: 66px;
            left: 166px;
          }
          #s-41 {
            top: 2px;
            left: 166px;
          }
          #s-42 {
            top: 66px;
            left: 207px;
          }
          #s-43 {
            top: 2px;
            left: 207px;
          }
          #s-44 {
            top: 66px;
            left: 248px;
          }
          #s-45 {
            top: 2px;
            left: 248px;
          }
          #s-46 {
            top: 66px;
            left: 289px;
          }
          #s-47 {
            top: 2px;
            left: 289px;
          }
          #s-48 {
            top: 66px;
            left: 330px;
          }
          #s-49 {
            top: 2px;
            left: 330px;
          }
          #s-50 {
            top: 66px;
            left: 371px;
          }
          #s-51 {
            top: 2px;
            left: 371px;
          }
          #s-52 {
            top: 66px;
            left: 412px;
          }
          #s-53 {
            top: 2px;
            left: 412px;
          }
          #s-54 {
            top: 66px;
            left: 453px;
          }
          #s-55 {
            top: 2px;
            left: 453px;
          }
          #s-56 {
            top: 66px;
            left: 494px;
          }
          #s-57 {
            top: 2px;
            left: 494px;
          }
          #s-58 {
            top: 66px;
            left: 535px;
          }
          #s-59 {
            top: 2px;
            left: 535px;
          }
          #s-60 {
            top: 66px;
            left: 576px;
          }
          #s-61 {
            top: 2px;
            left: 576px;
          }
          #s-62 {
            top: 2px;
            left: 617px;
          }
          /* P3 */
          #s-63 {
            top: 66px;
            left: 2px;
          }
          #s-64 {
            top: 2px;
            left: 2px;
          }
          #s-65 {
            top: 66px;
            left: 43px;
          }
          #s-66 {
            top: 2px;
            left: 43px;
          }
          #s-67 {
            top: 66px;
            left: 84px;
          }
          #s-68 {
            top: 2px;
            left: 84px;
          }
          #s-69 {
            top: 66px;
            left: 125px;
          }
          #s-70 {
            top: 2px;
            left: 125px;
          }
          #s-71 {
            top: 66px;
            left: 166px;
          }
          #s-72 {
            top: 2px;
            left: 166px;
          }
          #s-73 {
            top: 66px;
            left: 207px;
          }
          #s-74 {
            top: 2px;
            left: 207px;
          }
          #s-75 {
            top: 66px;
            left: 248px;
          }
          #s-76 {
            top: 2px;
            left: 248px;
          }
          #s-77 {
            top: 66px;
            left: 289px;
          }
          #s-78 {
            top: 2px;
            left: 289px;
          }
          #s-79 {
            top: 66px;
            left: 330px;
          }
          #s-80 {
            top: 2px;
            left: 330px;
          }
          #s-81 {
            top: 66px;
            left: 371px;
          }
          #s-82 {
            top: 2px;
            left: 371px;
          }
          #s-83 {
            top: 66px;
            left: 412px;
          }
          #s-84 {
            top: 2px;
            left: 412px;
          }
          #s-85 {
            top: 66px;
            left: 453px;
          }
          #s-86 {
            top: 2px;
            left: 453px;
          }
          #s-87 {
            top: 66px;
            left: 494px;
          }
          #s-88 {
            top: 2px;
            left: 494px;
          }
          #s-89 {
            top: 66px;
            left: 535px;
          }
          #s-90 {
            top: 2px;
            left: 535px;
          }
          #s-91 {
            top: 66px;
            left: 576px;
          }
          #s-92 {
            top: 2px;
            left: 576px;
          }
          #s-93 {
            top: 2px;
            left: 617px;
          }
          /* P4 */
          #s-94 {
            top: 66px;
            left: 2px;
          }
          #s-95 {
            top: 2px;
            left: 2px;
          }
          #s-96 {
            top: 66px;
            left: 43px;
          }
          #s-97 {
            top: 2px;
            left: 43px;
          }
          #s-98 {
            top: 66px;
            left: 84px;
          }
          #s-99 {
            top: 2px;
            left: 84px;
          }
          #s-100 {
            top: 66px;
            left: 125px;
          }
          #s-101 {
            top: 2px;
            left: 125px;
          }
          #s-102 {
            top: 66px;
            left: 166px;
          }
          #s-103 {
            top: 2px;
            left: 166px;
          }
          #s-104 {
            top: 66px;
            left: 207px;
          }
          #s-105 {
            top: 2px;
            left: 207px;
          }
          #s-106 {
            top: 66px;
            left: 248px;
          }
          #s-107 {
            top: 2px;
            left: 248px;
          }
          #s-108 {
            top: 66px;
            left: 289px;
          }
          #s-109 {
            top: 2px;
            left: 289px;
          }
          #s-110 {
            top: 66px;
            left: 330px;
          }
          #s-111 {
            top: 2px;
            left: 330px;
          }
          #s-112 {
            top: 66px;
            left: 371px;
          }
          #s-113 {
            top: 2px;
            left: 371px;
          }
          #s-114 {
            top: 66px;
            left: 412px;
          }
          #s-115 {
            top: 2px;
            left: 412px;
          }
          #s-116 {
            top: 66px;
            left: 453px;
          }
          #s-117 {
            top: 2px;
            left: 453px;
          }
          #s-118 {
            top: 66px;
            left: 494px;
          }
          #s-119 {
            top: 2px;
            left: 494px;
          }
          #s-120 {
            top: 66px;
            left: 535px;
          }
          #s-121 {
            top: 2px;
            left: 535px;
          }
          #s-122 {
            top: 66px;
            left: 576px;
          }
          #s-123 {
            top: 2px;
            left: 576px;
          }
          #s-124 {
            top: 2px;
            left: 617px;
          }
          /* P5 */
          #s-125 {
            top: 66px;
            left: 2px;
          }
          #s-126 {
            top: 2px;
            left: 2px;
          }
          #s-127 {
            top: 66px;
            left: 43px;
          }
          #s-128 {
            top: 2px;
            left: 43px;
          }
          #s-129 {
            top: 66px;
            left: 84px;
          }
          #s-130 {
            top: 2px;
            left: 84px;
          }
          #s-131 {
            top: 66px;
            left: 125px;
          }
          #s-132 {
            top: 66px;
            left: 166px;
          }
          #s-133 {
            top: 66px;
            left: 207px;
          }
          #s-134 {
            top: 66px;
            left: 248px;
          }
          #s-135 {
            top: 66px;
            left: 289px;
          }
          #s-136 {
            top: 66px;
            left: 330px;
          }
          #s-137 {
            top: 66px;
            left: 371px;
          }
          #s-138 {
            top: 2px;
            left: 371px;
          }
          #s-139 {
            top: 66px;
            left: 412px;
          }
          #s-140 {
            top: 2px;
            left: 412px;
          }
          #s-141 {
            top: 66px;
            left: 453px;
          }
          #s-142 {
            top: 2px;
            left: 453px;
          }
          #s-143 {
            top: 66px;
            left: 494px;
          }
          #s-144 {
            top: 2px;
            left: 494px;
          }
          #s-145 {
            top: 66px;
            left: 535px;
          }
          #s-146 {
            top: 2px;
            left: 535px;
          }
          #s-147 {
            top: 66px;
            left: 576px;
          }
          #s-148 {
            top: 2px;
            left: 576px;
          }
          #s-149 {
            top: 2px;
            left: 617px;
          }
          #el-a {
            top: 2px;
            left: 166px;
          }
          #el-b {
            top: 2px;
            left: 289px;
          }
        `}
      </style>
    </>
  )
}

export default Map
