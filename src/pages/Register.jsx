import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import LoginPopup from "../components/LoginPopup"; // ✅ adjust path if needed

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // ✅ LOGIN POPUP STATE
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 520,
            p: 4,
            borderRadius: 3,
            border: "1px solid #e5e5e5"
          }}
        >
          {/* LOGO */}
          <Typography fontSize={28} fontWeight={700}>
            OUJ<span style={{ color: "#ff5722" }}>A</span>T
          </Typography>

          {/* TITLE */}
          <Typography fontSize={22} fontWeight={600} mt={2}>
            Create Your{" "}
            <span style={{ color: "#ff5722" }}>Shipper Account</span>
          </Typography>

          <Typography fontSize={12} color="gray" mb={3}>
            Enter Basic Details according to following forms
          </Typography>

          {/* FORM */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth placeholder="First Name" size="small" />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth placeholder="Middle Name" size="small" />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth placeholder="Last Name" size="small" />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth placeholder="Email/User ID" size="small" />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth placeholder="Phone Number" size="small" />
            </Grid>

            <Grid item xs={6}>
              <TextField select fullWidth size="small" defaultValue="individual">
                <MenuItem value="individual">Individual</MenuItem>
                <MenuItem value="business">Business</MenuItem>
              </TextField>
            </Grid>

            {/* PASSWORD */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                placeholder="Create Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            {/* CONFIRM PASSWORD */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                placeholder="Confirm Password"
                type={showConfirm ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowConfirm(!showConfirm)}>
                        {showConfirm ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            {/* ADDRESS */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                placeholder="Address"
                size="small"
              />
            </Grid>

            {/* COUNTRY */}
            <Grid item xs={12}>
              <TextField select fullWidth size="small">
                <MenuItem value="">Select Country</MenuItem>
                <MenuItem value="india">India</MenuItem>
                <MenuItem value="usa">USA</MenuItem>
              </TextField>
            </Grid>

            {/* STATE / CITY / ZIP */}
            <Grid item xs={4}>
              <TextField select fullWidth size="small">
                <MenuItem value="">State</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={4}>
              <TextField select fullWidth size="small">
                <MenuItem value="">City</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={4}>
              <TextField fullWidth size="small" placeholder="ZIP Code" />
            </Grid>
          </Grid>

          {/* TERMS */}
          <FormControlLabel
            sx={{ mt: 2 }}
            control={<Checkbox />}
            label={
              <Typography fontSize={12}>
                I agree to the{" "}
                <span style={{ color: "#ff5722" }}>
                  terms and conditions
                </span>
              </Typography>
            }
          />

          {/* BUTTON */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#ff5722",
              borderRadius: "8px",
              py: 1.2,
              fontWeight: 600,
              "&:hover": { bgcolor: "#e64a19" }
            }}
          >
            Next
          </Button>

          {/* LOGIN */}
          <Typography textAlign="center" mt={2} fontSize={13}>
            Already have an account?{" "}
            <span
              style={{ color: "#ff5722", cursor: "pointer" }}
              onClick={() => setOpenLogin(true)} // ✅ OPEN POPUP
            >
              Login
            </span>
          </Typography>
        </Paper>
      </Box>

      {/* LOGIN POPUP */}
      <LoginPopup
        open={openLogin}
        handleClose={() => setOpenLogin(false)}
      />
    </>
  );
};

export default Register;