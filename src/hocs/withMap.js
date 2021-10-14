import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from 'src/components/Layout'
import MapEdit from 'src/components/map/MapEditForm'
import MapLevel from 'src/components/map/MapLevel'
import MapViewFilter from 'src/components/map/MapViewFilter'
import Occupancy from 'src/components/charts/Occupancy'
import fetch from 'src/lib/fetch'
import { useData } from 'src/lib/useWebSocket'
import { EDIT_STALL, isAllowed } from 'src/constants/auth'

const withMap = WrappedComponent => {
  const Wrapper = props => {
    const { t } = useTranslation('map')

    if (props.json.err)
      return (
        <Layout {...props} pageTitle={t('header-title')}>
          <div>Fetch Error</div>
        </Layout>
      )

    const [map, setMap] = React.useState(props.json)

    const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/map`
    const { data } = useData(url, {
      initialData: map,
      page: 'map'
    })
    React.useEffect(() => setMap(data), [data])

    const { cards, stalls, stallStatus } = map.definitions
    console.log(stallStatus)
    // Dialog
    const DIALOG_INIT_VALUES = { card: 0, stall: 0, minCard: 1, maxCard: cards }
    const [open, setOpen] = React.useState(false)
    const [dialog, setDialog] = React.useState(DIALOG_INIT_VALUES)

    const handleCancel = () => {
      setOpen(false)
      setDialog(DIALOG_INIT_VALUES)
    }

    const handleConfirm = async ({ card, stall }) => {
      setOpen(false)
      console.log(card, stall)
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/map/edit`
      const json = await fetch(url, {
        method: 'POST',
        // withCredentials: true,
        // credentials: 'include',
        headers: {
          Authorization: 'Bearer ' + props.token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ card, stall })
      })
      console.log(json)
      // const snack = message(json)
      // props.enqueueSnackbar(snack.message, snack.options)
    }

    const handleOpen = (stall, value) => {
      if (isAllowed(props.user, [EDIT_STALL])) {
        setOpen(true)
        setDialog({ ...dialog, card: value, stall: stall })
      }
    }

    // Radio
    const [filter, setFilter] = React.useState('SHOW_NUMBERS')

    return (
      <Layout {...props} pageTitle={t('header-title')}>
        <WrappedComponent
          {...props}
          levels={map.levels.map((item, key) => (
            <MapLevel
              key={key}
              level={item}
              stallStatus={stallStatus}
              visibilityFilter={filter}
              openModal={handleOpen}
            />
          ))}
          occupancy={
            <Occupancy
              animation
              data={[
                map.occupancy[0].value,
                map.occupancy[1].value,
                map.occupancy[2].value
              ]}
              labels={[t('busy'), t('free'), t('lock')]}
              title={t('occupancy', { count: stalls })}
              height={280}
              width={280}
            />
          }
          view={
            <MapViewFilter
              filter={filter}
              handleChange={e => setFilter(e.target.value)}
            />
          }
        />

        <MapEdit
          open={open}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
          stallStatus={stallStatus}
          value={dialog}
        />
      </Layout>
    )
  }
  return Wrapper
}

export default withMap
