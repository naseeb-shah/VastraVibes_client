
import { Box, Button, Grid, Typography } from "@mui/material";
import HowItWorks from "./HowItWorks"; // 🔹 Importing the new component

const Services = () => {
  return (
    <Box sx={{ minHeight: "100vh", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      
      {/* 🔹 First Section (Your Given Code) */}
      <Box sx={{ py: 5, maxWidth: "90%", width: "100vw", paddingX: 3, bgcolor: "white", borderRadius: "10px", boxShadow: 3, margin: "auto", mt: "-20px" }}>
        <Grid container spacing={8} alignItems="center">
          
          {/* Text Content */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              The Best Tailors at Very Reasonable Cost
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              We are enabling small businesses of tailors and boutiques to survive 
              in the tough and unpredictable times of Covid-19. With that objective 
              in mind, to help them sell more, we charge our customers with almost 
              the market price of what they charge.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#c9a351",
                color: "black",
                mt: 2, 
                "&:hover": { backgroundColor: "#b89444" },
              }}
            >
              Request a Call Back
            </Button>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={7}>
            <Box
              component="img"
              src="https://needlesnthimbles.com/wp-content/uploads/2024/02/4309.jpg" 
              alt="Tailor shop"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "500px", 
                borderRadius: "20px",
                boxShadow: 3,
                objectFit: "cover",
              }}
            />
          </Grid>

        </Grid>
      </Box>

      {/* 🔹 "How It Works" Section */}
      <HowItWorks />

    </Box>
  );
};

export default Services;