<<<<<<< HEAD
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import NotFound from './pages/NotFound';
// import Footer from './pages/Footer';  
// import { Container, Typography, Button, AppBar, Toolbar, IconButton, Box } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import "./App.css";

// function App() {
  
//   return (
//     <Router>
//       <AppBar position="static" style={{ background: "black" ,height:"80px"}}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" style={{ flexGrow: 1 }}>Vastra</Typography>
//           <Button color="inherit" href="/">Home</Button>
//           <Button color="inherit" href="/about">About</Button>
//           <Button color="inherit" href="/services">Services</Button>
//           <Button color="inherit" href="/contact">Contact</Button>
//           <Button color="inherit" href="/signup">Signup</Button>
//           <Button color="inherit" href="/login">Login</Button>
//         </Toolbar>
//       </AppBar>
//       <Container>
//         <Box mt={2}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Box>
//       </Container>
//       <Footer /> 
//     </Router>
//   );
// }

// export default App;


=======
>>>>>>> 8a13857998eeee824d798af38adfd447b0d81cb9
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
<<<<<<< HEAD
=======
import TailorGrid from './pages/Product';
import TailorDetails from './pages/TailorDetails';
>>>>>>> 8a13857998eeee824d798af38adfd447b0d81cb9
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Footer from './pages/Footer';  
import { Container, Typography, Button, AppBar, Toolbar, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <AppBar position="static" style={{ background: "black", height: "80px" }}>
=======
      <ToastContainer />
      <AppBar position="static" style={{ background: "black" }}>
>>>>>>> 8a13857998eeee824d798af38adfd447b0d81cb9
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
<<<<<<< HEAD
          <Typography variant="h5" style={{ flexGrow: 1, fontSize: "24px", fontWeight: "bold" }}>Vastra</Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <NavButton href="/" text="Home" />
            <NavButton href="/about" text="About" />
            <NavButton href="/services" text="Services" />
            <NavButton href="/contact" text="Contact" />
            <NavButton href="/signup" text="Signup" />
            <NavButton href="/login" text="Login" />
          </Box>
=======
          <Typography variant="h6" style={{ flexGrow: 1 }}>Vastra</Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/services">Services</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/signup">Signup</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
>>>>>>> 8a13857998eeee824d798af38adfd447b0d81cb9
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
            <Route path="/tailor/:id" element={<TailorDetails />} />
            <Route path="*" element={<NotFound />} />
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
