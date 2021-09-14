import CustomTooltip from 'src/components/Tooltip'
import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'

function Bit ({ item, nr }) {
  const { t } = useTranslation('io')

  // const { addr, bit, label, status } = item
  const { addr, label, status } = item
  const bit = addr.slice(-1)

  return (
    <>
      <CustomTooltip
        placement='top'
        title={
          <div>
            {addr && (
              <>
                {addr}
                <br />
              </>
            )}
            {label && (
              <>
                {label}
                <br />
              </>
            )}
            {label !== '' && (
              <>
                {t(label)}
                <br />
              </>
            )}
          </div>
        }
      >
        <div className='id' id={'id-'.concat(nr, bit)}>
          {label}
        </div>
      </CustomTooltip>
      <div className='nr' id={'nr-'.concat(nr, bit)}>
        {bit}
      </div>
      <div
        className={clsx('st', {
          'st-0': !status,
          'st-1': status
        })}
        id={'st-'.concat(nr, bit)}
      >
        {bit}
      </div>
      <style jsx>
        {`
          .id {
            position: absolute;
            height: 18px;
            line-height: 18px;
            background: #ffffff;
            border: 1px solid #000000;
            font-size: 0.68em;

            width: 33px;
          }
          .nr {
            position: absolute;
            height: 18px;
            width: 12px;
            line-height: 18px;
            background-color: #e0e0e0;
            border: 1px solid #000000;

            width: 12px;
          }
          .st {
            position: absolute;
            height: 18px;
            width: 12px;
            line-height: 18px;
            border-top: 1px solid #000000;
            border-bottom: 1px solid #000000;

            width: 12px;
          }
          .st-0 {
            background-color: #c0c0c0;
          }
          .st-1 {
            background-color: #00ff00;
          }

          #id-00 {
            left: 10px;
            top: 25px;
          }
          #st-00 {
            left: 10px;
            top: 203px;
          }
          #nr-00 {
            left: 22px;
            top: 203px;
          }
          #id-01 {
            left: 10px;
            top: 42px;
          }
          #st-01 {
            left: 50px;
            top: 203px;
          }
          #nr-01 {
            left: 62px;
            top: 203px;
          }
          #id-02 {
            left: 10px;
            top: 59px;
          }
          #st-02 {
            left: 10px;
            top: 220px;
          }
          #nr-02 {
            left: 22px;
            top: 220px;
          }
          #id-03 {
            left: 10px;
            top: 76px;
          }
          #st-03 {
            left: 50px;
            top: 220px;
          }
          #nr-03 {
            left: 62px;
            top: 220px;
          }
          #id-04 {
            left: 10px;
            top: 93px;
          }
          #st-04 {
            left: 10px;
            top: 237px;
          }
          #nr-04 {
            left: 22px;
            top: 237px;
          }
          #id-05 {
            left: 10px;
            top: 110px;
          }
          #st-05 {
            left: 50px;
            top: 237px;
          }
          #nr-05 {
            left: 62px;
            top: 237px;
          }
          #id-06 {
            left: 10px;
            top: 127px;
          }
          #st-06 {
            left: 10px;
            top: 254px;
          }
          #nr-06 {
            left: 22px;
            top: 254px;
          }
          #id-07 {
            left: 10px;
            top: 144px;
          }
          #st-07 {
            left: 50px;
            top: 254px;
          }
          #nr-07 {
            left: 62px;
            top: 254px;
          }

          #id-10 {
            left: 42px;
            top: 25px;
          }
          #st-10 {
            left: 10px;
            top: 271px;
          }
          #nr-10 {
            left: 22px;
            top: 271px;
          }
          #id-11 {
            left: 42px;
            top: 42px;
          }
          #st-11 {
            left: 50px;
            top: 271px;
          }
          #nr-11 {
            left: 62px;
            top: 271px;
          }
          #id-12 {
            left: 42px;
            top: 59px;
          }
          #st-12 {
            left: 10px;
            top: 288px;
          }
          #nr-12 {
            left: 22px;
            top: 288px;
          }
          #id-13 {
            left: 42px;
            top: 76px;
          }
          #st-13 {
            left: 50px;
            top: 288px;
          }
          #nr-13 {
            left: 62px;
            top: 288px;
          }
          #id-14 {
            left: 42px;
            top: 93px;
          }
          #st-14 {
            left: 10px;
            top: 305px;
          }
          #nr-14 {
            left: 22px;
            top: 305px;
          }
          #id-15 {
            left: 42px;
            top: 110px;
          }
          #st-15 {
            left: 50px;
            top: 305px;
          }
          #nr-15 {
            left: 62px;
            top: 305px;
          }
          #id-16 {
            left: 42px;
            top: 127px;
          }
          #st-16 {
            left: 10px;
            top: 322px;
          }
          #nr-16 {
            left: 22px;
            top: 322px;
          }
          #id-17 {
            left: 42px;
            top: 144px;
          }
          #st-17 {
            left: 50px;
            top: 322px;
          }
          #nr-17 {
            left: 62px;
            top: 322px;
          }
        `}
      </style>
    </>
  )
}

function Byte ({ byte, nr }) {
  const { bits, label } = byte
  return (
    <>
      <div className='label' id={'label-'.concat(nr)}>
        {label}
      </div>
      {bits.map((item, key) => (
        <Bit key={key} item={item} nr={nr} />
      ))}
      <style jsx>
        {`
          .label {
            position: absolute;
            background-color: #b9deed;
            border: 1px solid #000000;
            font-size: 14px;
            height: 18px;
            width: 33px;
            line-height: 18px;
          }
          #label-0 {
            left: 10px;
            top: 172px;
            font-size: 12px;
          }
          #label-1 {
            left: 42px;
            top: 172px;
            font-size: 12px;
          }
        `}
      </style>
    </>
  )
}

export default function Module ({ module }) {
  const { bytes, nr, type } = module
  return (
    <div className='card' id={'card-'.concat(nr)}>
      <div className='card-title'>Card {nr}</div>
      <div className='card-type'>{type}</div>
      {bytes.map((item, key) => (
        <Byte key={key} byte={item} nr={key} />
      ))}
      <style jsx>
        {`
          .card {
            position: absolute;
            border: 1px solid #000000;
            background-color: #505050;
            color: #000000;
            text-align: center;
            vertical-align: middle;
            line-height: 16px;
            height: 360px;
            width: 88px;
          }
          .card-title {
            height: 18px;
            color: #ffff00;
          }
          .card-type {
            position: absolute;
            right: 10px;
            top: 342px;
            height: 18px;
            color: #f0f0f0;
            font-family: 'Arial', Sans-Serif;
            font-size: 0.65em;
          }
          #card-1 {
            left: 1px;
            top: 1px;
          }
          #card-2 {
            left: 90px;
            top: 1px;
          }
          #card-3 {
            left: 179px;
            top: 1px;
          }
          #card-4 {
            left: 268px;
            top: 1px;
          }
          #card-5 {
            left: 357px;
            top: 1px;
          }
          #card-6 {
            left: 446px;
            top: 1px;
          }
          #card-7 {
            left: 535px;
            top: 1px;
          }
          #card-8 {
            left: 624px;
            top: 1px;
          }
          #card-9 {
            left: 713px;
            top: 1px;
          }
        `}
      </style>
    </div>
  )
}
