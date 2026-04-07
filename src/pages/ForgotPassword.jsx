import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Reset link sent to:", email);
    alert("Reset link sent to your email!");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f6f6f6",
        p: 2
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 400,
          p: 4,
          borderRadius: 3,
          border: "1px solid #ddd",
          textAlign: "center"
        }}
      >
        {/* LOGO */}
        {/* <Typography fontSize={32} fontWeight={700} mb={2}>
          OUJ<span style={{ color: "#ff5722" }}>A</span>T
        </Typography> */}

        <Box sx={{ textAlign: "center", mb: 1}}>
                       <img src="logo2.png" alt="logo" style={{ height: 25 } } />
                            </Box>

        {/* TITLE */}
        <Typography fontSize={26} fontWeight={600} mb={3}>
          Forgot Password
        </Typography>

        {/* EMAIL */}
        <Typography textAlign="left" mb={1}>
          Email
        </Typography>

        <TextField
          fullWidth
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px"
            }
          }}
        />

        {/* BUTTON */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{
            bgcolor: "#ff5722",
            borderRadius: "12px",
            py: 1.5,
            fontWeight: 600,
            textTransform: "none",
            "&:hover": {
              bgcolor: "#e64a19"
            }
          }}
        >
          Reset Password
        </Button>

        {/* BACK */}
        <Typography
          mt={3}
          sx={{ color: "#6a1b9a", cursor: "pointer" }}
          onClick={() => navigate("/customer-login")}
        >
          Back to Login
        </Typography>
      </Paper>
    </Box>
  );
};

export default ForgotPassword;