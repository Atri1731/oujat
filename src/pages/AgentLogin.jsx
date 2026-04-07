import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Divider,
  Stack
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { useNavigate } from "react-router-dom";

const AgentLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // ✅ FIX
        px: 2,              // ✅ mobile padding
        py: 4,              // ✅ vertical spacing
        bgcolor: "#f5f5f5"
      }}
    >
      {/* FORM */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 420,
          p: { xs: 2, sm: 3 }, // ✅ responsive padding
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "#000",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          bgcolor: "#fff"
        }}
      >
        {/* LOGO */}
        <Box sx={{ textAlign: "center", mb: 1 }}>
          <img src="logo2.png" alt="logo" style={{ height: 25 }} />
        </Box>

        {/* TITLE */}
        <Typography
          sx={{
            fontWeight: 700,
            mb: 1,
            textAlign: "center",
            fontSize: { xs: 24, sm: 28, md: 32 } // ✅ responsive text
          }}
        >
          Welcome to{" "}
          <span style={{ color: "#ff5722" }}>Oujat.com</span>
        </Typography>

        <Typography
          sx={{
            color: "gray",
            mb: 2,
            textAlign: "center",
            fontSize: { xs: 13, sm: 14 }
          }}
        >
          Enter the required information to log into your account
        </Typography>

        {/* EMAIL */}
        <Typography fontWeight={600}>Email/User ID</Typography>
        <TextField
          fullWidth
          placeholder="Enter Email Address/User ID"
          sx={{
            my: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px"
            }
          }}
        />

        {/* PASSWORD */}
        <Typography fontWeight={600} mt={1}>
          Password
        </Typography>

        <TextField
          fullWidth
          placeholder="Enter Password"
          type={showPassword ? "text" : "password"}
          sx={{
            my: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px"
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        {/* FORGOT */}
        <Typography
  textAlign="right"
  sx={{
    color: "#ff5722",
    cursor: "pointer",
    mb: 2,
    fontSize: 13
  }}
  onClick={() => navigate("/forgot-password")} // ✅ REDIRECT
>
  Forgot Password?
</Typography>

        {/* LOGIN */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#ff5722",
            py: 1.5,
            borderRadius: 2,
            fontWeight: 600,
            "&:hover": { bgcolor: "#e64a19" }
          }}
        >
          Login
        </Button>

        {/* DIVIDER */}
        <Divider sx={{ my: 2 }}>Or</Divider>

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

        {/* SOCIAL */}
        <Stack
          direction={{ xs: "column", sm: "row" }} // ✅ responsive
          spacing={1}
        >
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{
              borderRadius: "12px",
              textTransform: "none",
              height: 40
            }}
          >
            Sign in with Google
          </Button>

            {/* <Button
  fullWidth
  variant="outlined"
  startIcon={<GoogleIcon />}
  onClick={() => {
    window.open("https://accounts.google.com/signin", "_blank");
  }}
>
  Sign in with Google
</Button> */}

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
            Sign in with Apple
          </Button>
        </Stack>

        {/* SIGNUP */}
        
      </Box>
    </Box>
  );
};

export default AgentLogin;