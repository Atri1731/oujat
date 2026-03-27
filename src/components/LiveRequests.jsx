import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper
} from "@mui/material";

import FlightIcon from "@mui/icons-material/Flight";

/* =========================
   DUMMY DATA (You can replace with API later)
========================= */
const requests = [
  {
    from: "Mumbai, India",
    to: "Doha, Saudi Arabia",
    id: "#1234D",
    date: "23/11/2024 01:00 AM",
    category: "Chemical Elements",
    mode: "Air"
  },
  {
    from: "Delhi, India",
    to: "Dubai, UAE",
    id: "#5678A",
    date: "24/11/2024 03:00 PM",
    category: "Electronics",
    mode: "Air"
  },
  {
    from: "Chennai, India",
    to: "Singapore",
    id: "#9123B",
    date: "22/11/2024 09:00 AM",
    category: "Textiles",
    mode: "Air"
  },
  {
    from: "Kolkata, India",
    to: "Bangkok, Thailand",
    id: "#7788C",
    date: "25/11/2024 11:30 AM",
    category: "Machinery",
    mode: "Air"
  },
  {
    from: "Ahmedabad, India",
    to: "Doha, Qatar",
    id: "#9988D",
    date: "21/11/2024 07:15 PM",
    category: "Pharmaceuticals",
    mode: "Air"
  },
  {
    from: "Hyderabad, India",
    to: "London, UK",
    id: "#5566E",
    date: "26/11/2024 02:45 PM",
    category: "Medical Supplies",
    mode: "Air"
  },
  {
    from: "Pune, India",
    to: "New York, USA",
    id: "#3322F",
    date: "20/11/2024 06:00 AM",
    category: "Automobile Parts",
    mode: "Air"
  },
  {
    from: "Surat, India",
    to: "Dubai, UAE",
    id: "#4455G",
    date: "23/11/2024 08:30 PM",
    category: "Diamonds",
    mode: "Air"
  }
];

/* =========================
   MAIN COMPONENT
========================= */
const LiveRequests = () => {
  return (
    <Box
      sx={{
        py: 5,
        px: { xs: 2, md: 8 },
        backgroundColor: "#ffffff"
      }}
    >
      {/* TITLE */}
      <Typography
        textAlign="center"
        fontWeight={700}
        fontSize={{ xs: 24, md: 32 }}
        mb={5}
        sx={{color:"#000"}}
      >
        Live Requests Worldwide{" "} 
        <span style={{ color: "#ff5722" }}>[4,520]</span>
      </Typography>

      {/* GRID */}
      <Grid container spacing={3} justifyContent="center">
        {requests.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <RequestCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LiveRequests;

/* =========================
   CARD COMPONENT
========================= */
const RequestCard = ({ data }) => {
  return (
    <Paper
      sx={{
        width: "370px",
        height: "135px",
        p: 2,
        borderRadius: 3,
        border: "1px solid #e0e0e0",
        backgroundColor: "#ffffff",
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)"
        }
      }}
    >
      {/* ROUTE SECTION */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#f5f5f5",
          p: 1.5,
          borderRadius: 2,
          mb: 2
        }}
      >
        <Typography fontSize={14}>🇮🇳 {data.from}</Typography>

        <Typography
          sx={{
            color: "#ff5722",
            fontWeight: 600,
            mx: 1
          }}
        >
          → To →
        </Typography>

        <Typography fontSize={14}>🌍 {data.to}</Typography>
      </Box>

      {/* DETAILS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        {/* LEFT */}
        <Box>
          <Typography fontSize={12} color="gray">
            Request ID
          </Typography>
          <Typography fontSize={14}>{data.id}</Typography>

          <Typography fontSize={12} color="gray" mt={1}>
            Posted On
          </Typography>
          <Typography fontSize={14}>{data.date}</Typography>
        </Box>

        {/* RIGHT */}
        <Box textAlign="right">
          <Typography fontSize={12} color="gray">
            Shipment Mode
          </Typography>

          <Typography
            fontSize={14}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            gap={0.5}
          >
            <FlightIcon sx={{ fontSize: 16, color: "#ff5722" }} />
            {data.mode}
          </Typography>

          <Typography fontSize={12} color="gray" mt={1}>
            Category
          </Typography>
          <Typography fontSize={14}>{data.category}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};