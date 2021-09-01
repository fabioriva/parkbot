// import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import Brightness1Rounded from '@material-ui/icons/Brightness1Rounded'
import Tooltip from 'src/components/Tooltip'

export default function Lamp ({ color, title }) {
  return (
    <Tooltip title={title}>
      <span>
        <IconButton aria-label='info' sx={{ px: 0, py: 1 }} disabled>
          <Brightness1Rounded sx={{ color }} />
        </IconButton>
      </span>
    </Tooltip>
  )
}
