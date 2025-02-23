import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import TailorGrid from './pages/Product';
import TailorDetails from './pages/TailorDetails';
import Footer from './pages/Footer';  
import { Container, Typography, Button, AppBar, Toolbar, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import "./App.css";

function App() {
  return (
    <Router>
      <AppBar position="static" style={{ background: "black", height: "80px" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" style={{ flexGrow: 1, fontSize: "24px", fontWeight: "bold" }}>Vastra</Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <NavButton href="/" text="Home" />
            <NavButton href="/about" text="About" />
            <NavButton href="/services" text="Services" />
            <NavButton href="/contact" text="Contact" />
            <NavButton href="/signup" text="Signup" />
            <NavButton href="/login" text="Login" />
          </Box>
        </Toolbar>
      </AppBar>
      <Container>
        <Box mt={2}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/tailor/:id" element={<TailorDetails />} />
          </Routes>
        </Box>
      </Container>
      <Footer /> 
    </Router>
  );
}

// Custom NavButton Component
const NavButton = ({ href, text }) => (
  <Button 
    color="inherit"
    href={href}
    sx={{
      fontSize: "18px",
      fontWeight: "bold",
      position: "relative",
      transition: "color 0.3s ease-in-out",
      "&:hover": { color: "#28a745" }, // Green text on hover
      "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: "-4px",
        width: "100%",
        height: "3px",
        backgroundColor: "#28a745",
        transform: "scaleX(0)",
        transition: "transform 0.3s ease-in-out",
      },
      "&:hover::after": {
        transform: "scaleX(1)", // Green underline appears on hover
      }
    }}
  >
    {text}
  </Button>
);

export default App;