import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";

const services = [
  { title: "Tata Consultancy Services", price: "$450/Liters",image: "domestic1.png" },
  { title: "Carlos & Jaez Logistics", price: "$3/kg", image: "domestic2.png"},
  { title: "Logistics 360", price: "CFA 26500/kg" ,image: "domestic3.png"},
  { title: "CodeSynergi", price: "$20000/kg" ,image: "domestic4.png" },
  { title: "NMIMS", price: "$20000/kg" ,image: "domestic5.png"},
  { title: "Logistics 360", price: "$450/kg", image: "domestic6.png" }
];

const CustomServices = () => {
  return (
    <Box sx={{ bgcolor: "#f7f7f7", minHeight: "100vh", py: 6, mt: 1 }}>

      {/* TITLE */}
    <Typography
  textAlign="center"
  fontSize={28}
  fontWeight={700}
  // mb={5}
  mt={11}
  sx={{ color: "#000" }} // ✅ ADD THIS
>
  Custom Services
</Typography>

      {/* FIXED CENTER CONTAINER */}
      <Box
  sx={{
    bgcolor: "#f7f7f7",
    minHeight: "100vh",
    py: 6,
    mt: 1// ✅ ADD THIS
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
  component="img"
  src={item.image}
  alt={item.title}
  sx={{
    height: 120,
    width: "100%",
    // objectFit: "cover",
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

export default CustomServices;