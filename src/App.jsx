import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Footer from './pages/Footer';  
import TailorGrid from './pages/Product';
import TailorDetails from './pages/TailorDetails';
import { Container, Typography, Button, AppBar, Toolbar, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ToastContainer, toast } from 'react-toastify';
import "./App.css";

function App() {
  
  return (
    <>
    <ToastContainer />
    <Router>
     
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tailor" element={<TailorGrid />} />
            <Route path="/tailor/:id" element={<TailorDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
     
      <Footer /> 
    </Router>
    </>
  );
}

export default App;
