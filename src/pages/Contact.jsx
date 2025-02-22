import React from "react";
import { Container, Box, TextField, Button, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, WhatsApp } from "@mui/icons-material";

const ContactUs = () => {
  return (
    <Container maxWidth="lg" sx={{ color: "white", minHeight: "100vh", py: 5 }}>
      <Box
        sx={{
          width: "100%",
          height: "300px",
          overflow: "hidden",
          position: "relative",
          margin: 0,
          padding: "10px" 
        }}
      >
        <img
          src="https://i.pinimg.com/736x/e1/c6/c5/e1c6c50294b7de4ad0446a0cdb22d47e.jpg"
          alt="Header"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            display: "block",
            margin: 0,
            padding: 0
          }}
        />
        
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontWeight: "bold",
            backgroundColor: "rgba(0, 128, 0, 0.7)",
            padding: "10px 20px",
            borderRadius: "8px"
          }}
        >
          Contact Us
        </Typography>
      </Box>


      {/* Contact Sections */}
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {/* Our Presence */}
        <Box sx={{ width: "48%", backgroundColor: "green", p: 3, borderRadius: 2, height: "100%" }}>
          <Typography variant="h5" sx={{ color: "white", mb: 2 }}>Our Map </Typography>
          <iframe
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height="430px" // Same height as the form
            style={{ borderRadius: "8px", border: "none" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>

        {/* Enquire Form */}
        <Box sx={{ width: "48%", p: 3, borderRadius: 2, border: "3px solid green", height: "528px" }}>
          <Typography variant="h5" sx={{ color: "green", mb: 2 }}>Enquire Us</Typography>
          <TextField fullWidth placeholder="Your Name" variant="outlined" sx={{ borderRadius: 1, mb: 2 }} />
          <TextField fullWidth placeholder="Your Email" variant="outlined" sx={{ borderRadius: 1, mb: 2 }} />
          <TextField fullWidth placeholder="Phone Number" variant="outlined" sx={{ borderRadius: 1, mb: 2 }} />
          <TextField fullWidth placeholder="City" variant="outlined" sx={{ borderRadius: 1, mb: 2 }} />
          <TextField fullWidth multiline rows={3} placeholder="Message" variant="outlined" sx={{ borderRadius: 1, mb: 2 }} />
          <Button fullWidth variant="contained" sx={{ backgroundColor: "black", color: "green" }}>SUBMIT</Button>
        </Box>
      </Box>

      {/* Contact Details */}
      <Box display="flex" justifyContent="space-between" flexWrap="wrap" mt={4}>
        <Box sx={{ width: "32%", backgroundColor: "green", p: 2, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ color: "white" }}>Our Location</Typography>
          <Typography sx={{ color: "white" }}>Survey No 60, Anish Jadhav Memorial Foundation Gharkul Properties, 
            Plot No. 60/1/1, Pathare Wasti, Lohegaon, Pune, Maharashtra 411047</Typography>
        </Box>
        <Box sx={{ width: "32%", backgroundColor: "green", p: 2, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ color: "white" }}>Call Us</Typography>
          <Typography sx={{ color: "white" }}>+91 7496690851, +91 8746908658</Typography>
        </Box>
        <Box sx={{ width: "32%", backgroundColor: "green", p: 2, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ color: "white" }}>Write Some Words</Typography>
          <Typography sx={{ color: "white" }}>VastraVibes@gmail.COM</Typography>
        </Box>
      </Box>

      {/* Social Media Icons */}
      <Box display="flex" justifyContent="center" mt={4}>
        <IconButton sx={{ color: "green" }}><Facebook /></IconButton>
        <IconButton sx={{ color: "green" }}><Twitter /></IconButton>
        <IconButton sx={{ color: "green" }}><WhatsApp /></IconButton>
      </Box>
    </Container>
  );
};

export default ContactUs;
