import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginPopup from "../components/LoginPopup";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogContent,
  Typography,
  Stack,
  Collapse,
  ListItemText
} from "@mui/material";


import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";


const Header = () => {
  const [agentMenu, setAgentMenu] = useState(null);
  const [currencyMenu, setCurrencyMenu] = useState(null);
  const [languageMenu, setLanguageMenu] = useState(null);

  const [menuDropdown, setMenuDropdown] = useState(null);
  const [openCategories, setOpenCategories] = useState(false);

  const [openLogin, setOpenLogin] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currencies, setCurrencies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((response) => response.json())
      .then((data) => {
        const currencyList = Object.keys(data.rates || {});
        setCurrencies(currencyList);
      })
      .catch((error) => {
        console.log("Currency API error:", error);
      });
  }, []);

  return (
    <>
      {/* <AppBar
  position="fixed"
  elevation={0}
  sx={{
    backgroundColor:
      location.pathname === "/subscription"
        ? "#000"                 // ✅ ONLY subscription page
        : scrolled
        ? "#000"
        : "transparent",

    color: "#fff",

    boxShadow:
      location.pathname === "/subscription"
        ? "0 4px 20px rgba(0,0,0,0.3)"
        : scrolled
        ? "0 4px 20px rgba(0,0,0,0.1)"
        : "none",

    px: 5,
    py: 1
  }}
> */}

        <AppBar
  position="fixed"
  elevation={0}
  sx={{
    backgroundColor:
      location.pathname === "/"
        ? scrolled
          ? "#000"          // 👈 scroll on home → black
          : "transparent"   // 👈 top of home → transparent
        : "#000",           // 👈 other pages → always black

    color: "#fff",

    boxShadow:
      location.pathname === "/" && !scrolled
        ? "none"
        : "0 4px 20px rgba(0,0,0,0.3)",

    transition: "all 0.3s ease",   // 👈 smooth effect
    px: 5,
    py: 1
  }}
>

        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box component="img" src="/logo.png" sx={{ height: 25 }} />

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              startIcon={<SettingsIcon />}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ color: "#fff", textTransform: "none" }}
              onClick={(e) => setAgentMenu(e.currentTarget)}
            >
              Become an Agent
            </Button>

            <Menu
              anchorEl={agentMenu}
              open={Boolean(agentMenu)}
              onClose={() => setAgentMenu(null)}
              PaperProps={{
                sx: {
                  width: 240,
                  p: 1
                }
              }}
            >
              <MenuItem
              onClick={ () => setOpenLogin(true)}>
                <PersonOutlineIcon sx={{ mr: 2, color: "#ff5722" }} />
                Register/Login
              </MenuItem>

              {/* <MenuItem>
                <StarBorderIcon sx={{ mr: 2, color: "#ff5722" }} />
                Subscription Packages
              </MenuItem> */}
                <MenuItem
  onClick={() => {
    setAgentMenu(null);
    navigate("/subscription");
  }}
>
  <StarBorderIcon sx={{ mr: 2, color: "#ff5722" }} />
  Subscription Packages
</MenuItem>
              <MenuItem
  onClick={() => {
    setAgentMenu(null);     // close dropdown
    navigate("/agent-guide"); // go to page
  }}
>
  <HelpOutlineIcon sx={{ mr: 2, color: "#ff5722" }} />
  How It Works
</MenuItem>
            </Menu>

            <Button
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ color: "#ffffff", textTransform: "none" }}
              onClick={(e) => setCurrencyMenu(e.currentTarget)}
            >
              USD
            </Button>

            <Menu
              anchorEl={currencyMenu}
              open={Boolean(currencyMenu)}
              onClose={() => setCurrencyMenu(null)}
              PaperProps={{
                sx: {
                  maxHeight: 300
                }
              }}
            >
              {currencies.map((currency) => (
                <MenuItem key={currency}>{currency}</MenuItem>
              ))}
            </Menu>

            <Button
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ color: "#ffffff", textTransform: "none" }}
              onClick={(e) => setLanguageMenu(e.currentTarget)}
            >
              🇺🇸 English
            </Button>

            <Menu
              anchorEl={languageMenu}
              open={Boolean(languageMenu)}
              onClose={() => setLanguageMenu(null)}
            >
              <MenuItem>🇺🇸 English</MenuItem>
              <MenuItem>🇫🇷 French</MenuItem>
            </Menu>

            <Button
              variant="outlined"
              startIcon={<LoginIcon />}
              sx={{
                color: "#fff",
                borderColor:"#fff",
                backgroundColor: "#ffffff44",
                textTransform: "none"
              }}
              onClick={() => setOpenLogin(true)}
              
            >
              Login
            </Button>

            <Button
              variant="outlined"
              startIcon={<MenuIcon />}
              sx={{
                color: "#fff",
                borderColor:"#fff",
                backgroundColor: "#ffffff44",
                textTransform: "none"
              }}
              onClick={(e) => setMenuDropdown(e.currentTarget)}
            >
              Menu
            </Button>

            <Menu
              anchorEl={menuDropdown}
              open={Boolean(menuDropdown)}
              onClose={() => setMenuDropdown(null)}
              PaperProps={{
                sx: {
                  width: 260
                }
              }}
            >
              {/* <MenuItem>
                <HomeOutlinedIcon sx={{ mr: 1 }} />
                Home
              </MenuItem> */}

                              <MenuItem
  onClick={() => {
    setAgentMenu(null);
    navigate("/");
  }}
