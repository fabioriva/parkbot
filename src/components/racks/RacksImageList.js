/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ListSubheader from '@mui/material/ListSubheader'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function RacksList ({ aps, locale, racks }) {
  const router = useRouter()
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const cols = isMobile ? 2 : 5

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        bgcolor: '#fff'
      }}
    >
      <ImageList cols={cols}>
        {/* <ImageListItem key='Subheader' cols={cols}>
          <ListSubheader component='div'>PLC Racks List</ListSubheader>
        </ImageListItem> */}
        {racks.map((item, key) => (
          <ImageListItem key={key}>
            <img
              srcSet={`${
                item.serie === 'et200m' ? '/et200mp-1.png' : '/et200sp-1.png'
              }?w=248&fit=crop&auto=format 1x,
                ${
                  item.serie === 'et200m' ? '/et200mp-1.png' : '/et200sp-1.png'
                }?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading='lazy'
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>PLC Rack # {item.nr}</span>}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                  onClick={() =>
                    router.push(`/${aps}/rack/${key}`, `/${aps}/rack/${key}`, {
                      locale: 'en'
                    })
                  }
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}
