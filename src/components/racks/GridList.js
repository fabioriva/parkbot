import Link from 'next/link'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    // width: 600
    // height: 450
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
}))

export default function TitlebarGridList ({ racks, user }) {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  console.log('is mobile:', isMobile)

  const locale = user.locale !== undefined ? user.locale : 'en'

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={180}
        className={classes.gridList}
        cols={isMobile ? 2 : 4}
      >
        <GridListTile
          key='Subheader'
          cols={isMobile ? 2 : 4}
          style={{ height: 'auto' }}
        >
          <ListSubheader component='div'>PLC Racks</ListSubheader>
        </GridListTile>
        {racks.map((tile, key) => (
          <GridListTile key={tile.nr}>
            <img
              src={
                tile.serie === 'et200m' ? '/et200mp-1.png' : '/et200sp-1.png'
              }
              alt={tile.title}
            />
            <Link href={`/${user.aps}/rack/${key}`} locale={locale}>
              <GridListTileBar
                title={tile.title}
                subtitle={<span>PLC Rack {tile.nr}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`PLC Rack ${tile.nr}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
