import CustomTooltip from 'src/components/Tooltip'
import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'

function Bit ({ item, nr }) {
  const { t } = useTranslation('io')

  const { addr, byte, bit, label, status } = item

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
            {label !== t(label) && (
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
            font-size: 0.78em;

            width: 45px;
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
            left: 34px;
            top: 23px;
          }
          #nr-00 {
            left: 10px;
            top: 23px;
          }
          #st-00 {
            left: 22px;
            top: 23px;
          }
          #id-01 {
            left: 34px;
            top: 40px;
          }
          #nr-01 {
            left: 10px;
            top: 40px;
          }
          #st-01 {
            left: 22px;
            top: 40px;
          }
          #id-02 {
            left: 34px;
            top: 57px;
          }
          #nr-02 {
            left: 10px;
            top: 57px;
          }
          #st-02 {
            left: 22px;
            top: 57px;
          }
          #id-03 {
            left: 34px;
            top: 74px;
          }
          #nr-03 {
            left: 10px;
            top: 74px;
          }
          #st-03 {
            left: 22px;
            top: 74px;
          }
          #id-04 {
            left: 34px;
            top: 91px;
          }
          #nr-04 {
            left: 10px;
            top: 91px;
          }
          #st-04 {
            left: 22px;
            top: 91px;
          }
          #id-05 {
            left: 34px;
            top: 108px;
          }
          #nr-05 {
            left: 10px;
            top: 108px;
          }
          #st-05 {
            left: 22px;
            top: 108px;
          }
          #id-06 {
            left: 34px;
            top: 125px;
          }
          #nr-06 {
            left: 10px;
            top: 125px;
          }
          #st-06 {
            left: 22px;
            top: 125px;
          }
          #id-07 {
            left: 34px;
            top: 142px;
          }
          #nr-07 {
            left: 10px;
            top: 142px;
          }
          #st-07 {
            left: 22px;
            top: 142px;
          }

          #id-10 {
            left: 34px;
            top: 193px;
          }
          #nr-10 {
            left: 10px;
            top: 193px;
          }
          #st-10 {
            left: 22px;
            top: 193px;
          }
          #id-11 {
            left: 34px;
            top: 210px;
          }
          #nr-11 {
            left: 10px;
            top: 210px;
          }
          #st-11 {
            left: 22px;
            top: 210px;
          }
          #id-12 {
            left: 34px;
            top: 227px;
          }
          #nr-12 {
            left: 10px;
            top: 227px;
          }
          #st-12 {
            left: 22px;
            top: 227px;
          }
          #id-13 {
            left: 34px;
            top: 244px;
          }
          #nr-13 {
            left: 10px;
            top: 244px;
          }
          #st-13 {
            left: 22px;
            top: 244px;
          }
          #id-14 {
            left: 34px;
            top: 261px;
          }
          #nr-14 {
            left: 10px;
            top: 261px;
          }
          #st-14 {
            left: 22px;
            top: 261px;
          }
          #id-15 {
            left: 34px;
            top: 278px;
          }
          #nr-15 {
            left: 10px;
            top: 278px;
          }
          #st-15 {
            left: 22px;
            top: 278px;
          }
          #id-16 {
            left: 34px;
            top: 295px;
          }
          #nr-16 {
            left: 10px;
            top: 295px;
          }
          #st-16 {
            left: 22px;
            top: 295px;
          }
          #id-17 {
            left: 34px;
            top: 312px;
          }
          #nr-17 {
            left: 10px;
            top: 312px;
          }
          #st-17 {
            left: 22px;
            top: 312px;
          }

          #id-20 {
            left: 78px;
            top: 23px;
          }
          #nr-20 {
            left: 135px;
            top: 23px;
          }
          #st-20 {
            left: 123px;
            top: 23px;
          }
          #id-21 {
            left: 78px;
            top: 40px;
          }
          #nr-21 {
            left: 135px;
            top: 40px;
          }
          #st-21 {
            left: 123px;
            top: 40px;
          }
          #id-22 {
            left: 78px;
            top: 57px;
          }
          #nr-22 {
            left: 135px;
            top: 57px;
          }
          #st-22 {
            left: 123px;
            top: 57px;
          }
          #id-23 {
            left: 78px;
            top: 74px;
          }
          #nr-23 {
            left: 135px;
            top: 74px;
          }
          #st-23 {
            left: 123px;
            top: 74px;
          }
          #id-24 {
            left: 78px;
            top: 91px;
          }
          #nr-24 {
            left: 135px;
            top: 91px;
          }
          #st-24 {
            left: 123px;
            top: 91px;
          }
          #id-25 {
            left: 78px;
            top: 108px;
          }
          #nr-25 {
            left: 135px;
            top: 108px;
          }
          #st-25 {
            left: 123px;
            top: 108px;
          }
          #id-26 {
            left: 78px;
            top: 125px;
          }
          #nr-26 {
            left: 135px;
            top: 125px;
          }
          #st-26 {
            left: 123px;
            top: 125px;
          }
          #id-27 {
            left: 78px;
            top: 142px;
          }
          #nr-27 {
            left: 135px;
            top: 142px;
          }
          #st-27 {
            left: 123px;
            top: 142px;
          }

          #id-30 {
            left: 78px;
            top: 193px;
          }
          #nr-30 {
            left: 135px;
            top: 193px;
          }
          #st-30 {
            left: 123px;
            top: 193px;
          }
          #id-31 {
            left: 78px;
            top: 210px;
          }
          #nr-31 {
            left: 135px;
            top: 210px;
          }
          #st-31 {
            left: 123px;
            top: 210px;
          }
          #id-32 {
            left: 78px;
            top: 227px;
          }
          #nr-32 {
            left: 135px;
            top: 227px;
          }
          #st-32 {
            left: 123px;
            top: 227px;
          }
          #id-33 {
            left: 78px;
            top: 244px;
          }
          #nr-33 {
            left: 135px;
            top: 244px;
          }
          #st-33 {
            left: 123px;
            top: 244px;
          }
          #id-34 {
            left: 78px;
            top: 261px;
          }
          #nr-34 {
            left: 135px;
            top: 261px;
          }
          #st-34 {
            left: 123px;
            top: 261px;
          }
          #id-35 {
            left: 78px;
            top: 278px;
          }
          #nr-35 {
            left: 135px;
            top: 278px;
          }
          #st-35 {
            left: 123px;
            top: 278px;
          }
          #id-36 {
            left: 78px;
            top: 295px;
          }
          #nr-36 {
            left: 135px;
            top: 295px;
          }
          #st-36 {
            left: 123px;
            top: 295px;
          }
          #id-37 {
            left: 78px;
            top: 312px;
          }
          #nr-37 {
            left: 135px;
            top: 312px;
          }
          #st-37 {
            left: 123px;
            top: 312px;
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
            width: 69px;
          }
          #label-0 {
            left: 10px;
            top: 159px;
          }
          #label-1 {
            left: 10px;
            top: 176px;
          }
          #label-2 {
            left: 78px;
            top: 159px;
          }
          #label-3 {
            left: 78px;
            top: 176px;
          }
        `}
      </style>
    </>
  )
}

function Card ({ card }) {
  const { bytes, nr, type } = card
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
            width: 160px;
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
            font-size: 0.75em;
          }
          #card-1 {
            left: 1px;
            top: 1px;
          }
          #card-2 {
            left: 162px;
            top: 1px;
          }
          #card-3 {
            left: 323px;
            top: 1px;
          }
          #card-4 {
            left: 484px;
            top: 1px;
          }
          #card-5 {
            left: 645px;
            top: 1px;
          }
          #card-6 {
            left: 806px;
            top: 1px;
          }
          #card-7 {
            left: 967px;
            top: 1px;
          }
          #card-8 {
            left: 1128px;
            top: 1px;
          }
        `}
      </style>
    </div>
  )
}

export default function ET200M ({ rack }) {
  const { cards, nr, serie } = rack
  return (
    <div className='rack-container' id={'rack-' + nr}>
      <span className='rack'>Simatic PLC Rack {nr}</span>
      {cards.map((item, key) => (
        <Card key={key} card={item} />
      ))}
      <style jsx>
        {`
          .rack-container {
            position: relative;
            background-color: #c0c0c0;
            border: 1px solid #000000;
            height: 364px;
            width: 100%;
            left: 0px;
            top: 20px;
            text-align: center;
          }
          .rack {
            color: #808080;
            font-family: 'Arial', Sans-Serif;
            font-size: 48px;
            font-weight: 600;
            vertical-align: middle;
            line-height: 364px;
          }
        `}
      </style>
    </div>
  )
}
