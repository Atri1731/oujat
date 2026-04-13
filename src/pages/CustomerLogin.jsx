//CUSTOMER LOGIN

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Divider,
  Paper,
  Stack
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const CustomerLogin = () => {

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const { login , isAuthenticated } = useAuth();  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleLogin = async () => {
    try {

     const res = await login({
        email: form.email,
        password: form.password
      });
      if (res) {
      navigate("/");
    }

    } catch (err) {
      alert(err);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f6f6f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: 500,
          p: 5,
          borderRadius: 4,
          border: "1px solid #e6e6e6"
        }}
      >
        {/* Logo */}
        <Box sx={{ textAlign: "center", mb: 1,mt:1 }}>
          <img src="logo2.png" alt="logo" style={{ height: 25 } } />
        </Box>

       

         <Typography fontSize={32} fontWeight={700} mb={1} textAlign="center">
                  Welcome to{" "}
                  <span style={{ color: "#ff5722" }}>Oujat.com</span>
                </Typography>

        <Typography
          textAlign="center"
          color="text.secondary"
          mb={2}
        >
          Enter the required information to log into your account
        </Typography>

        
           {/* EMAIL */}
        <Typography fontWeight={600}>Email/User ID</Typography>
        
       <TextField
          fullWidth
          placeholder="Enter Email Address/User ID"
          name="email"
          value={form.email}
          onChange={handleChange}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
                          }
          }}
        />

        {/* Password */}
        <Typography fontWeight={600}>Password</Typography>

        <TextField
          fullWidth
          name="password"
          value={form.password}
          onChange={handleChange}
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          sx={{
            mb: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px"
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        {/* Forgot Password */}
        <Typography
  textAlign="right"
  sx={{ color: "#ff5722", cursor: "pointer" }}
  onClick={() => navigate("/forgot-password")}
>
  Forgot Password?
</Typography>

        {/* Login Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#ff5722",
            borderRadius: "12px",
            height: 50,
            fontSize: 16,
            mb: 3,
            "&:hover": {
              backgroundColor: "#e64a19"
            }
          }}
          onClick={handleLogin}
        >
          Login
        </Button>

        {/* Don't have an account */}
        <Typography textAlign="center" sx={{ mb: 2 }}>
          Don't have an account?{" "}
          <span
            style={{ color: "#ff5722", cursor: "pointer", fontWeight: 600 }}
            onClick={() => navigate("/account-type")}
          >
            Sign up
          </span>
        </Typography>

        {/* Divider */}
        <Divider sx={{ mb: 1}}>Or</Divider>

        {/* Google Login */}
        
        <Stack direction="row" spacing={1}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{
            mb: 1,
            borderRadius: "12px",
            textTransform: "none",
            height: 40
            
          }}
        >
          Sign In With Google
        </Button>

        {/* Apple Login */}
        <Button
          fullWidth
          variant="outlined"
          startIcon={<AppleIcon />}
          sx={{
            borderRadius: "12px",
            textTransform: "none",
            height: 40
          }}
        >
          Sign In With Apple
        </Button>
        </Stack>

      </Paper>
    </Box>
  );
};

export default CustomerLogin;