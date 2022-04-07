// import clsx from 'clsx'
import IconButton from '@mui/material/IconButton'
import Brightness1Rounded from '@mui/icons-material/Brightness1Rounded'
import Tooltip from 'src/components/Tooltip'

// export default function Lamp ({ color, title }) {
//   return (
//     <Tooltip title={title}>
//       <span>
//         <IconButton aria-label='info' sx={{ px: 0, py: 1 }} disabled>
//           <Brightness1Rounded sx={{ color }} />
//         </IconButton>
//       </span>
//     </Tooltip>
//   )
// }

export default function Lamp(props) {
  const { color, title, active = 0, disabled, href } = props
  return (
    <Tooltip title={title}>
      <span>
        <IconButton
          aria-label='info'
          sx={{ px: 0, py: 1 }}
          href={href}
          disabled={!active || disabled}
          >
          <Brightness1Rounded sx={{ color }} />
        </IconButton>
      </span>
    </Tooltip>
  )
}
