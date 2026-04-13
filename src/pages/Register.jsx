
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Snackbar,
  Alert
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  //  FORM STATE
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    state: "",
    city: "",
    password: "",
    confirmPassword: "",
    accountType: "individual"
  });

  const [errors, setErrors] = useState({});

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  // ✅ HANDLE CHANGE
 const handleChange = (e) => {
  const { name, value } = e.target;

  setForm({
    ...form,
    [name]: value
  });

  // 🔥 REAL-TIME FIX
  setErrors((prev) => {
    let updated = { ...prev };

    if (value.trim() !== "") {
      delete updated[name]; // remove error
    }

    return updated;
  });
};
  // ✅ VALIDATION
  const validate = () => {
    let temp = {};

    // if (!form.firstName) temp.firstName = "First name is required";

    if (!form.firstName.trim())
  temp.firstName = "First name is required";

if (!form.lastName.trim())
  temp.lastName = "Last name is required";

    if (!form.email) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      temp.email = "Invalid email format";

    if (!form.phone) temp.phone = "Phone is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      temp.phone = "Enter valid 10-digit number";

    if (!form.address) temp.address = "Address is required";
    if (!form.country) temp.country = "Country is required";
    if (!form.state) temp.state = "State is required";
    if (!form.city) temp.city = "City is required";

    if (!form.password) temp.password = "Password is required";
    else if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password))
      temp.password = "Min 8 chars, 1 uppercase & 1 number required";

    if (!form.confirmPassword)
      temp.confirmPassword = "Confirm password required";
    else if (form.password !== form.confirmPassword)
      temp.confirmPassword = "Passwords do not match";

    setErrors(temp);

    if (Object.keys(temp).length > 0) {
      setSnackbar({
        open: true,
        message: "Please fix all fields",
        severity: "error"
      });
      return false;
    }

    return true;
  };

  // ✅ REGISTER API
//   const handleRegister = async () => {
//     if (!validate()) return;

//     try {
//       console.log("form", form);
//    const res = await axios.post("http://localhost:4000/api/auth/register", {
//   name: form.firstName + " " + form.lastName, 
//   email: form.email,
//   password: form.password,
//   phone: form.phone,
//   address: form.address,
//   country: form.country,
//   state: form.state,
//   city: form.city,
//   accountType: form.accountType
// });

//       console.log("API RESPONSE:", res.data); // ✅ ADD THIS
//       setSnackbar({
//         open: true,
//         message: "✅ Registered Successfully",
//         severity: "success"
//       });

//       setTimeout(() => {
//         navigate("/");
//       }, 1000);

//       // RESET
//       setForm({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         address: "",
//         country: "",
//         state: "",
//         city: "",
//         password: "",
//         confirmPassword: "",
//         accountType: "individual"
//       });

//     } catch (err) {
//       // setSnackbar({
//       //   open: true,
//       //   message: err.response?.data?.message || "Registration Failed",
//       //   severity: "error"
//       // });
//     }
//   };
 const handleRegister = async () => {
    if (!validate()) return;

    try {
    console.log("FORM DATA:", form);
    await axios.post("http://localhost:4000/api/auth/register", {
  name: form.firstName + " " + form.lastName,
  email: form.email,
  password: form.password,
  phone: form.phone,
  address: form.address,
  country: form.country,
  state: form.state,
  city: form.city
});

     setSnackbar({
  open: true,
  message: "✅ Registered Successfully",
  severity: "success",
 
});

// redirect after 1 second
setTimeout(() => {
  navigate("/customer-login");
}, 1000);

      // RESET
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        country: "",
        state: "",
        city: "",
        password: "",
        confirmPassword: ""
      });

    } catch (err) {
      setSnackbar({
        open: true,
        message: err.response?.data?.message || "Registration Failed",
        severity: "error"
      });
    }
  };


  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#f5f5f5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2
        }}
      >
        <Paper sx={{ width: 600, p: 4, borderRadius: 3 }}>

          {/* LOGO */}
          <Typography fontSize={26} fontWeight={700}>
            OUJ<span style={{ color: "#ff5722" }}>A</span>T
          </Typography>

          <Typography fontSize={20} fontWeight={600} mt={1}>
            Create Account
          </Typography>

          {/* 🔥 ACCOUNT TYPE */}
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button
              fullWidth
              variant={form.accountType === "individual" ? "contained" : "outlined"}
              sx={{
                bgcolor: form.accountType === "individual" ? "#ff5722" : ""
              }}
              onClick={() =>
                setForm({ ...form, accountType: "individual" })
              }
            >
              Individual
            </Button>

            <Button
              fullWidth
              variant={form.accountType === "business" ? "contained" : "outlined"}
              sx={{
                bgcolor: form.accountType === "business" ? "#ff5722" : ""
              }}
              onClick={() =>
                setForm({ ...form, accountType: "business" })
              }
            >
              Business
            </Button>
          </Box>

          <Grid container spacing={2} mt={1}>

            <Grid item xs={6}>
              <TextField fullWidth label="First Name" name="firstName"
                value={form.firstName} onChange={handleChange}
                error={!!errors.firstName} helperText={errors.firstName} />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth label="Last Name" name="lastName"
                value={form.lastName} onChange={handleChange}
                error={!!errors.lastName} helperText={errors.lastName} />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth label="Email" name="email"
                value={form.email} onChange={handleChange}
                error={!!errors.email} helperText={errors.email} />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth label="Phone" name="phone"
                value={form.phone} onChange={handleChange}
                error={!!errors.phone} helperText={errors.phone} />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth label="Address" name="address"
                value={form.address} onChange={handleChange}
                error={!!errors.address} helperText={errors.address} />
            </Grid>

            <Grid item xs={4}>
              <TextField fullWidth label="Country" name="country"
                value={form.country} onChange={handleChange}
                error={!!errors.country} helperText={errors.country} />
            </Grid>

            <Grid item xs={4}>
              <TextField fullWidth label="State" name="state"
                value={form.state} onChange={handleChange}
                error={!!errors.state} helperText={errors.state} />
            </Grid>

            <Grid item xs={4}>
              <TextField fullWidth label="City" name="city"
                value={form.city} onChange={handleChange}
                error={!!errors.city} helperText={errors.city} />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
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

            <Grid item xs={12}>
  <TextField
    fullWidth
    size="small"
    label="Confirm Password"
    name="confirmPassword"
    type={showConfirm ? "text" : "password"}
    value={form.confirmPassword}
    onChange={handleChange}
    error={!!errors.confirmPassword}
    helperText={errors.confirmPassword}
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

          </Grid>

          <FormControlLabel
            control={<Checkbox />}
            label="I agree to terms and conditions"
            sx={{ mt: 2 }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#ff5722",
              transition: "0.3s",
              "&:hover": {
                bgcolor: "#e64a19",
                transform: "scale(1.03)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)"
               
              }
            }}
            onClick={handleRegister}
          >
            Register
          </Button>

        </Paper>
      </Box>

      {/* SNACKBAR */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Register;