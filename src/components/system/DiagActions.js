import React from 'react'
import clsx from 'clsx'
import Diag from './DiagList'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
// material-ui icons
import WarningIcon from '@material-ui/icons/Warning'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
    maxWidth: 345
  },
  cardHeader: {
    backgroundColor: '#c0c0c0',
    padding: '8px 16px'
  },
  cardHeaderAction: {
    margin: 0
  },
  cardHeaderTitle: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  cardContent: {
    padding: theme.spacing(2)
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },

  expandOpen: {
    // transform: 'rotate(180deg)'
  },
  op: {
    backgroundColor: theme.palette.op
  }
}))

export default function DiagActions ({ active }) {
  const classes = useStyles()

  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const isActive = active.length > 0

  return (
    <>
      {isActive && (
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <Badge badgeContent={active.length} color='secondary'>
              <WarningIcon />
            </Badge>
          </IconButton>
        </CardActions>
      )}
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Diag active={active} />
        </CardContent>
      </Collapse>
    </>
  )
}
