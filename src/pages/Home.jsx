import React from "react";
import { Typography, Box, Container, Button,CardContent, TextField ,Grid, Card, CardMedia,IconButton } from "@mui/material";
import ImageSlider from "./ImageSlider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TailorGrid from "./Product";

function Home() {
  const images = [
    "https://askproject.net/fashia/wp-content/uploads/sites/151/2023/08/elegant-lady-in-fashionable-slim-fit-black-bodysui-XC9QX7F.jpg",
    "https://askproject.net/fashia/wp-content/uploads/sites/151/2023/08/clothes-on-a-hanger-in-a-boutique-C9FHS4C.jpg",
    "https://askproject.net/fashia/wp-content/uploads/sites/151/2023/08/dark-skinned-and-short-haired-women-in-stylish-sum-XXN2AJA.jpg",
    "https://askproject.net/fashia/wp-content/uploads/sites/151/2023/08/young-woman-with-fashion-magazine-NLSWZMX.jpg",
    "https://askproject.net/fashia/wp-content/uploads/sites/151/2023/08/rack-of-clothes-in-a-boutique-NGD45UR.jpg",
  ];
  return (
    <Container disableGutters >
      
      
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", bgcolor: "white", boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)", borderRadius: "8px", p: 4}}>
        <Card sx={{ flex: 1,minHeight:"200"}}>
          <ImageSlider />
        </Card>
        <Box sx={{ flex: 1, textAlign: "left", p: 3 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Fashion Is the Armor to Survive the Reality of Everyday Life
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet cursus orci. Nulla luctus vehicula enim quis aliquet.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" sx={{ mr: 2 }}>
              Get Started
            </Button>
            <Button variant="outlined" color="primary">
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
      <TailorGrid/>

  
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", bgcolor: "white", py: 6, mt: 5 , height:"50%"}}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "1400px", width: "100%", px: 4 ,height:"50%"}}>
          <Box sx={{ flex: 1, pr: 5 }}>
            <Typography variant="subtitle2" sx={{ color: "#e91e63", fontWeight: "bold" }}>
              / ABOUT US
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold", fontFamily: "serif", mt: 1 }}>
              Fashion Is About Passion, Not Just Clothes
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "gray" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet cursus orci. Nulla luctus vehicula enim quis aliquet.
            </Typography>
            <Button variant="contained" sx={{ mt: 3, backgroundColor: "black", color: "white", padding: "10px 20px", fontSize: "14px", "&:hover": { backgroundColor: "#333" } }}>
              LEARN MORE
            </Button>
          </Box>
          <Box sx={{ flex: 1, position: "relative", display: "flex", justifyContent: "center" }}>
            <iframe
              width="500"
              height="300"
              src="https://www.youtube.com/embed/vq6o8GKpb44"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "8px" }}
            ></iframe>
          </Box>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", py: 6, bgcolor: "#f9f9f9" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body1" color="gray" mb={4}>
          We provide top-quality fashion consulting and design services to help you stay trendy.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {["Custom Designs", "Fashion Consulting", "Trend Analysis", "Personal Styling"].map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ p: 3, boxShadow: 3, textAlign: "center", borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" color="primary">
                    {service}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus orci.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

     
      <Box sx={{ py: 8, bgcolor: "#f5f5f5" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Let's Talk About Fashion
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={3}>
                We are here to assist you in creating your fashion statement.
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOnIcon color="primary" />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  123 Fashion Street, New York, USA
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <PhoneIcon color="primary" />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  +1 234 567 890
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <EmailIcon color="primary" />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  contact@fashionworld.com
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ bgcolor: "black", color: "white", p: 4, borderRadius: 2, boxShadow: 3 }}>
                <Typography variant="h5" fontWeight="bold" mb={3}>
                  Register
                </Typography>
                <TextField fullWidth label="First Name" variant="outlined" sx={{ mb: 2, bgcolor: "white", borderRadius: 1 }} />
                <TextField fullWidth label="Last Name" variant="outlined" sx={{ mb: 2, bgcolor: "white", borderRadius: 1 }} />
                <TextField fullWidth label="Email Address" variant="outlined" sx={{ mb: 2, bgcolor: "white", borderRadius: 1 }} />
                
                <Button variant="contained" color="primary" fullWidth>
                  Submit Form
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ textAlign: "center", py: 5 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
        Follow us on Instagram
      </Typography>
      
      <Grid container spacing={2} justifyContent="center">
        {images.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Card sx={{ height: 280, overflow: "hidden", borderRadius: 2 }}>
              <CardMedia component="img" image={img} sx={{ height: "100%", objectFit: "cover" }} />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: "black",
          color: "white",
          px: 4,
          py: 1,
          "&:hover": { backgroundColor: "gray" },
        }}
      >
        FOLLOW US
      </Button>
    </Box>
    </Container>
  );
}

export default Home;
