import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Stack,
  Dialog,
  DialogContent
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {

  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          background: "transparent",
          px: { xs: 2, md: 6 }
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>

          {/* Logo */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              letterSpacing: 1
            }}
          >
            OUJ<span style={{ color: "#ff5722" }}>A</span>T
          </Typography>

          {/* Right Menu */}
          <Stack direction="row" spacing={2} alignItems="center">

            <Button
              color="inherit"
              endIcon={<ExpandMoreIcon />}
            >
              Become an Agent
            </Button>

            <Button
              color="inherit"
              endIcon={<ExpandMoreIcon />}
            >
              USD
            </Button>

            <Button
              color="inherit"
              endIcon={<ExpandMoreIcon />}
            >
              English
            </Button>

            {/* Login Button */}
            <Button
              variant="outlined"
              startIcon={<LoginIcon />}
              onClick={() => setOpenLogin(true)}
              sx={{
                color: "#fff",
                borderColor: "#fff",
                borderRadius: 2,
                px: 2
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
                borderRadius: 2,
                px: 2
              }}
            >
              Menu
            </Button>

          </Stack>

        </Toolbar>
      </AppBar>

      {/* Login Popup */}
      <Dialog
        open={openLogin}
        onClose={() => setOpenLogin(false)}
      >
        <DialogContent
          sx={{
            width: 260,
            textAlign: "center",
            p: 4
          }}
        >
          <Typography fontWeight={600} fontSize={20} mb={3}>
            Login
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">

            <Button
              variant="contained"
              sx={{
                bgcolor: "#000",
                borderRadius: 2,
                px: 3,
                "&:hover": { bgcolor: "#333" }
              }}
            >
              Customer
            </Button>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#000",
                borderRadius: 2,
                px: 3,
                "&:hover": { bgcolor: "#333" }
              }}
            >
              Agent
            </Button>

          </Stack>
        </DialogContent>
      </Dialog>

    </>
  );
}

export default Header;