import Image from 'next/image'
import Typography from '@material-ui/core/Typography'

export default function ParkBot ({ message }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 32
        // height: '100vh'
      }}
    >
      <div className='balloon'>
        <Typography variant='overline' align='center'>
          {message}
        </Typography>
        <div className='arrow' />
      </div>
      <Image src='/bot.svg' alt='ParkBot' width={100} height={100} />
      {/* <Typography variant='overline' align='center'>
        {message}
      </Typography> */}
      <style jsx global>
        {`
          .balloon {
            background: #ccc;
            border-radius: 4px;
            -moz-border-radius: 4px;
            -webkit-border-radius: 4px;
            width: 300px;
            padding: 20px;
            position: relative;
            font-size: 12px;
            color: #3a3a3a;
            text-align: justify;
            margin-bottom: 16px;
          }
          .balloon .arrow {
            border-color: transparent #ccc transparent transparent;
            border-style: solid;
            border-width: 10px;
            display: block;
            height: 0;
            left: 47%;
            position: absolute;
            top: 70px;
            width: 0;

            transform: rotate(-90deg);
          }
        `}
      </style>
    </div>
  )
}
