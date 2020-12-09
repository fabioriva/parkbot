import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  info: {
    padding: '12px 0px'
  },
  hide: {
    display: 'none'
  }
}))

export default function Info ({ children, item }) {
  const classes = useStyles()

  return (
    <>
      {item && (
        <Tooltip title={item.info !== undefined ? item.info : ''}>
          <span>
            <IconButton
              aria-label='settings'
              className={clsx(classes.info, {
                [classes.hide]: !item.status
              })}
              disabled
            >
              {children}
            </IconButton>
          </span>
        </Tooltip>
      )}
    </>
  )
}
