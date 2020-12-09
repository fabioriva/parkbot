import CircularProgress from '@material-ui/core/CircularProgress'

export default function LoadingSkeleton () {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <CircularProgress />
    </div>
  )
}
