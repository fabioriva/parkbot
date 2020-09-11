import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip'

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 180,
    fontSize: theme.typography.pxToRem(14),
    border: '1px solid #dadde9'
  },
}))(Tooltip);

const setLabel = (filter, stall) => {
  switch (filter) {
    case 'SHOW_NUMBERS':
      return stall.nr
    case 'SHOW_CARDS':
      return stall.status
    case 'SHOW_SIZES':
      return stall.size
    default:
      return '---'
  }
}

const Stall = ({ stall, stallStatus, visibilityFilter, openModal }) => {
  const label = setLabel(visibilityFilter, stall)
  const title = stall.status === 0 ? <b>{'Empty'}</b> : stall.status === stallStatus.LOCK ? <b>{'Locked'}</b> : (
    <React.Fragment>
      {'Stall '}<b>{stall.nr}</b>{' is busy with card '}<b>{stall.status}</b>{' since '}<b>{stall.date}</b>
    </React.Fragment>
  )
  return (
    <>
    <HtmlTooltip
        title={title}
      >
      {/* <Tooltip title={title}> */}
        <div
          className={clsx({
            s: true,
            's-busy': stall.status !== 0,
            's-free': stall.status === stallStatus.FREE,
            's-lock': stall.status === stallStatus.LOCK,
            's-papa': stall.status === stallStatus.PAPA,
            's-rsvd': stall.status === stallStatus.RSVD,
            // 's-typ1': visibilityFilter === 'SHOW_SIZES' && stall.size === 1,
            // 's-typ2': visibilityFilter === 'SHOW_SIZES' && stall.size === 2,
            // 's-typ3': visibilityFilter === 'SHOW_SIZES' && stall.size === 3,
            // 's-typ4': visibilityFilter === 'SHOW_SIZES' && stall.size === 4,
            // 's-typ5': visibilityFilter === 'SHOW_SIZES' && stall.size === 5,
            // 's-typ6': visibilityFilter === 'SHOW_SIZES' && stall.size === 6,
            // 's-typ7': visibilityFilter === 'SHOW_SIZES' && stall.size === 7,
            // 's-typ8': visibilityFilter === 'SHOW_SIZES' && stall.size === 8
          })}
          id={'s-' + stall.nr}
        >
          <span className='st' onClick={() => openModal(stall.nr, stall.status)}>{label}</span>
        </div>
      </HtmlTooltip>
      <style jsx>{`
        .s {
          position: absolute;
          border: 1px solid #000;
          height: 30px;
          width: 40px;
          text-align: center;
          vertical-align: middle;
          line-height: 30px;
        }
        .st {
          font-size: 12px;
          font-weight: bold;
        }
        .st:hover {
          cursor: pointer;
          text-decoration: none;
          font-size: 16px;
        }
        /* status */
        .s-free {
          background-color: #00ff00;
        }
        .s-busy {
          background-color: #ff0000;
        }
        .s-lock {
          background-color: #ff00ff;
        }
        .s-rsvd {
          background-color: #ffff00;
        }
        .s-papa {
          background-color: #00ffff;
        }
        /* sizes */
        /*
        .s-typ1 {
          background-color: #b8daff;
        }
        .s-typ2 {
          background-color: #fff3cd;
        }
        .s-typ3 {
          background-color: #FF9900;
        }
        .s-typ4 {
          background-color: #66CCFF;
        }
        .s-typ5 {
          background-color: #0099FF;
        }
        .s-typ6 {
          background-color: #00FFFF; */
        }
      `}
      </style>
    </>
  )
}

export default Stall
