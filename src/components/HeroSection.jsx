import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  IconButton,
  Stack,
  Autocomplete,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import SailingIcon from "@mui/icons-material/Sailing";
import FlightIcon from "@mui/icons-material/Flight";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TrainIcon from "@mui/icons-material/Train";
import HubIcon from "@mui/icons-material/Hub";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TransportContext } from "../context/TransportContext";

const HeroSection = () => {
  const [countries, setCountries] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [newSource, setNewSource] = useState("");

  const [newDestination, setNewDestination] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const navigate = useNavigate();
  const { setResults, searchTransport } = useContext(TransportContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name",
        );
        const data = await res.json();

        const countryList = data
          .map((c) => c.name.common)
          .sort((a, b) => a.localeCompare(b));

        setCountries(countryList);
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = async () => {
    try {
      if (!source || !destination) {
        alert("Please select source and destination");
        return;
      }
      setLoading(true);
      const data = await searchTransport(source, destination);

      console.log("Returned Data:", data);

      if (!data || data.length === 0) {
        alert("No data found");
        setLoading(false);

        return;
      }
      setLoading(false);
      navigate("/transport-page");
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)),
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
        px: 2,
        py: { xs: 6, md: 0 },
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        fontWeight={700}
        sx={{
          mb: 3,
          fontSize: { xs: 28, md: 46 },
          fontFamily: "Plus Jakarta Sans, sans-serif",
        }}
      >
        All logistics services, everywhere
      </Typography>

      {/* Search Box */}
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // FIXED
          alignItems: "center",
          borderRadius: 4,
          p: { xs: 1.5, md: 2 },
          gap: 2,
          width: {
            xs: "100%",
            sm: "90%",
            md: "750px",
          },
          maxWidth: "750px", // FIXED
        }}
      >
        {/* FROM */}
        <Box sx={{ flex: 1, textAlign: "left", width: "100%" }}>
          <Typography fontSize={14} fontWeight={600}>
            From
          </Typography>

          <Autocomplete
            options={countries || []}
            onChange={(e, value) => setSource(value)} // 🔥 IMPORTANT
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Enter Origin Country"
                variant="standard"
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                }}
              />
            )}
          />
        </Box>

        {/* ARROW */}
        <ArrowForwardIcon
          sx={{
            color: "#ff5722",
            fontSize: 30,
            display: { xs: "none", md: "block" }, // FIXED
          }}
        />

        {/* TO */}
        <Box sx={{ flex: 1, textAlign: "left", width: "100%" }}>
          <Typography fontSize={14} fontWeight={600}>
            To
          </Typography>

          <Autocomplete
            options={countries || []}
            onChange={(e, value) => setDestination(value)} // 🔥 IMPORTANT
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Enter Destination Country"
                variant="standard"
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                }}
              />
            )}
          />
        </Box>

        {/* SEARCH BUTTON */}
        {/* <IconButton
          onClick={handleSearch}
          sx={{
            bgcolor: "#000",
            color: "#fff",
            width: { xs: "100%", md: 55 },
            height: 55,
            borderRadius: 3,
            "&:hover": { bgcolor: "#333" },
          }}
        >
          <SearchIcon />
        </IconButton> */}
        <IconButton
          onClick={handleSearch}
          disabled={loading}
          sx={{
            bgcolor: "#000",
            color: "#fff",
            width: { xs: "100%", md: 55 },
            height: 55,
            borderRadius: 3,
            "&:hover": { bgcolor: "#333" },
          }}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: "#fff" }} />
          ) : (
            <SearchIcon />
          )}
        </IconButton>
      </Paper>

      {/* TRANSPORT OPTIONS */}
      <Stack
        direction="row"
        spacing={1}
        mt={5}
        justifyContent="center"
        flexWrap="wrap" // FIXED
        rowGap={2} // FIXED
        sx={{
          maxWidth: "600px",
        }}
      >
        <Transport icon={<SailingIcon />} label="Ocean / Waterways" />
        <Transport icon={<FlightIcon />} label="Air" />
        <Transport icon={<LocalShippingIcon />} label="Road" />
        <Transport icon={<TrainIcon />} label="Rail" />
        <Transport icon={<HubIcon />} label="Intermodal / Multimodal" />

        <a href="#" style={{ color: "#ff5722", textDecoration: "none" }}>
          ClearAll
        </a>
      </Stack>
    </Box> //HERO SECTION
  );
};

const Transport = ({ icon, label }) => (
  <Box
    sx={{
      width: { xs: 110, sm: 130, md: 150 }, // FIXED
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
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
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
          backgroundColor: "#ff5722",
          color: "#fff",
          borderColor: "#fff",
        },
      }}
    >
      {icon}
    </Box>

    <Typography
      sx={{
        color: "#fff",
        fontWeight: 600,
        fontSize: { xs: 12, md: 16 }, // FIXED
        lineHeight: 1.4,
      }}
    >
      {label}
    </Typography>
  </Box>
);

export default HeroSection;
