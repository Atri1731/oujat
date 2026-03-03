import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";

const Header = () => {

  // MENU STATES
  const [agentMenu, setAgentMenu] = React.useState(null);
  const [currencyMenu, setCurrencyMenu] = React.useState(null);
  const [languageMenu, setLanguageMenu] = React.useState(null);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        backdropFilter: "blur(6px)",
        px: 5,
        py: 1
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>

        {/* LOGO */}
        <Box component="img" src="/logo.png" sx={{ height: 25 }} />

        {/* RIGHT MENU */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

          {/* Become Agent */}
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
          >
            <MenuItem>Become an Agent</MenuItem>
            <MenuItem>Register/Login</MenuItem>
            <MenuItem>Subscription Packages</MenuItem>
            <MenuItem>How It Works</MenuItem>
          </Menu>

          {/* Currency */}
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ color: "#fff", textTransform: "none" }}
            onClick={(e) => setCurrencyMenu(e.currentTarget)}
          >
            USD
          </Button>

          <Menu
            anchorEl={currencyMenu}
            open={Boolean(currencyMenu)}
            onClose={() => setCurrencyMenu(null)}
          >
            <MenuItem>USD</MenuItem>
            <MenuItem>EUR</MenuItem>
            <MenuItem>INR</MenuItem>
            <MenuItem>AED</MenuItem>
          </Menu>

          {/* Language */}
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ color: "#fff", textTransform: "none" }}
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
            {/* <MenuItem>🇪🇸 Spanish</MenuItem>
            <MenuItem>🇮🇳 Hindi</MenuItem> */}
          </Menu>

          {/* Login */}
          <Button
            variant="outlined"
            startIcon={<LoginIcon />}
            sx={{
              color: "#fff",
              borderColor: "#fff",
              textTransform: "none"
            }}
          >
            Login
          </Button>

          {/* Menu Button */}
          <Button
            variant="outlined"
            startIcon={<MenuIcon />}
            sx={{
              color: "#fff",
              borderColor: "#fff",
              textTransform: "none"
            }}
          >
            Menu
          </Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;