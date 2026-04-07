import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const steps = [
  {
    title: "Register as an Agent",
    desc: "Go to 'Become an Agent' and create your account.",
    img: "/images/step1.png"
  },
  {
    title: "Create Your Profile",
    desc: "Fill in company details and upload required documents.",
    img: "/images/step2.png"
  },
  {
    title: "Choose Subscription Plan",
    desc: "Select a plan based on your business needs.",
    img: "/images/step3.png"
  },
  {
    title: "Set Up Your Account",
    desc: "Add logo, services, and business location.",
    img: "/images/step4.png"
  },
  {
    title: "Customize Storefront",
    desc: "Enhance your profile and start receiving customers.",
    img: "/images/step5.png"
  }
];

const AgentGuide = () => {
  return (
    <Box sx={{ bgcolor: "#f8f9fb", minHeight: "100vh", py: 6 }}>
      
      {/* HEADER */}
      <Box textAlign="center" mb={5}>
        <Typography fontSize={{ xs: 22, md: 30 }} fontWeight={700}>
          How to Start as an Agent on Oujat
        </Typography>
        <Typography color="gray" mt={1}>
          Follow these simple steps to get started
        </Typography>
      </Box>

      {/* STEPS */}
      <Box sx={{ maxWidth: 900, mx: "auto", px: 2 }}>
        
        {steps.map((step, index) => (
          <Paper
            key={index}
            sx={{
              p: 3,
              mb: 3,
              borderRadius: 3,
              display: "flex",
              gap: 3,
              alignItems: "center",
              boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              },
              flexDirection: { xs: "column", md: "row" }
            }}
          >
            
            {/* STEP NUMBER */}
            <Box
              sx={{
                minWidth: 50,
                height: 50,
                borderRadius: "50%",
                bgcolor: "#ff5722",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 16
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </Box>

            {/* IMAGE */}
            <Box
              sx={{
                width: { xs: "100%", md: 220 },
                height: 140,
                borderRadius: 2,
                background: `url(${step.img}) center/cover`
              }}
            />

            {/* TEXT */}
            <Box>
              <Typography fontWeight={700} fontSize={18}>
                {step.title}
              </Typography>

              <Typography color="gray" fontSize={14} mt={1}>
                {step.desc}
              </Typography>
            </Box>

          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default AgentGuide;