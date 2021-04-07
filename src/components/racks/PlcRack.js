import dynamic from 'next/dynamic'

const componentList = {
  et200m16: dynamic(() => import('src/components/racks/ET200M16')),
  et200m32: dynamic(() => import('src/components/racks/ET200M32')),
  et200s16: dynamic(() => import('src/components/racks/ET200S16')),
  et200s8: dynamic(() => import('src/components/racks/ET200S8'))
}

export default function PlcRack ({ rack }) {
  const { cards, nr } = rack

  return (
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
            background-color: #c0c0c0;
            border: 1px solid #a0a0a0;
            height: 364px;
            width: 100%;
            left: 0px;
            top: 20px;
            text-align: center;
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
  )
}
