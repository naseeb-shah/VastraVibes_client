

import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const services = [
  {
    title: "Custom Clothing",
    description: "Get your clothes stitched as per your preferences. Submit designs or choose from templates.",
    image: "https://media.istockphoto.com/id/1139905448/photo/the-young-tailor-working-near-the-sewing-machine.jpg?s=612x612&w=0&k=20&c=YFYXiwofFTxhsNLREOiUA-d7kRRTQgvFS0nWrerpiFY=",
  },
  {
    title: "Dress Rentals",
    description: "Rent dresses for weddings, parties, and special occasions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOqWg9UlPXZGHjL9tDVJ1b8EkZvKfOyVNtbZs1ryU4hMx5gtBtX4J55zPP6recQTeqdn4&usqp=CAU",
  },
  {
    title: "Tailor Directory",
    description: "Explore our list of 100+ professional tailors with ratings and reviews.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISMX88QntMHuwJtmprne4V7JV8NCiMnXym9_wLT0xuNd5iMLCj0n1Qv9nqnc8YstqooA&usqp=CAU",
  },
  {
    title: "Courses & Training",
    description: "Learn tailoring from professionals with online and offline courses.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0hkFW5aRCCg8mTCmdcS_fxZx-qXoTjgoqTsrEcvc-a4on__kSOYF7Nlo0k56U3-gZN0&usqp=CAU",
  },
  {
    title: "Online Consultation",
    description: "Book virtual appointments with tailors for design discussions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHIZfZb2Bf3TQAYtMQWN0lpP1rV1zZZ8bKzq0g8hUKlQGyXRmKDldJpTdW1aLIVszTBI&usqp=CAU",
  },
  {
    title: "Dress Exchange & Resale",
    description: "Sell or exchange old dresses and promote sustainability.",
    image: "https://media.istockphoto.com/id/1330548216/photo/asian-chinese-senior-tailor-man-with-facial-hair-looking-at-camera-smiling-in-atelier-studio.webp?a=1&b=1&s=612x612&w=0&k=20&c=PWsdFk_UcLnzIWCEdH0tc3kP6CPgMlleRFJ5HmpcSMA=",
  },
];

const Services = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom style={{ marginTop: "20px" }}>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia component="img" height="180" image={service.image} alt={service.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
