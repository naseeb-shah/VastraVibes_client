import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import TailorProfile from './pages/Tailors_profile';
import TailorGrid from './pages/Product';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { Container, Typography, Button, AppBar, Toolbar, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';

function App() {
  return (
    <Router>
      <AppBar position="static" style={{ background: 'black' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>Vastra</Typography>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/about">About</Button>
          <Button color="inherit" href="/services">Services</Button>
          <Button color="inherit" href="/contact">Contact</Button>
          <Button color="inherit" href="/signup">Signup</Button>
          <Button color="inherit" href="/login">Login</Button>
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
            <Route path="/tailors" element={<TailorGrid />} />
            <Route path="/tailor/:id" element={<TailorProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
