import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button
} from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LanguageIcon from "@mui/icons-material/Language";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PaymentsIcon from "@mui/icons-material/Payments";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import PublicIcon from "@mui/icons-material/Public";

/* ================= WHY OUJAT DATA ================= */

const features = [
  { 
    icon: <AccessTimeIcon />,
    title: "Save time and money",
    desc: "Streamline your logistics to achieve cost efficiency and faster deliveries."
  },
  {
    icon: <LanguageIcon />,
    title: "Browse listed logistics routes and services worldwide",
    desc: "Explore a global network of logistics routes and tailored services at your fingertips."
  },
  {
    icon: <DashboardIcon />,
    title: "Manage all shipments from your dashboard",
    desc: "Gain full control of your logistics with an all-in-one shipment management dashboard."
  },
  {
    icon: <BusinessCenterIcon />,
    title: "Do business with trusted logistics companies through Oujat Protection",
    desc: "Partner confidently with verified logistics companies backed by Oujat Protection."
  },
  {
    icon: <SupportAgentIcon />,
    title: "Enjoy 24/7 customer support",
    desc: "Experience seamless assistance anytime with our dedicated 24/7 customer support."
  },
  {
    icon: <PaymentsIcon />,
    title: "Pay for your services through our platform",
    desc: "Make secure and hassle-free payments directly through our platform."
  },
  {
    icon: <CompareArrowsIcon />,
    title: "Request and compare multiple Ocean, Air, Road, and Rail freight quotes",
    desc: "Get competitive quotes across Ocean, Air, Road, and Rail freight options, all in one place."
  },
  {
    icon: <PublicIcon />,
    title: "If you are in Africa, use your local mobile money service to make payments",
    desc: "Conveniently pay using your local mobile money service when in Africa."
  }
];

/* ================= FEATURED SERVICES ================= */

const services = [
  {
    image: "air.png",
    title: "Crisleo Logistic Limited",
    price: "₹8500"
  },
  {
    image: "ship.png",
    title: "Crisleo Logistic Limited",
    price: "₹9200"
  },
  {
    image: "container.png",
    title: "Crisleo Logistic Limited",
    price: "₹7800"
  },
  {
    image: "warehouse2.png",
    title: "Crisleo Logistic Limited",
    price: "₹8800"
  },
  {
    image: "truck.png",
    title: "Crisleo Logistic Limited",
    price: "₹8600"
  },
  {
    image: "port2.png",
    title: "Crisleo Logistic Limited",
    price: "₹9100"
  }
];

/* ================= MAIN COMPONENT ================= */

const WhyOujat = () => {
  return (
    <Box sx={{ py:1, px: { xs: 2, md: 8 }, backgroundColor: "#f9f9f9" }}>

      {/* ================= WHY SECTION ================= */}
      <Typography
        textAlign="center"
        fontWeight={700}
        fontSize={35}
        mb={4}
        color="#000"
        
            >
        Why Oujat.com?
      </Typography>


      <Grid container spacing={3} mb={10} marginLeft={10}>
        {features.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            <FeatureCard data={item} index={i + 1} />
          </Grid>
        ))}
      </Grid>

      {/* ================= FEATURED SERVICES ================= */}
      <Typography
        textAlign="center"
        fontWeight={700}
        fontSize={35}
        mb={6}
        color="#000"
      >
        Featured Services
      </Typography>

      <Grid container spacing={3} mb={10} justifyContent="center">
        {services.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <ServiceCard data={item} />
          </Grid>
        ))}
      </Grid>

      {/* BUTTON */}
      {/* <Box textAlign="center" mt={5}>
        <Button
          variant="contained"
          sx={{
           
            bgcolor: "#000",
            borderRadius: 2,
            px: 4,
            "&:hover": { bgcolor: "#333" }
          }}
        >
          View all services
        </Button>
      </Box> */}

    </Box>
  );
};

export default WhyOujat;

/* ================= FEATURE CARD ================= */

const FeatureCard = ({ data, index }) => {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 3,
        border: "1px solid #e0e0e0",
        height: 150,
        width: 300,
        display: "flex",
        
        flexDirection: "column",
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)"
        }
      }}
    >
      <Typography fontSize={12} color="gray" mb={1}>
        {index.toString().padStart(2, "0")}
      </Typography>

      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: 2,
          border: "2px solid #ff5722",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ff5722",
          mb: 2
        }}
      >
        {data.icon}
      </Box>

      <Typography fontWeight={600} fontSize={14}>
        {data.title}
      </Typography>

      <Typography fontSize={12} color="gray">
        {data.desc}
      </Typography>
    </Paper>
  );
};

/* ================= SERVICE CARD ================= */

const ServiceCard = ({ data }) => {
  return (
    <Paper
      sx={{
        borderRadius: 3,
        width: 300,
        overflow: "hidden",
        border: "1px solid #e0e0e0",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
        }
      }}
    >
      {/* IMAGE */}
      <Box
        component="img"
        src={data.image}
        sx={{
          width: "100%",
          height: 150,
          objectFit: "cover"
        }}
      />

      {/* CONTENT */}
      <Box sx={{ p: 2 }}>
        <Typography fontWeight={600}>{data.title}</Typography>

        <Typography color="gray" fontSize={13}>
          Logistics Service
        </Typography>

        <Typography mt={1} fontWeight={600} color="#ff5722">
          From {data.price}
        </Typography>
      </Box>
    </Paper>
  );
};