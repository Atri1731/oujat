import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";

const services = [
  { title: "Carlos & Jaez Logistics", price: "$3Kg", image: "/warehouse1.png" },
  { title: "Logistics 360", price: "$350Kg", image: "/warehouse2.png" },
  { title: "NMIMS", price: "$6000Kg", image: "/warehouse3.png" },
  { title: "Logistics 360", price: "CFA15000Kg", image: "/warehouse4.png" },
  { title: "CodeSynergi", price: "$1200Kg", image: "/warehouse5.png" }
];

const firstRow = services.slice(0, 3);
const secondRow = services.slice(3, 5);

const WarehouseServices = () => {
  return (
    <Box sx={{ bgcolor: "#f7f7f7", minHeight: "100vh", py: 6 }}>

      {/* TITLE */}
      <Typography textAlign="center" fontSize={28} fontWeight={700} mb={5} mt={11} sx={{ color: "#000" }}>
        Warehouse Services
      </Typography>

      <Box sx={{ maxWidth: 1100, mx: "auto", px: 2 }}>

        {/* ROW 1 → 3 CARDS */}
        <Grid container spacing={4} mb={3} justifyContent="center" alignItems="center" >
          {firstRow.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card item={item} />
            </Grid>
          ))}
        </Grid>

        {/* ROW 2 → 2 CARDS CENTERED */}
        <Grid container spacing={3} justifyContent="center">
          {secondRow.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card item={item} />
            </Grid>
          ))}
        </Grid>

      </Box>
    </Box>
  );
};

/* CARD COMPONENT */
const Card = ({ item }) => (
  <Paper
    sx={{
      p: 2,
      borderRadius: 3,
      height: 280,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transition: "0.3s",
      "&:hover": {
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        transform: "translateY(-4px)"
      }
    }}
  >

    <Box
      component="img"
      src={item.image}
      alt={item.title}
      sx={{
        height: 130,
        width: "100%",
        objectFit: "cover",
        borderRadius: 2,
        mb: 2
      }}
    />

    <Typography fontWeight={600}>{item.title}</Typography>

    <Typography color="#ff5722" fontSize={13}>
      Warehouse Services
    </Typography>

    <Typography fontWeight={600}>
      From {item.price}
    </Typography>

    <Button
      variant="contained"
      sx={{
        mt: 1,
        bgcolor: "#ff5722",
        "&:hover": { bgcolor: "#e64a19" }
      }}
    >
      View Details
    </Button>

  </Paper>
);

export default WarehouseServices;