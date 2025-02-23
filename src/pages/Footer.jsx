// // src/pages/Footer.jsx
// import React from 'react';
// import { Box, Typography } from '@mui/material';

// function Footer() {
//   return (
//     <Box sx={{ backgroundColor: 'black', color: 'white', textAlign: 'center', py: 2, mt: 3 }}>
//       <Typography variant="body2">© {new Date().getFullYear()} VastraVibes. All rights reserved.</Typography>
//     </Box>
//   );
// }

// export default Footer;


import React from "react";
import { Box, Container, Grid, Typography, Link, Divider } from "@mui/material";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000", // Black background
        color: "#fff", // White text
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About VastraVibes
            </Typography>
            <Typography variant="body2">
              VastraVibes is your one-stop platform for custom clothing, tailoring services, dress rentals, and tailoring courses.  
              Connect with professional tailors and bring your fashion ideas to life!
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/about" color="inherit" underline="none">
              <Typography variant="body2">About Us</Typography>
            </Link>
            <Link href="/services" color="inherit" underline="none">
              <Typography variant="body2">Our Services</Typography>
            </Link>
            <Link href="/contact" color="inherit" underline="none">
              <Typography variant="body2">Contact Us</Typography>
            </Link>
            <Link href="/faq" color="inherit" underline="none">
              <Typography variant="body2">FAQs</Typography>
            </Link>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">📍 123 Fashion Street, Mumbai, India</Typography>
            <Typography variant="body2">📞 +91 98765 43210</Typography>
            <Typography variant="body2">✉️ support@vastravibes.com</Typography>

            {/* Social Media Icons */}
            <Box display="flex" mt={2}>
              <Link href="#" color="inherit" sx={{ mr: 2 }}>
                <FaFacebook size={24} color="white" /> {/* White Icon */}
              </Link>
              <Link href="#" color="inherit" sx={{ mr: 2 }}>
                <FaInstagram size={24} color="white" /> {/* White Icon */}
              </Link>
              <Link href="#" color="inherit" sx={{ mr: 2 }}>
                <FaTwitter size={24} color="white" /> {/* White Icon */}
              </Link>
              <Link href="#" color="inherit">
                <FaLinkedin size={24} color="white" /> {/* White Icon */}
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.2)" }} />

        {/* Copyright */}
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} VastraVibes. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
