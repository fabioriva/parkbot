import { useState, useEffect } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
import Layout from 'src/dashboard/Layout'
import Level from 'src/components/Level'
import Dialog from 'src/components/MapDialog'

const Cards = ({ currentUser = {}, definitions, json }) => {
  const {
    activeTab,
    apsName,
    apsLocation,
    pageTitle,
    websockUrl,
    cards,
    stalls,
    stallStatus
  } = definitions
  
  const [map, setMap] = useState(json)
  const [filter, setFilter] = useState('SHOW_NUMBERS')

  // Radio
  const handleChange = (event) => setFilter(event.target.value)

  // Dialog
  const DIALOG_INIT_VALUES = { stall: 0, value: 1, minCard: 1, maxCard: cards, minStall: 1, maxStall: stalls }
  const [open, setOpen] = useState(false)
  const [dialog, setDialog] = useState(DIALOG_INIT_VALUES)

  const handleCancel = () => {
    setDialog(DIALOG_INIT_VALUES)
    setOpen(false);
  };

  const handleConfirm = ({ stall, value }) => {
    setDialog(DIALOG_INIT_VALUES)
    setOpen(false);
    console.log('Stall', typeof stall, stall, 'Value', typeof value, value)
  };

  const handleOpen = (stall, value) => {
    setDialog({ ...dialog, stall: stall, value: value })
    setOpen(true)
  }

  return (
    <Layout
      activeTab={activeTab}
      apsName={apsName}
      apsLocation={apsLocation}
      pageTitle={pageTitle}
      socket={`${websockUrl}?channel=ch2`}
      user={currentUser}
    >
      
      {
        map.levels.map((level, i) => (
          <Level
            level={level}
            key={i}
            stallStatus={stallStatus}
            visibilityFilter={filter}
            openModal={handleOpen}
          />
        )).reverse()
      }
      <FormControl component="fieldset">
        {/* <FormLabel component="legend">Show</FormLabel> */}
        <RadioGroup aria-label="filter" name="filter" value={filter} onChange={handleChange} row>
          <FormControlLabel value="SHOW_NUMBERS" control={<Radio />} label="Number" />
          <FormControlLabel value="SHOW_CARDS" control={<Radio />} label="Card" />
          <FormControlLabel value="SHOW_SIZES" control={<Radio />} label="Size" />
        </RadioGroup>
      </FormControl>
      <Dialog
        open={open}
        onCancel={handleCancel}
        onClose={handleConfirm}
        data={dialog}
      />
    </Layout>
  )
}

export default Cards
