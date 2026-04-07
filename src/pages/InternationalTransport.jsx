import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Chip,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Slider,
  InputAdornment
} from "@mui/material";

import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import TrainIcon from "@mui/icons-material/Train";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";

import Header from "../components/Header";
import Footer from "../components/Footer";

const categories = [
  { label: "Air", icon: <FlightIcon /> },
  { label: "Ocean", icon: <DirectionsBoatIcon /> },
  { label: "Road", icon: <LocalShippingIcon /> },
  { label: "Rail", icon: <TrainIcon /> }
];

// 🔥 REALISTIC DATA
// const data = [
//   {
//     title: "Logistics 360",
//     mode: "Air",
//     price: 1500,
//     rating: 4,
//     protected: true,
//     origin: "Mumbai, India",
//     destination: "Doha, Qatar",
//     image:
//       "https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
//   },
//   {
//     title: "Ocean Cargo Ltd",
//     mode: "Ocean",
//     price: 800,
//     rating: 3,
//     protected: false,
//     origin: "Chennai, India",
//     destination: "Dubai, UAE",
//     image:
//       "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92"
//   },
//   {
//     title: "Rail Express",
//     mode: "Rail",
//     price: 600,
//     rating: 4,
//     protected: true,
//     origin: "Delhi, India",
//     destination: "Nepal",
//     image:
//       "https://images.unsplash.com/photo-1474487548417-781cb71495f3"
//   },
//   {
//     title: "Road Transport Co",
//     mode: "Road",
//     price: 400,
//     rating: 2,
//     protected: false,
//     origin: "Ahmedabad",
//     destination: "Pune",
//     image:
//       "https://images.unsplash.com/photo-1494412651409-8963ce7935a7"
//   }
// ];

const data = [
  {
    title: "Logistics 360",
    mode: "Air",
    price: 1500,
    rating: 4,
    protected: true,
    origin: "Mumbai, India",
    destination: "Doha, Qatar",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
  },
  {
    title: "Sky Freight Ltd",
    mode: "Air",
    price: 1800,
    rating: 5,
    protected: true,
    origin: "Delhi, India",
    destination: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df"
  },
  {
    title: "Global Air Cargo",
    mode: "Air",
    price: 2000,
    rating: 4,
    protected: false,
    origin: "Mumbai, India",
    destination: "USA",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92"
  },

  {
    title: "Ocean Cargo Ltd",
    mode: "Ocean",
    price: 800,
    rating: 3,
    protected: false,
    origin: "Chennai, India",
    destination: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92"
  },
  {
    title: "Blue Sea Logistics",
    mode: "Ocean",
    price: 900,
    rating: 4,
    protected: true,
    origin: "Kolkata, India",
    destination: "Singapore",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7"
  },

  {
    title: "Rail Express",
    mode: "Rail",
    price: 600,
    rating: 4,
    protected: true,
    origin: "Delhi, India",
    destination: "Nepal",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3"
  },
  {
    title: "Fast Rail Cargo",
    mode: "Rail",
    price: 700,
    rating: 3,
    protected: false,
    origin: "Ahmedabad, India",
    destination: "Jaipur",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3"
  },

  {
    title: "Road Transport Co",
    mode: "Road",
    price: 400,
    rating: 2,
    protected: false,
    origin: "Ahmedabad",
    destination: "Pune",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7"
  },
  {
    title: "Fast Truck Logistics",
    mode: "Road",
    price: 500,
    rating: 3,
    protected: true,
    origin: "Mumbai",
    destination: "Bangalore",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7"
  }
];

export default function InternationalTransport() {
  const [category, setCategory] = useState("Air");
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState([100, 2000]);
  const [rating, setRating] = useState(0);
  const [protection, setProtection] = useState(false);

  // 🔥 FILTER LOGIC (AUTO APPLY)
  const filteredData = useMemo(() => {
    return data
      .filter((item) => item.mode === category)
      .filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter(
        (item) =>
          item.price >= priceRange[0] &&
          item.price <= priceRange[1]
      )
      .filter((item) => item.rating >= rating)
      .filter((item) => (protection ? item.protected : true));
  }, [category, search, priceRange, rating, protection]);

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
                    onClick={() => setCategory(cat.label)}
                    sx={{
                        borderRadius: "8px",
                        fontWeight: 500,
                        background:
                            category === cat.label ? "#ff5a1f" : "#fff",
                        color: category === cat.label ? "#fff" : "#000",
                        border: "1px solid #ddd"
                    }}
                />
            ))}
        </Box>

        {/* SEARCH */}
        <Box sx={{ px: 2, pb: 2 }}>
            <TextField
                fullWidth
                placeholder="Search transport..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
            />
        </Box>

        <Grid container spacing={2} sx={{ px: 2 }}>

            {/* SIDEBAR */}
            <Grid item xs={12} md={3}>
                <Paper sx={{ p: 2, borderRadius: "12px" }}>
                    <Typography fontWeight="bold">Filters</Typography>

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={protection}
                                onChange={(e) =>
                                    setProtection(e.target.checked)
                                }
                            />
                        }
                        label="Oujat Protection only"
                    />

                    <Typography mt={2}>Price Range</Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                        <Typography variant="caption" fontWeight="bold">
                            ${priceRange[0]}
                        </Typography>
                        <Typography variant="caption" fontWeight="bold">
                            ${priceRange[1]}
                        </Typography>
                    </Box>
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
                </Paper>
            </Grid>

            {/* CARDS */}
            <Grid item xs={12} md={9}>
                <Grid container spacing={2}>
                    {filteredData.length > 0 ? (
                        filteredData.map((item, i) => (
                            <Grid item xs={12} sm={6} md={4} key={i}>
                                <Card sx={{ borderRadius: "16px" }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={item.image}
                                    />
                                    <CardContent>

                                        <Typography fontWeight="bold">
                                            {item.title}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {item.origin} → {item.destination}
                                        </Typography>

                                        <Typography
                                            color="primary"
                                            mt={1}
                                            fontWeight="bold"
                                        >
                                            ${item.price}
                                        </Typography>

                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            gap={0.5}
                                        >
                                            <StarIcon fontSize="small" />
                                            <Typography variant="caption">
                                                {item.rating}
                                            </Typography>
                                        </Box>

                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <Typography sx={{ p: 3 }}>
                            No results found
                        </Typography>
                    )}
                </Grid>
            </Grid>

        </Grid>

        <Footer />
    </>
);
}
