import React from "react";
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

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";  
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

const AgentLogin = () => {
  return (
    <Box sx={{ display: "flex",alignItems:"center",height: "100vh",justifyContent: "center"}}>

      {/* LEFT SIDE (FORM) */}
 <Box
  sx={{
    width: "100%",
    maxWidth: 420,
    p: { xs: 2, md: 3 },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#000",
    borderRadius: "20px",   // 👈 now visible
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    bgcolor: "#fff"
  }}
>
        {/* LOGO */}
        {/* <Typography fontSize={32} fontWeight={500} mb={2}>
          OUJ<span style={{ color: "#ff5722" }}> */}
            {/* <Box component="img" src="logo2.png" sx={{ width:100,color:"#000" }} /> */}


            <Box sx={{ textAlign: "center", mb: 1}}>
               <img src="logo2.png" alt="logo" style={{ height: 25 } } />
                    </Box>
          {/* </span>T
        </Typography> */}

        {/* TITLE */}
        <Typography fontSize={32} fontWeight={700} mb={1} textAlign="center">
          Welcome to{" "}
          <span style={{ color: "#ff5722" }}>Oujat.com</span>
        </Typography>

        <Typography color="gray" mb={1} textAlign="center" >
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
      borderRadius: "12px"   // 👈 THIS is correct
    }
  }}
/>

        {/* PASSWORD */}
        <Typography fontWeight={600} mt={1}>Password</Typography>
        
     <TextField
  fullWidth
  placeholder="Enter Password"
  type="password"
  sx={{
    my: 1,
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px"
      
    }
  }}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton>
          <VisibilityOffIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
/>

        {/* FORGOT */}
        <Typography
          textAlign="right"
          sx={{ color: "#ff5722", cursor: "pointer", mb: 1 }}
        >
          Forgot Password?
        </Typography>

        {/* LOGIN BUTTON */}
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
        <Divider sx={{ my: 1 }}>Or</Divider>

        {/* SOCIAL LOGIN */}
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


        {/* SIGNUP */}
        <Typography mt={3} textAlign="center">
          Don’t have an account?{" "}
          <span style={{ color: "#ff5722", cursor: "pointer" }}>
            Signup
          </span>
        </Typography>
      </Box>

      {/* RIGHT SIDE (DASHBOARD PREVIEW) */}
      {/* <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          background: "#ff5722",
          position: "relative"
        }}
      >
        <Box
          sx={{
            width: "80%",
            bgcolor: "#fff",
            borderRadius: 3,
            p: 3
          }}
        >
          <Typography fontWeight={700} mb={2}>
            Good Morning, Maria
          </Typography>

          <Typography color="gray">
            Dashboard preview UI here
          </Typography>
        </Box>
      </Box> */}

    </Box>
  );
};

export default AgentLogin;