import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { faBook, faHand, faHome, faOm } from "@fortawesome/free-solid-svg-icons";
import {  faPhone,  } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import {Outlet} from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AddTaskModal } from '../Addtodomodel';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

interface NavItems {
name:string,
icon: IconDefinition
}

const drawerWidth = 240;
const navItems : NavItems[] = [
  { name: "home", icon: faHome },
  { name: "office", icon: faPhone },
  { name: "education", icon: faBook },
  { name: "spiritual", icon: faOm }
];

export  function Mobilelayout(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Areas
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton id="drawerList" >
              <ListItemText primary={item.name} /> 
              <FontAwesomeIcon icon={item.icon} color="black"/>
            </ListItemButton>
            
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{backgroundColor:"black",display:"flex", justifyContent:"space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ margin:'auto', display: { xs: 'none', sm: 'block' } }}
          >
            My Todo 
          </Typography>
          <AddTaskModal/>
   
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
    
      </Box>
      <Outlet/>
    </Box>
  );
}
