import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  ToggleButton,
  ToggleButtonGroup
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const plans = ["Starter", "Business", "Enterprise", "Diamond"];

const Subscription = () => {
  const navigate = useNavigate();
  const [billing, setBilling] = useState("monthly");

  const prices = {
    monthly: ["$10", "$29", "$59", "FREE"],
    yearly: ["$100", "$290", "$590", "FREE"]
  };

  return (
    <Box sx={{ bgcolor: "#f6f6f6", minHeight: "100vh", pt: 6 }}>

      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>

        {/* TITLE */}
        <Typography textAlign="center" fontWeight={700} fontSize={24} mb={2}>
          Select The Right Subscription Plan
        </Typography>

        {/* TOGGLE */}
        <Box display="flex" justifyContent="center" mb={4}>
          <ToggleButtonGroup
            value={billing}
            exclusive
            onChange={(e, val) => val && setBilling(val)}
          >
            <ToggleButton value="monthly">Monthly</ToggleButton>
            <ToggleButton value="yearly">Yearly</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* PLAN CARDS */}
        <Grid container spacing={2} mb={4}>
          {plans.map((plan, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: 3,
                  border: plan === "Diamond" ? "2px solid #000" : "1px solid #ddd",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }
                }}
              >
                <Typography color="#ff5722" fontWeight={700}>
                  {plan}
                </Typography>

                <Typography fontSize={20} mt={1} mb={2}>
                  {prices[billing][i]}
                </Typography>

                <Button
                  fullWidth
                  variant={plan === "Diamond" ? "contained" : "outlined"}
                  onClick={() => {
                    localStorage.setItem("selectedPlan", plan);
                    navigate("/dashboard");
                  }}
                  sx={{
                    bgcolor: plan === "Diamond" ? "#000" : "",
                    color: plan === "Diamond" ? "#fff" : "",
                    textTransform: "none"
                  }}
                >
                  Get Started
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* TABLE */}
        <Section title="Fees & Commissions">
          <Row label="Oujat Protection" values={["4.5%", "4.5%", "4.5%", "4.5%"]} />
          <Row label="Sales Commission" values={["0%", "0%", "0%", "0%"]} />
        </Section>

        <Section title="Customer Service">
          <Row label="24/7 Support" values={[true, true, true, true]} />
          <Row label="Business Review" values={[false, true, true, true]} />
          <Row label="Training Course" values={[false, false, true, true]} />
        </Section>

        <Section title="Business Essentials">
          <Row label="Product Listings" values={["10", "50", "Unlimited", "Unlimited"]} />
          <Row label="Storefront" values={[false, true, true, true]} />
          <Row label="CRM System" values={[false, false, true, true]} />
          <Row label="Online Payment" values={[false, true, true, true]} />
        </Section>

        <Section title="Insight">
          <Row label="Analytics" values={[false, true, true, true]} />
          <Row label="Keyword Trends" values={[false, false, true, true]} />
          <Row label="Product Advisor" values={[false, false, false, true]} />
        </Section>

      </Box>

      <Box mt={6}>
        <Footer />
      </Box>

    </Box>
  );
};

export default Subscription;


/* COMPONENTS */

const Section = ({ title, children }) => (
  <Box mt={5}>
    <Typography fontWeight={700} mb={1}>{title}</Typography>
    <Divider sx={{ borderColor: "#ff5722", mb: 2 }} />
    <Paper>{children}</Paper>
  </Box>
);

const Row = ({ label, values }) => (
  <Grid container sx={{ borderBottom: "1px solid #eee", py: 1, px: 2 }}>
    <Grid item xs={4}>
      <Typography>{label}</Typography>
    </Grid>

    {values.map((val, i) => (
      <Grid item xs={2} key={i} textAlign="center">
        {typeof val === "boolean"
          ? val
            ? <CheckIcon sx={{ color: "green" }} />
            : <CloseIcon sx={{ color: "#ccc" }} />
          : <Typography>{val}</Typography>}
      </Grid>
    ))}
  </Grid>
);