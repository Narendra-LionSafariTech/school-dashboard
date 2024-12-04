import React from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

const handleLogout = () => {
  dispatch(logout());
  navigate('/login'); 
};

  return (
    <Drawer
      variant="permanent"
      sx={{
        "& .MuiDrawer-paper": {
          width: isOpen ? 240 : 60, // Full width when open, reduced to icon width when closed
          transition: "width 0.3s ease",
          // backgroundColor: "#222",
          // color: "#fff",
          overflowX: "hidden",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: isOpen ? "space-between" : "center",
          padding: "8px",
          height: "64px",
        }}
      >
        {isOpen && (
          <Typography variant="h6" color="inherit">
            <img src="/assets/logo/exam_logo.jpeg" width={42} height={42} style={{borderRadius:"50%"}} />
          </Typography>
        )}
        <IconButton color="inherit" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
      </Box>
      <List>
        <ListItem button>
          <ListItemIcon sx={{ color: "#dadada" }}>
            {/* <HomeIcon /> */}
            <img src="/assets/icons/home.svg" width={30} height={30} alt="home"/>
          </ListItemIcon>
          {isOpen && <ListItemText primary="Dashboard" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon sx={{ color: "#dadada" }}>
            <SettingsIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Analytics" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon sx={{color: "#dadada" }}>
            <SettingsIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Operator" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon sx={{color: "#dadada" }}>
            <SettingsIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="tools" />}
        </ListItem>
        <ListItem button onClick={handleLogout}>
          <ListItemIcon sx={{ color: "#dadada" }}>
            <LogoutIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Logout" />}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
