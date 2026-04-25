import React, { useContext } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Container,
} from "@mui/material";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TrainIcon from "@mui/icons-material/Train";
import FlightIcon from "@mui/icons-material/Flight";
import { TransportContext } from "../context/TransportContext";

// 🔹 Icon logic
const getIcon = (mode) => {
  const style = { color: "#ff5722" };
  switch (mode) {
    case "Ocean":
      return <DirectionsBoatIcon sx={style} />;
    case "Road":
      return <LocalShippingIcon sx={style} />;
    case "Rail":
      return <TrainIcon sx={style} />;
    case "Air":
      return <FlightIcon sx={style} />;
    default:
      return null;
  }
};

const TransportPage = () => {
  const { results } = useContext(TransportContext);
//   console.log("result", results);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #ffffff, #fadec0)",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        {/* HEADER */}
        <Box textAlign="center" mb={5} mt={6} color={"#000000"}>
          <Typography variant="h3" fontWeight="bold">
            Transport Services
          </Typography>
          <Typography color="text.secondary">
            Explore logistics services across all transport modes
          </Typography>
        </Box>

        {/* GRID */}
        {/* <Grid container spacing={4} justifyContent="center">
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card
                sx={{
                  borderRadius: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 70px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={item.image}
                  alt="transport"
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography fontWeight="bold" noWrap>
                      {item.company}
                    </Typography>

                    {item.tag && (
                      <Chip
                        label={item.tag}
                        size="small"
                        sx={{
                          bgcolor: "#2e7d32",
                          color: "#fff",
                          fontWeight: "bold",
                          fontSize: "10px",
                        }}
                      />
                    )}
                  </Box>

                  <Typography sx={{ color: "#ff5722", mt: 1 }}>
                    {item.service}
                  </Typography>

                  <Box mt={2} display="flex" alignItems="center" gap={1}>
                    {getIcon(item.mode)}
                    <Typography variant="body2">
                      {item.mode} Transport
                    </Typography>
                  </Box>

                  <Box mt={3}>
                    <Typography fontWeight="bold">
                      ₹{item.price}/{item.unit}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid> */}
        <Grid container spacing={4} justifyContent="center">
          {results.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={item._id}
              display="flex"
              justifyContent="center"
            >
              <Card
                sx={{
                  borderRadius: 4,
                  width: "300px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 70px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                {/* IMAGE */}
                <CardMedia
                  component="img"
                  height="180"
                  image={`http://localhost:4000${item.image}`}
                  alt="transport"
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography fontWeight="bold" noWrap>
                      {item.company?.name}
                    </Typography>

                    {item.status && (
                      <Chip
                        label={item.status}
                        size="small"
                        sx={{
                          bgcolor: "#2e7d32",
                          color: "#fff",
                          fontWeight: "bold",
                          fontSize: "10px",
                        }}
                      />
                    )}
                  </Box>

                  {/* SERVICE */}
                  <Typography sx={{ color: "#ff5722", mt: 1 }}>
                    {item.serviceTitle}
                  </Typography>

                  <Box mt={1}>
                    <Typography variant="body2">
                      <span style={{ color: "#888", fontWeight: 500 }}>
                        Origin:
                      </span>{" "}
                      {item.origin?.city}, {item.origin?.country}
                    </Typography>
                  </Box>

                  <Box mt={1}>
                    <Typography variant="body2">
                      <span style={{ color: "#888", fontWeight: 500 }}>
                        Destination:
                      </span>{" "}
                      {item.destination?.city}, {item.destination?.country}
                    </Typography>
                  </Box>

                  <Box mt={1}>
                    <Typography
                      variant="body2"
                      sx={{ textTransform: "capitalize" }}
                    >
                      <span style={{ color: "#888", fontWeight: 500 }}>
                        Mode:
                      </span>{" "}
                      {item.mode}
                    </Typography>
                  </Box>
                  {/* PRICE */}
                  <Box mt={3}>
                    <Typography fontWeight="bold">
                      ₹{item.pricing?.amount}/{item.pricing?.unit}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TransportPage;
