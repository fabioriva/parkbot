import Typography from '@material-ui/core/Typography';
import Stall from 'src/components/Stall'

const Level = ({ level, stallStatus, visibilityFilter, openModal }) => {
  const elevators =
    level.elevators !== undefined &&
    level.elevators.map((el, i) => {
      return (
        <div className='el' id={el.id} key={i}>
          {el.label}
        </div>
      )
    })
  const stalls =
    level.stalls.map((stall, i) => {
      return (
        <Stall
          stall={stall}
          key={i}
          stallStatus={stallStatus}
          visibilityFilter={visibilityFilter}
          openModal={openModal}
        />
      )
    })
  return (
    <React.Fragment>
      <Typography variant="subtitle2" gutterBottom>
        {level.label}: {level.min} - {level.max}
      </Typography>
      <div className='l' id={'l-' + level.nr}>
        {elevators}
        {stalls}
      </div>
    </React.Fragment>
  )
}

export default Level
