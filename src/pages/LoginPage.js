import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Grid2,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { keyframes } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const backgroundAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const cornerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoginPage = () => {
  const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    navigate("/admin/dashboard")
    console.log("Login clicked");
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 20px",
        background: "#f0f2f5",
      }}
    >
      {/* Background Animation with rotating shapes */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(45deg, #FF008C, #D400FF, #531674, #0080FF)",
          clipPath: "polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)",
          animation: `${backgroundAnimation} 10s linear infinite`,
          opacity: 0.2,
          zIndex: 0,
          width: "300px",
          height: "200px",
        }}
      />

      {/* Corner Animations */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100px",
          height: "100px",
          backgroundColor: "rgba(255, 0, 140, 0.3)",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animation: `${cornerAnimation} 10s linear infinite`,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100px",
          height: "100px",
          backgroundColor: "rgba(0, 128, 255, 0.3)",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animation: `${cornerAnimation} 10s linear infinite`,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100px",
          height: "100px",
          backgroundColor: "rgba(83, 22, 116, 0.3)",
          clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)",
          animation: `${cornerAnimation} 10s linear infinite`,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "100px",
          height: "100px",
          backgroundColor: "rgba(255, 0, 140, 0.3)",
          clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)",
          animation: `${cornerAnimation} 10s linear infinite`,
        }}
      />

      <Typography
        variant="h6"
        color="inherit"
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/logo/exam_logo.jpeg"
          width={42}
          height={42}
          style={{ borderRadius: "50%" }}
          alt="Exam Logo"
        />
      </Typography>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "80vh",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 3,
          boxShadow: 3,
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "100%",
            padding: 4,
            backgroundColor: "#531674",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            borderTopLeftRadius: "16px",
            borderBottomLeftRadius: "16px",
          }}
        >
          <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
            Welcome to Exam Portal
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Please login to your account to access your exam dashboard and manage your tasks.
          </Typography>
          <img
            src="/assets/images/login_img.webp"
            width={300}
            height={200}
            alt="login"
            style={{ marginTop: 20,borderRadius:"7px" }}
          />
        </Box>

        <Box
          sx={{
            width: "50%",
            height: "100%",
            padding: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderTopRightRadius: "16px",
            borderBottomRightRadius: "16px",
          }}
        >
          <Card
            sx={{
              maxWidth: 400,
              width: "100%",
              boxShadow: 3,
              borderRadius: 3,
              animation: `${slideIn} 0.5s ease-out`,
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  display:"flex",
                  justifyContent:"center",
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: 2,
                  color: "#333",
                }}
              >
                <img
                  src="/assets/logo/exam_logo.jpeg"
                  width={42}
                  height={42}
                  style={{ borderRadius: "50%" }}
                  alt="Exam Logo"
                /> Login
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
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
