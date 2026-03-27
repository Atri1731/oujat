import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Chip,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Slider
} from "@mui/material";

import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import TrainIcon from "@mui/icons-material/Train";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import Header from "../components/Header";
import Footer from "../components/Footer";

const categories = [
  { label: "Air", icon: <FlightIcon /> },
  { label: "Ocean", icon: <DirectionsBoatIcon /> },
  { label: "Road", icon: <LocalShippingIcon /> },
  { label: "Rail", icon: <TrainIcon /> }
];

const allCards = [
  {
    title: "Criselox Logistic Limited",
    mode: "Air",
    price: 1500,
    rating: 4,
    protected: true,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
  },
  {
    title: "Ocean Cargo Ltd",
    mode: "Ocean",
    price: 800,
    rating: 3,
    protected: false,
    image:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92"
  },
  {
    title: "Rail Express",
    mode: "Rail",
    price: 600,
    rating: 4,
    protected: true,
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3"
  },
  {
    title: "Road Transport Co",
    mode: "Road",
    price: 400,
    rating: 2,
    protected: false,
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7"
  }
];

export default function InternationalTransport() {
  const [selectedCategory, setSelectedCategory] = useState("Air");

  const [protectionOnly, setProtectionOnly] = useState(false);
  const [priceRange, setPriceRange] = useState([100, 2000]);
  const [rating, setRating] = useState(0);

  const [filteredData, setFilteredData] = useState(allCards);

  // APPLY FILTERS
  const handleApply = () => {
    let data = allCards;

    data = data.filter((item) => item.mode === selectedCategory);

    if (protectionOnly) {
      data = data.filter((item) => item.protected);
    }

    data = data.filter(
      (item) =>
        item.price >= priceRange[0] &&
        item.price <= priceRange[1]
    );

    if (rating > 0) {
      data = data.filter((item) => item.rating >= rating);
    }

    setFilteredData(data);
  };

  // CLEAR FILTERS
  const handleClear = () => {
    setProtectionOnly(false);
    setPriceRange([100, 2000]);
    setRating(0);
    setFilteredData(allCards);
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <Box
        sx={{
          height: 220,
          background:
            "url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05)",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff"
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          International Transport
        </Typography>
      </Box>

      {/* CATEGORY */}
      <Box sx={{ p: 2, display: "flex", gap: 2 }}>
        {categories.map((cat) => (
          <Chip
            key={cat.label}
            icon={cat.icon}
            label={cat.label}
            clickable
            onClick={() => setSelectedCategory(cat.label)}
            color={selectedCategory === cat.label ? "primary" : "default"}
          />
        ))}
      </Box>

      {/* SEARCH */}
      <Box sx={{ px: 2, pb: 2, display: "flex", gap: 2 }}>
        <TextField fullWidth placeholder="Search..." />
        <Button variant="outlined">Filters</Button>
      </Box>

      <Grid container spacing={2} sx={{ px: 2 }}>

        {/* SIDEBAR */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>

            <Typography variant="h6">Filters</Typography>

            <FormControlLabel
              control={
                <Checkbox
                  checked={protectionOnly}
                  onChange={(e) =>
                    setProtectionOnly(e.target.checked)
                  }
                />
              }
              label="Oujat Protection only"
            />

            <Typography mt={2}>Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={(e, val) => setPriceRange(val)}
              min={100}
              max={2000}
            />

            <Typography mt={2}>Customer Ratings</Typography>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => setRating(4)}
                />
              }
              label="4★ & above"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => setRating(3)}
                />
              }
              label="3★ & above"
            />

            <Box mt={2} display="flex" gap={1}>
              <Button
                variant="outlined"
                fullWidth
                onClick={handleClear}
              >
                Clear
              </Button>
              <Button
                variant="contained"
                fullWidth
                onClick={handleApply}
              >
                Apply
              </Button>
            </Box>

          </Paper>
        </Grid>

        {/* CARDS */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            {filteredData.map((card, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card sx={{ borderRadius: 3 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={card.image}
                  />
                  <CardContent>
                    <Typography fontWeight="bold">
                      {card.title}
                    </Typography>

                    <Typography variant="body2">
                      Mode: {card.mode}
                    </Typography>

                    <Typography color="primary" mt={1}>
                      ${card.price}
                    </Typography>

                    <Typography variant="caption">
                      ⭐ {card.rating}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

      </Grid>

      <Footer />
    </>
  );
}