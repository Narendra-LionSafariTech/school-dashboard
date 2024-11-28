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

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        "& .MuiDrawer-paper": {
          width: isOpen ? 240 : 60, // Full width when open, reduced to icon width when closed
          transition: "width 0.3s ease", // Smooth transition
          backgroundColor: "#222",
          color: "#fff",
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
            <img src="/assets/logo/logo.webp" width={42} height={42} style={{borderRadius:"50%"}} />
          </Typography>
        )}
        <IconButton color="inherit" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
      </Box>
      <List>
        <ListItem button>
          <ListItemIcon sx={{ color: "#fff" }}>
            <HomeIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Dashboard" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon sx={{ color: "#fff" }}>
            <SettingsIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Settings" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon sx={{ color: "#fff" }}>
            <LogoutIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Logout" />}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
