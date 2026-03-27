import React from "react";
import { Dialog, DialogContent, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { orange } from "@mui/material/colors";

const LoginPopup = ({ open, handleClose }) => {
  const navigate = useNavigate();
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent sx={{ textAlign: "center", p: 4 ,width:200}}>
        <Typography fontWeight={600} fontSize={20} mb={3}>
          Login
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
         <Button
  variant="contained"
  sx={{  
    bgcolor: "#000",
    borderRadius: 2,
    width: 200,
    fontSize: 10,
    fontWeight: 700,
    "&:hover": { bgcolor: "#ff8000" }
  }}
  onClick={() => {
    handleClose();                 // close popup
    window.open("/customer-login");   // redirect page
  }}
>
  Customer
</Button>

          <Button
  variant="contained"
  sx={{  
    bgcolor: "#000",
    borderRadius: 2,
    width: 200,
    fontSize: 10,
    fontWeight: 700,
    "&:hover": { bgcolor: "#ff8000" }
  }}
  onClick={() => {
    handleClose();                 // close popup
    window.open("/agent-login");   // redirect page
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