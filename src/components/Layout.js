import { styled } from '@mui/material/styles'
import React from 'react'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'

const drawerWidth = 240
const Page = styled('div')({
  background: '#f9f9f9',
  width: '100%',
})

const Root = styled('div')({
  display: 'flex',
})

const classes = {
  drawer: {
    width: drawerWidth,
    '.MuiDrawer-paper': {
      width: drawerWidth,
    },
  },
  root: {
    display: 'flex',
  },
}

export default function Layout({ children }) {
  return (
    <Root>
      <Drawer variant="permanent" anchor="left" sx={classes.drawer}>
        <div>
          <Typography variant="h5" className={classes.title}>
            Ninja Note
          </Typography>
        </div>
      </Drawer>

      <Page>{children}</Page>
    </Root>
  )
}
