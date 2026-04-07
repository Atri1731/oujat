import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Checkbox,
  Select,
  MenuItem
} from "@mui/material";

const services = [
  { name: "Air", cost: "$300/m³" },
  { name: "Rail", cost: "$250/m³" },
  { name: "Road", cost: "$200/m³" },
  { name: "Sea", cost: "$150/m³" }
];

const CompareDomestic = () => {
  return (
    <Box sx={{ bgcolor: "#f6f6f6", minHeight: "100vh" }}>
      
      {/* HEADER */}
      <Box sx={{ py: 5, textAlign: "center", bgcolor: "#efe6df" }}>
        <Typography variant="h4" fontWeight={700}>
          Compare Domestic Transport
        </Typography>
      </Box>

      {/* CONTENT */}
      <Box sx={{ maxWidth: 1400, mx: "auto", px: 2, py: 5 }}>

        {/* FILTERS */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
          <Typography>Compare With</Typography>

          <Select size="small" defaultValue="all">
            <MenuItem value="all">All Features</MenuItem>
          </Select>

          <Box display="flex" alignItems="center">
            <Checkbox />
            <Typography variant="body2">Hide same</Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <Checkbox />
            <Typography variant="body2">Highlight difference</Typography>
          </Box>
        </Box>

        {/* CARDS */}
        <Grid container spacing={2}>
          {services.map((s, i) => (
            <Grid item xs={6} sm={3} key={i}>
              <Paper sx={{ p: 2, textAlign: "center" }}>
                <Typography fontWeight={600}>{s.name}</Typography>
                <Typography color="orange">{s.cost}</Typography>
                <Button size="small">Chat</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* TABLE */}
        <Box sx={{ overflowX: "auto", mt: 4 }}>
          <Box sx={{ minWidth: 800 }}>
            <Row title="Business Since" values={["2009", "2021", "2010", "2020"]} />
            <Row title="Rating" values={["4.6", "4.6", "4.6", "4.6"]} />
            <Row title="Cost" values={["$300", "$250", "$200", "$150"]} />
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

const Row = ({ title, values }) => (
  <Box sx={{ display: "grid", gridTemplateColumns: "200px repeat(4,1fr)" }}>
    <Box sx={{ p: 2, fontWeight: 600 }}>{title}</Box>
    {values.map((v, i) => (
      <Box key={i} sx={{ p: 2, textAlign: "center" }}>{v}</Box>
    ))}
  </Box>
);

export default CompareDomestic;