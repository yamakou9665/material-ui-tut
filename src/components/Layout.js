import { styled } from '@mui/material/styles'
import React from 'react'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material'
import {
  useHistory,
  useLocation,
} from 'react-router-dom/cjs/react-router-dom.min'
import { AppBar, Toolbar } from '@mui/material'
import { StyledEngineProvider } from '@mui/material'
import {format} from "date-fns"


const drawerWidth = 240

const Page = styled('div')(({ theme }) => ({
  background: '#f9f9f9',
  width: '100%',
  padding: theme.spacing(3),
}))


const MyToolbarDiv = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar
  }))

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
  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/',
    },
    {
      text: 'Create Notes',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/create',
    },
  ]
  const history = useHistory()
  const location = useLocation()

  const cls = {
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  }

  return (
    <StyledEngineProvider injectFirst>
      <Root>
        {/* app bar*/}
        <AppBar sx={cls.appbar}  elevation={0}>
          <Toolbar>
            <Typography>                        Today is the {format(new Date(), 'do MMMM Y')}
</Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" anchor="left" sx={classes.drawer}>
          <div>
            <Typography variant="h5" className={classes.title}>
              Ninja Note
            </Typography>
          </div>
          {/* list / links */}
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                onClick={() => history.push(item.path)}
                key={item.text}
                sx={
                  location.pathname === item.path
                    ? { background: '#f4f4f4' }
                    : {}
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.text}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Page>
          <MyToolbarDiv></MyToolbarDiv>{children}
        </Page>
      </Root>
    </StyledEngineProvider>
  )
}
