import React from "react";
import { Dialog, DialogContent, Typography, Button, Stack } from "@mui/material";

const LoginPopup = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent sx={{ textAlign: "center", p: 4 }}>
        <Typography fontWeight={600} fontSize={20} mb={3}>
          Login
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            sx={{
              bgcolor: "#000",
              borderRadius: 2,
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
              "&:hover": { bgcolor: "#333" }
            }}
          >
            Agent
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default LoginPopup;