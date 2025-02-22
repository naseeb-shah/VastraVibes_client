import React from "react";
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>
      <Box sx={{ width: 380, height: 500, backgroundColor: "black", padding: 3, display: "flex", flexDirection: "column", justifyContent: "flex-start", opacity: 0.8, borderRadius: 2, color: "white" }}>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <AccountCircle sx={{ fontSize: 110, color: "green" }} />
        </Box>
        <TextField fullWidth variant="outlined" placeholder="Full Name" margin="normal" InputProps={{ startAdornment: <AccountCircle sx={{ mr: 1, color: "green" }} /> }} sx={{ backgroundColor: "white", borderRadius: 1 }} />
        <TextField fullWidth variant="outlined" placeholder="Email" margin="normal" InputProps={{ startAdornment: <AccountCircle sx={{ mr: 1, color: "green" }} /> }} sx={{ backgroundColor: "white", borderRadius: 1 }} />
        <TextField fullWidth variant="outlined" type="password" placeholder="Password" margin="normal" InputProps={{ startAdornment: <Lock sx={{ mr: 1, color: "green" }} /> }} sx={{ backgroundColor: "white", borderRadius: 1 }} />
        <Button fullWidth variant="contained" sx={{ mt: 2, mb: 1, backgroundColor: "green", color: "white" }}>SIGN UP</Button>
        <Typography textAlign="center" mt={2}>
          Already have an account? <Link to="/login" style={{ color: "green" }}>Login</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;
