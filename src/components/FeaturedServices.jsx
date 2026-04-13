import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Domestic Transportation",
    image: "domestic.png",
    route: "/compare"
  },
  {
    title: "Warehousing & Fulfilment",
    image: "warehouse.png",
    route: "/warehouse-services"
  },
  {
    title: "International Transportation",
    image: "world.png",
    route: "/international-transport"
  },
  {
    title: "Customs Services",
    image: "customs.png",
    route: "/custom-services"
  },
  {
    title: "Brokerage Services",
    image: "brokerage.png",
    route: "/brokerage"
  },
  {
    title: "Port Services",
    image: "port.png",
    route: "/port-agent"
  }
];

const FeaturedServices = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 8 }, backgroundColor: "#f9f9f9" }}>

      {/* TITLE */}
      <Typography
        textAlign="center"
        fontWeight={700}
        fontSize={{ xs: 24, md: 32 }}
        color="#000"
        mb={5}
      >
        Featured Service Categories
      </Typography>

      {/* GRID */}
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {services.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <ServiceCard data={item} />
          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

/* ================= CARD ================= */

const ServiceCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Paper
      onClick={() => {
        if (data.route) navigate(data.route);
      }}
      sx={{
        p: 3,
        borderRadius: 3,
        border: "1px solid #e0e0e0",
        height: 180, // ✅ SAME HEIGHT FOR ALL
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: data.route ? "pointer" : "default",
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          transform: "translateY(-4px)"
        }
      }}
    >
      {/* TEXT */}
      <Typography
        sx={{
          color: "#ff5722",
          fontWeight: 600,
          fontSize: 16,
          maxWidth: "50%"
        }}
      >
        {data.title}
      </Typography>

      {/* IMAGE */}
      <Box
        component="img"
        src={data.image}
        alt={data.title}
        sx={{
          height: 100,
          objectFit: "contain"
        }}
      />
    </Paper>
  );
};

export default FeaturedServices;