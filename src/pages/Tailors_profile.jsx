import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const TailorProfile = () => {
  const { id } = useParams(); 
  const location = useLocation(); 
  const tailor = location.state; 

  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Card>
        <CardMedia component="img" height="400" image={tailor.image} alt={tailor.title} />
        <CardContent>
          <Typography variant="h4" fontWeight="bold">{tailor.title}</Typography>
          <Typography variant="h6" color="textSecondary">{tailor.price}</Typography>
          <Typography variant="body1" marginTop={2}>{tailor.description}</Typography>
          <Button variant="contained" color="primary" style={{ marginTop: "20px" }}>
            Book Here
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TailorProfile;
