import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const services = [
  {
    title: "Domestic Transportation",
    image: "domestic.png"
  },
  {
    title: "Warehousing & Fulfilment",
    image: "warehouse.png"
  },
  {
    title: "International Transportation",
    image: "world.png",
    large: true
  },
  {
    title: "Customs Services",
    image: "customs.png"
  },
  {
    title: "Brokerage Services",
    image: "brokerage.png"
  },
  {
    title: "Port Services",
    image: "port.png"
  }
];

const FeaturedServices = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 8 }, backgroundColor: "#f9f9f9" }}>

      {/* TITLE */}
      <Typography
        textAlign="center"
        fontWeight={700}
        color="#000"    
        fontSize={35}
        mb={4}
        
      >
        Featured Service Categories
      </Typography>

      {/* GRID */}
      <Grid container spacing={3} justifyContent="center">

        {/* TOP 2 CARDS */}
        {services.slice(0, 2).map((item, i) => (
          <Grid item xs={12} md={6} key={i}>
            <ServiceCard data={item} />
          </Grid>
        ))}

        {/* BIG CARD */}
        <Grid item xs={12} width={1000} >
          <ServiceCard data={services[2]} large />
        </Grid>

        {/* BOTTOM 3 CARDS */}
        {services.slice(3).map((item, i) => (
          <Grid item xs={12} md={4} key={i} width={318}>
            <ServiceCard data={item} />
          </Grid>
        ))}

      </Grid>
    </Box>
  );
};

export default FeaturedServices;


/* ================= CARD ================= */

const ServiceCard = ({ data, large }) => {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 3,
        border: "1px solid #e0e0e0",
        height: large ? 220 : 160,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
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
          fontSize: 18,
          maxWidth: "40%"
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
          height: large ? 180 : 120,
          objectFit: "contain"
        }}
      />

    </Paper>
  );
};