import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const steps = [
  {
    number: "01",
    title: "Go to “Become an Agent” and select “Register”",
    desc: "To create an Agent account on Oujat.com, visit our website and locate the button to register.",
    img: "/images/step1.png"
  },
  {
    number: "02",
    title: "Create an account",
    desc: "Provide information about the company, then upload the required valid business documents.",
    img: "/images/step2.png"
  },
  {
    number: "03",
    title: "Select the plan for journey with us",
    desc: "Choose the best plan (Starter, Business, Enterprise or Diamond) and submit your application.",
    img: "/images/step3.png"
  },
  {
    number: "04",
    title: "Set up your account",
    desc: "Upload logo, list services, and set your business profile.",
    img: "/images/step4.png"
  },
  {
    number: "05",
    title: "Customize your storefront",
    desc: "Add services, locations, images, and company details to grow your presence.",
    img: "/images/step5.png"
  }
];

const HowItWorks = () => {
  return (
    <Box sx={{ bgcolor: "#f6f6f6", pt: "90px", pb: 6 }}>

      {/* TITLE */}
      <Box textAlign="center" mb={6}>
        <Typography fontSize={30} fontWeight={700}>
          How To Register As An Agent And Start Doing Business On Oujat.Com
        </Typography>
      </Box>

      {/* TIMELINE */}
      <Box sx={{ maxWidth: 1100, mx: "auto", position: "relative" }}>

        {/* Vertical Line */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "2px",
            bgcolor: "#ddd",
            transform: "translateX(-50%)"
          }}
        />

        {steps.map((step, index) => (
          <Grid
            container
            spacing={4}
            key={index}
            sx={{ mb: 6, alignItems: "center" }}
          >

            {/* LEFT SIDE */}
            {index % 2 === 0 ? (
              <>
                <Grid item md={6}>
                  <Paper sx={{ p: 2, borderRadius: 3 }}>
                    <Box
                      component="img"
                      src={step.img}
                      alt="step"
                      sx={{ width: "100%", borderRadius: 2 }}
                    />
                  </Paper>
                </Grid>

                <Grid item md={6}>
                  <Content step={step} />
                </Grid>
              </>
            ) : (
              <>
                <Grid item md={6}>
                  <Content step={step} />
                </Grid>

                <Grid item md={6}>
                  <Paper sx={{ p: 2, borderRadius: 3 }}>
                    <Box
                      component="img"
                      src={step.img}
                      alt="step"
                      sx={{ width: "100%", borderRadius: 2 }}
                    />
                  </Paper>
                </Grid>
              </>
            )}

            {/* NUMBER CIRCLE */}
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, 0)",
                bgcolor: "#ff5722",
                color: "#fff",
                width: 40,
                height: 40,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700
              }}
            >
              {step.number}
            </Box>

          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default HowItWorks;


/* REUSABLE CONTENT */
const Content = ({ step }) => (
  <Box>
    <Typography fontWeight={700} fontSize={18} mb={1}>
      {step.title}
    </Typography>

    <Typography color="gray">
      {step.desc}
    </Typography>
  </Box>
);