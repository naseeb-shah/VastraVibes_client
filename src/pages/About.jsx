
import React from "react";
import { Container, Typography, Box, Grid, Card, CardContent,Button } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { styled } from "@mui/system";

const AnimatedImage = styled("img")({
  width: "260px",
  height: "200px",
  transition: "transform 0.5s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Heading Section */}
      <Box textAlign="center" mb={5}>
        <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: "black" }}>
          About <span style={{ color: "#28a745" }}>VastraVibes</span>
        </Typography>
        <Typography variant="body1" sx={{ color: "black", fontSize: "20px" }}>
          Our ultimate destination for custom-made clothing, tailor connections, and fashion insights.
        </Typography>
      </Box>

      {/* Description Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: "black", fontSize: "50px" }}>
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ color: "#424242" }}>
            At VastraVibes, we aim to revolutionize the fashion industry by bridging the gap between customers and expert tailors.
            We empower users to design, rent, and customize their outfits with ease, bringing their unique fashion ideas to life.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: "black", fontSize: "50px" }}>
            Why Choose Us?
          </Typography>
          <Typography variant="body1" sx={{ color: "#424242" }}>
            We offer a seamless tailoring experience with AI-powered recommendations, virtual try-ons, and a wide network of skilled tailors.
            Our platform ensures quality, convenience, and creativity in every stitch.
          </Typography>
        </Grid>
      </Grid>

      {/* Key Features Section */}
      <Box mt={6}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{ color: "black", fontSize: "50px" }}>
          Key Features
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ p: 3, textAlign: "center", boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <AnimatedImage src={feature.image} alt={feature.title} />
                  <Typography variant="h6" fontWeight="bold" mt={2} sx={{ color: "black" }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
)};

const features = [
  {
    title: "TailorConnect Directory",
    description: "Find professional tailors with expertise, reviews, and ratings.",
    icon: <PeopleIcon fontSize="large" color="primary" />,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2BkIDhydoJ7v9Z_RJseJefVLw7GZoES6sg&s",
  },
  {
    title: "Custom Clothing",
    description: "Design outfits by uploading images or selecting templates.",
    icon: <DesignServicesIcon fontSize="large" color="secondary" />,
    image: "https://apparelproductionny.com/wp-content/uploads/2021/01/fabricswabs-scaled.jpeg",
  },
  {
    title: "Image Recommendations",
    description: "Get outfit suggestions based on body type and trends.",
    icon: <AutoAwesomeIcon fontSize="large" color="success" />,
    image: "https://media.gettyimages.com/id/1372559778/photo/a-millennial-woman-is-preparing-the-shipment-of-some-clothes-in-her-new-online-shop.jpg?s=612x612&w=gi&k=20&c=1uBVr1Z6Wb3eGu76opDMKuv3RNsGlaKyGIeVjjSgE9E=",
  },
];

export default About;
