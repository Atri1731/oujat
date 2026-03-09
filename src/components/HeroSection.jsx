import React from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  IconButton,
  Stack,
  Autocomplete
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import SailingIcon from "@mui/icons-material/Sailing";
import FlightIcon from "@mui/icons-material/Flight";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TrainIcon from "@mui/icons-material/Train";
import HubIcon from "@mui/icons-material/Hub";

const countries = [
  "Afghanistan",
  "Aland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Argentina",
  "Australia",
  "Austria",
  "Bangladesh",
  "Belgium",
  "Brazil",
  "Canada",
  "China",
  "France",
  "Germany",
  "India",
  "Japan",
  "Kenya",
  "Netherlands",
  "Nigeria",
  "South Africa",
  "United Kingdom",
  "United States"
];

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
        px: 2
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        fontWeight={700}
        sx={{
          mb: 3,
          fontSize: { xs: 28, md: 46 },
          fontFamily: "Plus Jakarta Sans, sans-serif"
        }}
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
        {/* FROM */}
        <Box sx={{ flex: 1, textAlign: "left" }}>
          <Typography fontSize={14} fontWeight={600}>
            From
          </Typography>

          <Autocomplete
            options={countries}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Enter Origin Country"
                variant="standard"
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true
                }}
                sx={{
                  "& input": {
                    fontWeight: 600,
                    color: "#000"
                  }
                }}
              />
            )}
          />
        </Box>

        {/* ARROW */}
        <ArrowForwardIcon sx={{ color: "#ff5722", fontSize: 30 }} />

        {/* TO */}
        <Box sx={{ flex: 1, textAlign: "left" }}>
          <Typography fontSize={14} fontWeight={600}>
            To
          </Typography>

          <Autocomplete
            options={countries}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Enter Destination Country"
                variant="standard"
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true
                }}
                sx={{
                  "& input": {
                    fontWeight: 600,
                    color: "#000"
                  }
                }}
              />
            )}
          />
        </Box>

        {/* SEARCH BUTTON */}
        <IconButton
          sx={{
            bgcolor: "#000",
            color: "#fff",
            width: 55,
            height: 55,
            borderRadius: 3,
            "&:hover": { bgcolor: "#333" }
          }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      {/* Transport Icons */}
      <Stack
        direction="row"
        spacing={2}
        mt={4}
        justifyContent="center"
        flexWrap="wrap"
      >
        <Transport icon={<SailingIcon />} label="Ocean / Waterways" />
        <Transport icon={<FlightIcon />} label="Air" />
        <Transport icon={<LocalShippingIcon />} label="Road" />
        <Transport icon={<TrainIcon />} label="Rail" />
        <Transport icon={<HubIcon />} label="Intermodal / Multimodal" />
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
        transition: "0.3s",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)"
        }
      }}
    >
      {icon}
    </Box>

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