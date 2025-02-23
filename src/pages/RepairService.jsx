import { Box, Grid, Typography } from "@mui/material";

const RepairService = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: "#f0f8f8", 
        padding: "50px", 
        minHeight: "500px", // Increased height
        marginTop: "70px"   // More upper space
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        
        {/* Left Side - Image */}
        <Grid item xs={12} md={5}>
          <img
            src="https://t3.ftcdn.net/jpg/04/42/34/38/360_F_442343862_RJ3GvLApKbrtlIA54ZsKvpYdISfLCjI6.jpg" // Replace with your actual image URL
            alt="Clothing Repair"
            style={{
              width: "100%", 
              height: "400px", // Increased image height
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </Grid>

        {/* Right Side - Text */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ fontSize: "20px", color: "#555" }}>
            Not just a rip and zip service with instant repairs, strap adjustments, quick alterations, we provide exclusive and professional clothing repair solutions. With a team of professionals and on-the-go specialists, we always ensure your most loved garments get a new life.
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: "20px", color: "#555", marginTop: "30px" }}
          >
            Today, we not just provide an ordinary fix and repair; but take pride in offering a comprehensive suite of solutions including dress structure modifications, stain removal, seam repairs - done in the comfort of your home. Wardrobe emergencies can arise anytime, and thus we are always ready on-the-go to help you solve the slightest of problems with grace and patience. Making your repairs effortless.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RepairService;