import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Header from "../layouts/core/Header";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    console.log("Login clicked");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 64px)",
        // background: "linear-gradient(135deg, #6b73ff, #000dff)",
        // background: "linear-gradient(166deg, #fff, #0fccce)",
      }}
    >
      {/* <Header/> */}
      <Card
        sx={{
          maxWidth: 400,
          width: "90%",
          boxShadow: 3,
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: 2,
              color: "#333",
            }}
          >
            Admin Login
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            textAlign="center"
            sx={{ marginBottom: 3 }}
          >
            Welcome back! Please login to your account.
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              InputProps={{
                style: { borderRadius: 8 },
              }}
            />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              margin="normal"
              required
              InputProps={{
                style: { borderRadius: 8 },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography
              variant="body2"
              sx={{ textAlign: "right", marginY: 1, cursor: "pointer" }}
              color="primary"
            >
              Forgot Password?
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                marginTop: 2,
                padding: "10px 0",
                fontSize: "16px",
                borderRadius: 2,
                backgroundColor: "#531674",
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
        </CardContent>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", marginTop: 2 }}
        >
          Don't have an account?{" "}
          <Typography
            component="span"
            sx={{ color: "#000dff", cursor: "pointer", fontWeight: "bold" }}
          >
            Sign Up
          </Typography>
        </Typography>
      </Card>
    </Box>
  );
};

export default LoginPage;
