import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, title: "Custom Suit", price: "$199", image: "https://img.freepik.com/free-photo/portrait-beautiful-woman-sewing-machine_1163-2036.jpg", description: "Tailored to perfection with high-quality fabric." },
  { id: 2, title: "Handmade Watch", price: "$120", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNb0GyoFgqS1JaJ4SM4toESzcaYhCjTazVv-e1xvVStuHgqi9_Gs8z4NczoiJhCeirC7E&usqp=CAU", description: "Elegant handmade watch with premium leather strap." },
  { id: 3, title: "Elegant Blazer", price: "$250", image: "https://thumbs.dreamstime.com/b/fashion-student-using-sewing-machine-college-49207529.jpg", description: "Classy and comfortable blazer for every occasion." },
  { id: 4, title: "Premium Shirt", price: "$99", image: "https://i0.wp.com/www.assembleandearn.com/wp-content/uploads/2015/03/mens-tailoring.jpg?fit=600%2C400&ssl=1", description: "High-quality fabric shirt with a modern fit." },
];

const featured = [
  { id: 5, title: "Luxury Suiting Fabric", price: "$299", image: "https://img.freepik.com/free-photo/tailor-designer-working-team_1098-21531.jpg?t=st=1740294148~exp=1740297748~hmac=e3b5480db8d384863d4ae2b899213a81425cce1b97a17218a7301fac48ef4b91&w=1060" },
  { id: 6, title: "Handcrafted Leather Belt", price: "$80", image: "https://img.freepik.com/free-photo/vertical-portrait-mature-attractive-talented-hispanic-clothes-designer-preparing-blue-dress-sewing-removing-mistakes-mannequin-getting-ready-fashion-show_176420-11854.jpg?ga=GA1.1.1874300921.1738933906&semt=ais_hybrid" },
  { id: 7, title: "Designer Buttons Set", price: "$20", image: "https://img.freepik.com/premium-photo/dressmaker-tailor-creative-concept-portrait-fashion-designer-with-sewing-machine-white-surface_230311-17377.jpg?ga=GA1.1.1874300921.1738933906&semt=ais_hybrid" },
  { id: 8, title: "Premium Thread Set", price: "$30", image: "https://img.freepik.com/premium-photo/young-dressmaker-woman-sews-clothes-sewing-machine_341052-1374.jpg?ga=GA1.1.1874300921.1738933906&semt=ais_hybrid" },
];

const TailorGrid = () => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} padding={2} marginTop={10}>
      <Grid item xs={12}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" marginBottom={3}>
          Book Your Tailors
        </Typography>
      </Grid>
      
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <Card onClick={() => navigate(`/tailor/${product.id}`)} style={{ cursor: "pointer" }}>
            <CardMedia component="img" height="400" image={product.image} alt={product.title} />
            <CardContent>
              <Typography variant="h6">{product.title}</Typography>
              <Typography color="textSecondary">{product.price}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}

      {featured.map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.id}>
          <Card onClick={() => navigate(`/tailor/${item.id}`)} style={{ cursor: "pointer" }}>
            <CardMedia component="img" height="400" image={item.image} alt={item.title} />
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography color="textSecondary">{item.price}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TailorGrid;
