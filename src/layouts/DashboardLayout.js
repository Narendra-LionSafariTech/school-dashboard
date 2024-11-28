import React, { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./core/Sidebar";
import Header from "./core/Header";

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Box
        sx={{
          flexGrow: 1,
          transition: "margin 0.3s ease", 
          marginLeft: isSidebarOpen ? "240px" : "60px", 
          overflowX: "hidden",
        }}
      >
        <Header toggleSidebar={toggleSidebar} />
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
