import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import RouteIcon from "@mui/icons-material/AltRoute";
import TimelineIcon from "@mui/icons-material/Timeline";
import PublicIcon from "@mui/icons-material/Public";
import SendIcon from "@mui/icons-material/Send";

const DataInsights = () => {
  return (
    <Box sx={{ px: { xs: 6, md: 19 }, py: 10 }}>

      <Grid container spacing={3}>

        {/* BIG LEFT CARD */}

        <Grid item xs={12} md={3}>
          <Paper
            sx={{
              p: 5,
              borderRadius: 3,
              border: "1px solid #e4e4e4",
              width: 440,
              height: 80,
              
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: 28, md: 36 },
                color: "#ff5722",
                lineHeight: 1.3
              }}
            >
              Real-Time Data to Power
              <br />
              Your Logistics Decisions
            </Typography>
          </Paper>
        </Grid>

        {/* CARD 1 */}

        <Grid item xs={12} sm={6} md={3}>
          <Card
            icon={<LocationOnIcon />}
            title="Newly added services"
          />
        </Grid>

        {/* CARD 2 */}

        <Grid item xs={12} sm={6} md={3}>
          <Card
            icon={<PersonOutlineIcon />}
            title="Newly Registered Agents"
          />
        </Grid>

        {/* SECOND ROW */}

        <Grid item xs={12} sm={6} md={3}>
          <Card
            icon={<RouteIcon />}
            title="Most popular international routes"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            icon={<TimelineIcon />}
            title="Most popular local routes"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            icon={<PublicIcon />}
            title="Best-performing international Agents"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            icon={<SendIcon />}
            title="Best-performing Domestic Agents"
          />
        </Grid>

      </Grid>

    </Box>
  );
};

const Card = ({ icon, title }) => (
  <Paper
    sx={{
      p: 3,
      borderRadius: 3,
      border: "1px solid #e4e4e4",
      height: 110,     // card height
      width: 200,   // full width of grid
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      justifyContent: "center"
    }}
  >
    {/* ICON */}

    <Box
      sx={{
        width: 45,
        height: 45,
        borderRadius: 2,
        border: "2px solid #ff5722",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ff5722",
        mb: 2
      }}
    >
      {icon}
    </Box>

    {/* TEXT */}

    <Typography
      sx={{
        fontWeight: 600,
        fontSize: 18,
        lineHeight: 1.4
      }}
    >
      {title}
    </Typography>

  </Paper>
);

export default DataInsights;