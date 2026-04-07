import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";

const services = [
  { title: "Tata Consultancy Services", price: "$450/Liters" },
  { title: "Carlos & Jaez Logistics", price: "$3/kg" },
  { title: "Logistics 360", price: "CFA 26500/kg" },
  { title: "CodeSynergi", price: "$20000/kg" },
  { title: "NMIMS", price: "$20000/kg" },
  { title: "Logistics 360", price: "$450/kg" }
];

const DomesticCitywide = () => {
  return (
    <Box sx={{ bgcolor: "#f7f7f7", minHeight: "100vh", py: 6 }}>

      {/* TITLE */}
      <Typography textAlign="center" fontSize={28} fontWeight={700} mb={5}>
        Available Domestic Transport Services
      </Typography>

      {/* FIXED CENTER CONTAINER */}
      <Box
        sx={{
          maxWidth: 1000,   // ✅ VERY IMPORTANT
          mx: "auto"
        }}
      >

        <Grid
          container
          spacing={4}
          justifyContent={"center"}
        >
          {services.map((item, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}   // ✅ 3 CARDS PER ROW
              key={i}
            >
              
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 3,
                  height: 250,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center"
                }}
              >
                <Box
                  sx={{
                    height: 100,
                    bgcolor: "#e0e0e0",
                    borderRadius: 2,
                    mb: 2
                  }}
                />

                <Typography fontWeight={600}>
                  {item.title}
                </Typography>

                <Typography color="#ff5722">
                  From {item.price}
                </Typography>

                <Button
                  variant="contained"
                  sx={{ bgcolor: "#ff5722" }}
                >
                  View Details
                </Button>

              </Paper>

            </Grid>
          ))}
        </Grid>

      </Box>
    </Box>
  );
};

export default DomesticCitywide;