import dynamic from 'next/dynamic'
import Box from '@mui/material/Box'

const componentList = {
  et200m16: dynamic(() => import('src/components/racks/ET200M16')),
  et200m32: dynamic(() => import('src/components/racks/ET200M32')),
  et200s16: dynamic(() => import('src/components/racks/ET200S16')),
  et200s8: dynamic(() => import('src/components/racks/ET200S8')),
  et200m08f: dynamic(() => import('src/components/racks/ET200M08_F')),
  et200m16f: dynamic(() => import('src/components/racks/ET200M16_F')),
  et200s8f: dynamic(() => import('src/components/racks/ET200S8_F'))
}

export default function RackView ({ rack }) {
  const { cards, nr } = rack

  return (
    <Box sx={{ mx: { xs: 1, md: 0 }, overflow: 'scroll' }}>
      <div className='rack-container' id={'rack-' + nr}>
        <span className='rack'>Simatic PLC Rack {nr}</span>
        {cards.map((item, key) => {
          // console.log(item)
          const Module = componentList[item.module]
          return <Module key={key} module={item} />
        })}
        <style jsx>
          {`
            .rack-container {
              position: relative;
              background-color: silver;
              border: 1px solid rgba(0, 0, 0, 0.12);
              height: 364px;
              width: 100%;
              left: 0px;
              top: 20px;
              text-align: center;
              margin-bottom: 32px;
              margin-top: 0px;
            }
            .rack {
              color: #a0a0a0;
              font-size: 2rem;
              font-weight: 600;
              vertical-align: middle;
              line-height: 364px;
            }
          `}
        </style>
      </div>
    </Box>
  )
}
