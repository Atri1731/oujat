import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button
} from "@mui/material";

import Footer from "../components/Footer";

const plans = [
  { name: "STARTER", price: "799 / month"},
  { name: "BUSINESS", price: "1499 / month" },
  { name: "ENTERPRISE", price: "2999 / month    " },
  {
    name: "DIAMOND",
    price: "FREE",
    extra: "UNTIL JUNE 1ST, 2028",
    highlight: true
  }
];

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlan = (plan) => {
    setSelectedPlan(plan);                  // ✅ highlight
    localStorage.setItem("selectedPlan", plan); // optional save
  };

  return (
    // <Box sx={{ bgcolor: "#f6f6f6", minHeight: "100vh", py: 6 ,color:"#000"}}>

    <Box
  sx={{
    bgcolor: "#f6f6f6",
    minHeight: "100vh",
    pt: "120px",   // 👈 FIX (increase a bit)
    pb: 6,
    color:"#000"
  }}
>

      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>

        {/* TITLE */}
        <Typography textAlign="center" fontWeight={700} fontSize={32} mb={4}>
                Select The Right Subscription Plan
        </Typography>

        {/* CARDS */}
        <Grid container spacing={3} justifyContent="center">

          {plans.map((plan, index) => {
            const isSelected = selectedPlan === plan.name;

            return (
              <Grid item xs={12} sm={6} md={3} key={index}>

               <Paper
  elevation={0}
  sx={{
    p: 2,
    maxWidth: 260,
    mx: "auto",
    borderRadius: 3,
    border: plan.highlight
      ? "2px solid #ff5722"
      : "1px solid #ddd",
    display: "flex",           // 👈 IMPORTANT
    flexDirection: "column",   // 👈 IMPORTANT
    justifyContent: "space-between", // 👈 PUSH BUTTON DOWN
    textAlign:"center",
    height: "80%",            // 👈 SAME HEIGHT
    minHeight: 240,            // 👈 FORCE ALIGNMENT
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
    }
  }}
>

                  {/* PLAN NAME */}
                  <Typography
                    color="#ff5722"
                    fontWeight={700}
                    fontSize={18}
                    mb={2}
                  >
                    {plan.name}
                  </Typography>

                  {/* PRICE */}
                  <Typography fontSize={22} fontWeight={600} mb={1}>
                    {plan.price}
                  </Typography>

                  {/* EXTRA */}
                  {plan.extra && (
                    <Typography fontSize={12} mb={1} >
                      {plan.extra}
                    </Typography>
                  )}

                  {/* BUTTON */}
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => handlePlan(plan.name)}
                    sx={{
                      bgcolor: isSelected ? "#ff5722" : "#000",
                      borderRadius: 2,
                      py: 1.5,
                      mt:8,
                      textTransform: "none",
                      fontWeight: 600,
                      "&:hover": {
                        bgcolor: isSelected ? "#e64a19" : "#222"
                      }
                    }}
                  >
                    {isSelected ? "Selected" : "Get Started"}
                  </Button>

                </Paper>

              </Grid>
            );
          })}

        </Grid>

      </Box>

      {/* FOOTER */}
      <Box mt={10}>
        <Footer />
      </Box>

    </Box>
  );
};

export default Subscription;