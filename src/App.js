import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />} /> 
      <Route path="login" element={<LoginPage />} /> 
        <Route path="admin" element={<DashboardLayout />}>
          <Route index element={<AdminDashboard />} /> 
          <Route path="dashboard" element={<AdminDashboard />} /> 
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
