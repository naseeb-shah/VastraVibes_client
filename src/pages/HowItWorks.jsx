import { Box, Button, Grid, Typography } from "@mui/material";
import RepairService from "./RepairService";

const HowItWorks = () => {
  return (
    <Box sx={{ mt: 8, textAlign: "center", width: "100%" }}>
      <Typography variant="h4" color="black" fontWeight="bold" sx={{ mb: 2 }}>
        How It Works
      </Typography>

      <Grid container spacing={3} sx={{ maxWidth: "900px", margin: "auto" }}>
        {[
          { step: "01", title: "We understand your requirements", icon: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png" },
          { step: "02", title: "We Analyze and Strategise a solution", icon: "https://cdn-icons-png.flaticon.com/128/1077/1077976.png" },
          { step: "03", title: "Repair and Alteration by our Experts", icon: "https://cdn-icons-png.flaticon.com/128/3064/3064045.png" },
          { step: "04", title: "We give the Garment a New Life", icon: "https://cdn-icons-png.flaticon.com/128/7641/7641727.png" }
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box 
              sx={{
                p: 3, 
                bgcolor: "white", 
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: 3,
                position: "relative"
              }}
            >
              <Box 
                sx={{
                  position: "absolute",
                  top: "-15px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bgcolor: "#6d8c76",
                  color: "white",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                {item.step}
              </Box>
              <img src={item.icon} alt="Step Icon" style={{ width: "60px", height: "60px", marginBottom: "10px" }} />
              <Typography variant="body1" fontWeight="bold">{item.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* 🔹 Contact Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#c9a351",
          color: "black",
          mt: 4,
          "&:hover": { backgroundColor: "#b89444" },
        }}
      >
        Contact Us Now
      </Button>
      <RepairService/>
    </Box>
    
  );
};

export default HowItWorks;