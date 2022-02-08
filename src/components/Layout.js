import { styled } from '@mui/material/styles'
import React from 'react'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

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
    const menuItems = [
        {
            text: "My Notes",
            icon: <SubjectOutlined color="secondary"/>,
            path:"/"
        },
        {
            text: "Create Notes",
            icon: <AddCircleOutlineOutlined color="secondary"/>,
            path:"/create"
        },
    ]
    const history = useHistory()
    const location = useLocation()
    
  return (
    <Root>
      <Drawer variant="permanent" anchor="left" sx={classes.drawer}>
        <div>
          <Typography variant="h5" className={classes.title}>
            Ninja Note
          </Typography>
        </div>
        {/* list / links */}
        <List>
            {menuItems.map(item => (
                <ListItem button onClick={()=>history.push(item.path)} key={item.text} sx={location.pathname === item.path ? {background:"#f4f4f4"} :{}}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.text}</ListItemText>
                </ListItem>
            ))}
        </List>
      </Drawer>

      <Page>{children}</Page>
    </Root>
  )
}
