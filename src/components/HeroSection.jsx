import React from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  IconButton,
  Stack
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import SailingIcon from "@mui/icons-material/Sailing";
import FlightIcon from "@mui/icons-material/Flight";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TrainIcon from "@mui/icons-material/Train";
import HubIcon from "@mui/icons-material/Hub";

const HeroSection = () => {
  return (
    <Box
  sx={{
    height: "100vh",
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)),
      url('/hero-bg.jpg')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    px: 2
  }}
>    
      {/* Heading */}
      <Typography
        variant="h3"
        fontWeight={700}
        color="#ffffff"
        sx={{ mb: 2 }}
        fontSize={46}
        fontFamily={"Plus Jakarta Sans, sans-serif"}
      >
        All logistics services, everywhere
      </Typography>

      {/* Search Box */}
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: 4,
          p: 2,
          gap: 2,
          width: { xs: "100%", md: "750px" }
        }}
      >
        <Box sx={{ flex: 1, textAlign: "left" }}>
          <Typography 
          fontSize={14}
          fontWeight={600}>From</Typography>

        <TextField
            placeholder="Enter Origin Country"
            variant="standard"
            fullWidth
            InputProps={{ disableUnderline: true }}
            sx={{
            "& input": {
                fontWeight: 600,   // 🔥 makes typed text bold
                color: "#000"
            },
            "& input::placeholder": {
                color: "#999",
                opacity: 1,
                fontWeight: 400   // keep placeholder normal
                  }
                }}
            />
        </Box>

        <ArrowForwardIcon sx={{ color: "#ff5722", fontSize: 30 }} />

        <Box sx={{ flex: 1, textAlign: "left" }}>
          <Typography 
            fontSize={14}
            fontWeight={600}>To</Typography>
          {/* <TextField
            placeholder="Enter Destination Country"
            variant="standard"
            fullWidth
                      
            InputProps={{ disableUnderline: true }}
            /> */}

            <TextField
  placeholder="Enter Destination Country"
  variant="standard"
  fullWidth
  InputProps={{ disableUnderline: true }}
  sx={{
    "& input": {
      fontWeight: 600,   // 🔥 makes typed text bold
      color: "#000"
    },
    "& input::placeholder": {
      color: "#999",
      opacity: 1,
      fontWeight: 400   // keep placeholder normal
    }
  }}
/>
        </Box>

        <IconButton
          sx={{
            bgcolor: "#000",
            color: "#fff",
            width: 55,
            borderRadius: 3,
            height: 55,
            "&:hover": { bgcolor: "#4d4747" }
          }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      {/* Transport Icons */}
     <Stack
  direction="row"
  spacing={2}
  mt={3}
  justifyContent="center"
  flexWrap="wrap"
>
  <Transport icon={<SailingIcon fontSize="medium" />} label="Ocean / Waterways" />
  <Transport icon={<FlightIcon fontSize="medium" />} label="Air" />
  <Transport icon={<LocalShippingIcon fontSize="medium" />} label="Road" />
  <Transport icon={<TrainIcon fontSize="medium" />} label="Rail" />
  <Transport icon={<HubIcon fontSize="medium" />} label="Intermodal / Multimodal" />
</Stack>
    </Box>
  );
};

const Transport = ({ icon, label }) => (
  <Box
    sx={{
      width: 150,
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}
  >
    {/* Icon Box */}
    <Box
      sx={{
        width: 40,
        height: 40,
        borderRadius: 3,
        border: "2px solid #ff5722",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ff5722",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        mb: 1.5,
        transition: "all 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)"
        }
      }}
    >
      {icon}
    </Box>

    {/* Label */}
    <Typography
      sx={{
        color: "#fff",
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 1.4
      }}
    >
      {label}
    </Typography>
  </Box>
);

export default HeroSection;