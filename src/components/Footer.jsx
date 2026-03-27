import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton, 
  Divider,
  Stack,
  Chip
} from '@mui/material';
import { Facebook, LinkedIn, Instagram } from '@mui/icons-material';

function Footer() {
  return (
    <Box component="footer" sx={{ width: '100%', bgcolor: 'grey.50', p:3 }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 8 } }}>

        {/* Logo */}
    <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
  <Box
    component="img"
    src="/oujatlogo.png"
    alt="Oujat Logo"
    sx={{
      height: { xs: 50, sm: 65, md: 80 },
      width: "auto",
      objectFit: "contain"
    }}
  />
</Box>

        {/* Links Grid */}
        <Grid container spacing={16} sx={{ mb: 6, justifyContent:"left"   }}>
          {/* Get support */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2,color:"black"}}>
              Get support
            </Typography>
            <Stack spacing={1}>
              <Link href="#" underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                Help Center
              </Link>
              <Link href="#" underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                Live chat
              </Link>
            </Stack>
          </Grid>

          {/* Payments and Protections */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2,color:"black" }}>
              Payments and Protections
            </Typography>
            <Stack spacing={1}>
              <Link href="#" underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                Secured and easy payments
              </Link>
              <Link href="#" underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                Oujat Digital Wallet
              </Link>
            </Stack>
          </Grid>

          {/* Ship on Oujat.com */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2,color:"black" }}>
              Ship on Oujat.com
            </Typography>
            <Stack spacing={1}>
              <Link href="#" underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                The customers
              </Link>
              <Link href="#" underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                The Agents
              </Link>
              <Link href="#" underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                Oujat.com Reads
              </Link>
            </Stack>
          </Grid>

          {/* Become an agent */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2,color:"black" }}>
              Become an agent
            </Typography>
            <Stack spacing={1}>
              <Link href="#" underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                Register/Login
              </Link>
              <Link href="#" underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                Subscription package
              </Link>
              <Link href="#" underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                How it works
              </Link>
            </Stack>
          </Grid>

          {/* Company */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2,color:"black" }}>
              Company
            </Typography>
            <Stack spacing={1}>
              <Link href="#" underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                About Oujat.com
              </Link>
              <Link href="#" underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                Career
              </Link>
            </Stack>
          </Grid>
        </Grid>

     
{/* Payment Methods - Force Symmetry */}
<Box 
  sx={{ 
    mb: 5, 
    width: '100%', 
    display: 'flex', 
    justifyContent: 'center', // Centers the entire row container
    alignItems: 'center'
  }}
>
  <Stack
  direction="row"
  sx={{ 
    width: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: { xs: 0.5, sm: 1, md: 1.5 }
  }}
>
    {[
      { src: "visa.png", bg: "#fff" },
      { src: "mastercard.png", bg: "#fff" },
      { src: "paypal.png", bg: "#fff" },
      { src: "mpesa2.png", bg: "#fff" },
      { src: "zamtel.png", bg: "#fff" },
      { src: "pengvin.png", bg: "#40D1FB" },
      { src: "telecel.png", bg: "#fff" },
      { src: "vodacom.png", bg: "#fff" },
      { src: "tnm.png", bg: "#fff" },
      { src: "mixx.png", bg: "#fff" },
      { src: "orange.png", bg: "#fff" },
      { src: "movitel.png", bg: "#fff" },
      { src: "moovafrica.png", bg: "#fff" },
      { src: "halopesa.png", bg: "#fff" },
      { src: "celtiis.png", bg: "#063970" },
      { src: "atmoney.png", bg: "#fff" },
      { src: "airtelmoney.png", bg: "#fff" }
    ].map((logo, index) => (
      <Box
        key={index}
        sx={{
          // Use calc to ensure they shrink perfectly on mobile
          width: { xs: 'calc(100% / 18)', sm: 48, md: 62 }, 
          height: { xs: 20, sm: 30, md: 40 },
          background: logo.bg,
          borderRadius: "4px",
          boxShadow: "0px 1px 3px rgba(0,0,0,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 1, // Allows shrinking to prevent overflow
          flexGrow: 0,   // Prevents logos from expanding unevenly
        }}
      >
        <Box
          component="img"
          src={logo.src}
          alt="payment provider"
          sx={{
            width: "80%",
            height: "80%",
            objectFit: "contain"
          }}
        />
      </Box>
    ))}
  </Stack>
</Box>

        {/* Social Media */}
        <Stack 
          direction="row" 
          spacing={1} 
          justifyContent="left" 
          alignItems="center"
          sx={{ mb: 4 }}
        >
          <Typography variant="body1" color="text.primary">
            Follow Us On
          </Typography>
          <IconButton href="#" sx={{color:"#000"}} size="small">
            <Facebook />
          </IconButton>
          <IconButton href="#" sx={{color:"#000000"}} size="small">
            <LinkedIn />
          </IconButton>
          <IconButton href="#" sx={{color:"#000000"}} size="small">
            <Instagram />
          </IconButton>
        </Stack>

        {/* Divider */}
        <Divider sx={{ mb: 3 }} />

        {/* Bottom Section */}
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          justifyContent="space-between" 
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            © Copyright 2026, All Rights Reserved
          </Typography>
          <Stack 
            direction="row" 
            flexWrap="wrap" 
            justifyContent="center" 
            gap={2}
          >
            <Link href="#" underline="hover" color="text.secondary"  sx={{ fontSize: '0.875rem' }}>
              Policies and Rules
            </Link>
            <Link href="#" underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
              Legal Notice
            </Link>
            <Link href="#" underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
              Service Listing Policy
            </Link>
            <Link href="#" underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
              Privacy Policy
            </Link>
            <Link href="#" underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
              Terms of Use
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
