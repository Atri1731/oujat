import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BusinessIcon from "@mui/icons-material/Business";
import { useNavigate } from "react-router-dom";

const AccountType = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f6f6f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 500,
          p: 4,
          borderRadius: 3,
          border: "1px solid #e6e6e6"
        }}
      >
        {/* LOGO */}
        <Typography fontSize={32} fontWeight={700} mb={2}>
          OUJ<span style={{ color: "#ff5722" }}>A</span>T
        </Typography>

        {/* TITLE */}
        <Typography fontSize={22} fontWeight={600} mb={4}>
          Create your{" "}
          <span style={{ color: "#ff5722" }}>
            shipper's account
          </span>
        </Typography>

        {/* OPTIONS */}
        <Box display="flex" gap={2}>

          {/* INDIVIDUAL */}
          <Box
            onClick={() => navigate("/register?type=individual")}
            sx={{
              flex: 1,
              border: "1px solid #ddd",
              borderRadius: 3,
              p: 3,
              textAlign: "center",
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": {
                borderColor: "#ff5722",
                transform: "translateY(-3px)"
              }
            }}
          >
            <PersonOutlineIcon sx={{ fontSize: 40, mb: 1 }} />
            <Typography fontWeight={500}>
              Individual
            </Typography>
          </Box>

          {/* BUSINESS */}
          <Box
            onClick={() => navigate("/register?type=business")}
            sx={{
              flex: 1,
              border: "1px solid #ddd",
              borderRadius: 3,
              p: 3,
              textAlign: "center",
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": {
                borderColor: "#ff5722",
                transform: "translateY(-3px)"
              }
            }}
          >
            <BusinessIcon sx={{ fontSize: 40, mb: 1 }} />
            <Typography fontWeight={500}>
              Business
            </Typography>
          </Box>

        </Box>
      </Paper>
    </Box>
  );
};

export default AccountType;