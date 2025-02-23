// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import NotFound from './pages/NotFound';
// import './pages/Footer.jsx';
// import { Container, Typography, Button, AppBar, Toolbar, IconButton, Box } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import "./App.css"

// function App() {
//   return (
//     <Router>
//       <AppBar position="static" style={{background:"black"}} >
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" style={{ flexGrow: 1 }}>
//             Vastra
//           </Typography>
//           <Button color="inherit" href="/">Home</Button>
//           <Button color="inherit" href="/about">About</Button>
//           <Button color="inherit" href="/services">Services</Button>
//           <Button color="inherit" href="/contact">contact</Button>
//           <Button color="inherit" href="/signup">signup</Button>
//           <Button color="inherit" href="/login">login</Button>

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
//             <Route path="/login" element={<Login/>} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Box>
//         {/* <Footer /> */}
//       </Container>
//       <Footer/>
//     </Router>
//   );
// }

// export default App;




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
import { Container, Typography, Button, AppBar, Toolbar, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ToastContainer, toast } from 'react-toastify';
import "./App.css";

function App() {
  return (
    <Router>
      <ToastContainer />
      <AppBar position="static" style={{ background: "black" }}>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Container>
      <Footer /> 
    </Router>
  );
}

export default App;
