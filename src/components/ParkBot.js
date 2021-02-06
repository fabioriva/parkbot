import Image from 'next/image'
import Typography from '@material-ui/core/Typography'

export default function ParkBot ({ message }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
        // height: '100%'
      }}
    >
      <Image src='/bot.svg' alt='ParkBot' width={100} height={100} />
      <Typography variant='overline' align='center'>
        {message}
      </Typography>
    </div>
  )
}
