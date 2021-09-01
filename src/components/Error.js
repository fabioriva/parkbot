import Image from 'next/image'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Layout from 'src/components/Layout'

export default function ErrorPage (props) {
  return (
    <Layout {...props} pageTitle={'Error'}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        <div className='balloon'>
          <Typography variant='h6'>{props.error}</Typography>
          <Typography variant='subtitle1'>{'props.error'}</Typography>
          <div className='arrow' />
        </div>
        <Image src='/bot.svg' alt='ParkBot' width={100} height={100} />
        <style jsx global>
          {`
            .balloon {
              background: #fff;
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
              border-color: transparent #fff transparent transparent;
              border-style: solid;
              border-width: 10px;
              display: block;
              height: 0;
              left: 47%;
              position: absolute;
              top: 100px;
              width: 0;
              transform: rotate(-90deg);
            }
          `}
        </style>
      </Box>
    </Layout>
  )
}
