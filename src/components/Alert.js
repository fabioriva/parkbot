import React from 'react'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import CloseIcon from '@mui/icons-material/Close'

export default function TransitionAlert (props) {
  const [open, setOpen] = React.useState(true)

  return (
    <Collapse in={open}>
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
    </Collapse>
  )
}
