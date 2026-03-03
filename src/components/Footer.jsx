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
      <Container maxWidth="xl">
        {/* Logo */}
        {/* <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Box sx={{ 
            bgcolor: 'white', 
            px: 4, 
            py: 1.5, 
            borderRadius: 2, 
            boxShadow: 1 
          }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600 , color:"black"}}>
      
              <Box component="img" src="oujatlogo.png" alt="logo" sx={{ width:265,height: 96 }} />
            </Typography>
          </Box>
        </Box> */}

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

        {/* Payment Methods */}
        <Box sx={{ mb: 5 }}>
          <Stack 
            direction="row" 
            flexWrap="nowrap" 
            justifyContent="left" 
            gap={1}
            sx={{ alignItems: 'center', 
            justifyItems: 'center',
            minWidth: "max-content",

             }}

    
          >
            <Box component="img" src="visa.jpg" alt="Visa" sx={{ width:80,height: 62 }} />
            <Box component="img" src="mastercard.jpg" alt="Mastercard" sx={{ width:58,height: 62 }} />
            <Box component="img" src="paypal.png" alt="PayPal" sx={{ height: 62,width:57 }} />
            <Box component="img" src="mpesa2.png" alt="M-PESA" sx={{ height: 62, width:76 }} />
            <Box component="img" src="zamtel.png" alt="M-PESA" sx={{ height: 62, width:64 }} />
            <Box component="img" src="pengvin.png" alt="M-PESA" sx={{  width:79, height: 62,borderRadius:2 }} />
            <Box component="img" src="telecel.png" alt="M-PESA" sx={{  width:90, height: 62 }} />
            <Box component="img" src="vodacom.png" alt="M-PESA" sx={{  width:88, height: 62}} />
            <Box component="img" src="tnm.png" alt="M-PESA" sx={{  width:52, height: 62 }} />
            <Box component="img" src="mixx.png" alt="M-PESA" sx={{  width:66, height: 62 }} />
            <Box component="img" src="orange.png" alt="M-PESA" sx={{  width:54, height: 62 }} />
            <Box component="img" src="movitel.png" alt="M-PESA" sx={{  width:65, height: 62 }} />
            <Box component="img" src="moovafrica.png" alt="M-PESA" sx={{  width:58, height: 62 }} />
            <Box component="img" src="halopesa.png" alt="M-PESA" sx={{  width:82, height: 62 }} />
            <Box component="img" src="celtiis.png" alt="M-PESA" sx={{  width:56, height: 62 }} />
            <Box component="img" src="atmoney.png" alt="M-PESA" sx={{  width:56, height: 62 }} />
            <Box component="img" src="airtelmoney.png" alt="M-PESA" sx={{  width:66, height: 62 }} />
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
            © Copyright 2021-2025, All Rights Reserved
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
