import React from 'react'
import Paper from '@material-ui/core/Paper'
import Alert from '@material-ui/core/Alert'
import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import CloseIcon from '@material-ui/icons/Close'

export default function TransitionAlert (props) {
  const [open, setOpen] = React.useState(true)

  return (
    <Collapse in={open}>
      <Paper sx={{ width: '100%' }}>
        <Alert
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setOpen(false)
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
          sx={{ mb: 2 }}
          severity={props.severity}
        >
          {props.children}
        </Alert>
      </Paper>
    </Collapse>
  )
}
