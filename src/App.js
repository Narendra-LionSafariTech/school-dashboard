import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import LoginPage from "./pages/LoginPage";

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const getAuthStatus = () => {
  const user = JSON.parse(localStorage.getItem("examDetails"));
  return user ? { isAuthenticated: true } : { isAuthenticated: false };
};
const ProtectedRoute = ({ children }) => {
  const auth = getAuthStatus();
  console.log("isAuthenticated",auth.isAuthenticated)
  return auth.isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="admin" element={<ProtectedRoute><DashboardLayout /> </ProtectedRoute>}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