>
  <HomeOutlinedIcon sx={{ mr: 2, color: "#ff5722" }} />
  Home
</MenuItem>

              <MenuItem onClick={() => setOpenCategories(!openCategories)}>
                <Inventory2OutlinedIcon sx={{ mr: 1, color: "#ff5722" }} />
                <ListItemText primary="Categories" />
                {openCategories ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </MenuItem>

              <Collapse in={openCategories} timeout="auto" unmountOnExit>
                <MenuItem sx={{ pl: 5 }}>All Services</MenuItem>
                {/* <MenuItem sx={{ pl: 5 }}>International Transport</MenuItem> */}
                <MenuItem
  sx={{ pl: 5 }}
  onClick={() => {
    navigate("/international-transport");  // ✅ route
    setMenuDropdown(null);                // ✅ close menu
  }}
>
  International Transport
</MenuItem>
                {/* <MenuItem sx={{ pl: 5 }}>Domestic Transport</MenuItem> */}

                                <MenuItem
  sx={{ pl: 5 }}
  onClick={() => {
    navigate("/compare");  // ✅ route
    setMenuDropdown(null);                // ✅ close menu
  }}
>
  Domestic Transport
</MenuItem>
                {/* <MenuItem sx={{ pl: 5 }}>Customs Services</MenuItem> */}


      <MenuItem
  sx={{ pl: 5 }}
  onClick={() => {
    navigate("/custom-services");  // ✅ route
    setMenuDropdown(null);                // ✅ close menu
  }}
>
  Custom Services
</MenuItem>
                {/* <MenuItem sx={{ pl: 5 }}>Warehouse Services</MenuItem> */}
  <MenuItem
  sx={{ pl: 5 }}
  onClick={() => {
    navigate("/warehouse-services");  // ✅ route
    setMenuDropdown(null);                // ✅ close menu
  }}
>
  Warehouse Services
</MenuItem>
                {/* <MenuItem sx={{ pl: 5 }}>Port Agency Services</MenuItem> */}

                  <MenuItem
  sx={{ pl: 5 }}
  onClick={() => {
    navigate("/port-agent");  // ✅ route
    setMenuDropdown(null);                // ✅ close menu
  }}
>
  Port Agency Services
</MenuItem>
                {/* <MenuItem sx={{ pl: 5 }}>Brokerage Services</MenuItem> */}

    <MenuItem
  sx={{ pl: 5 }}
  onClick={() => {
    navigate("/brokerage");  // ✅ route
    setMenuDropdown(null);                // ✅ close menu
  }}
>
  Brokerage Services
</MenuItem>


              </Collapse>

              <MenuItem>
                <SupportAgentOutlinedIcon sx={{ mr: 1 }} />
                Agent Directory
              </MenuItem>

              <MenuItem>
                <SupportAgentOutlinedIcon sx={{ mr: 1 }} />
                Help
              </MenuItem>

              <MenuItem
  onClick={() => {
    setMenuDropdown(null);     // close menu
    navigate("/agent-guide");  // open page
  }}
>
  <HelpOutlineIcon sx={{ mr: 1, color: "#ff5722" }} />
  How It Works
</MenuItem>

            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <LoginPopup
  open={openLogin}
  handleClose={() => setOpenLogin(false)}
/>

      {/* <Dialog open={openLogin} onClose={() => setOpenLogin(false)}>
        <DialogContent sx={{ textAlign: "center", p: 4, width: 260 }}>
          <Typography fontWeight={600} fontSize={20} mb={3}>
            Login
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="contained" sx={{ bgcolor: "#000" }}>
              Customer
            </Button>

            <Button variant="contained" sx={{ bgcolor: "#000" }}>
              Agent
            </Button>
          </Stack>
        </DialogContent>
      </Dialog> */}
    </>
  );
};

export default Header;