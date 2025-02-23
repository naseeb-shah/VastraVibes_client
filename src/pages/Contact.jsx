// import React, { useState } from "react";
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   TextField,
//   Button,
//   Card,
//   CardContent,
//   Snackbar,
//   Alert,
//   CircularProgress,
//   useTheme,
//   useMediaQuery
// } from "@mui/material";
// import { styled } from "@mui/system";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const ContactWrapper = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(8, 0),
//   background: "linear-gradient(to right, #2E7D32,hsl(142, 71.80%, 86.10%))",
//   width: "100%",
//   minHeight: "100%",
//   alignItems: "center",
//   marginTop: "10%"
// }));

// const ContactCard = styled(Card)(({ theme }) => ({
//   height: "100%",
//   transition: "transform 0.3s ease-in-out",
//   "&:hover": {
//     transform: "translateY(-5px)"
//   }
// }));

// const ContactUs = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     message: ""
//   });
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: "",
//     severity: "success"
//   });

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.fullName) newErrors.fullName = "Full name is required";
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
//       newErrors.email = "Invalid email address";
//     }
//     if (!formData.message) newErrors.message = "Message is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setLoading(true);
//       try {
//         await new Promise(resolve => setTimeout(resolve, 2000));
//         setSnackbar({
//           open: true,
//           message: "Message sent successfully!",
//           severity: "success"
//         });
//         setFormData({ fullName: "", email: "", phone: "", message: "" });
//       } catch (error) {
//         setSnackbar({
//           open: true,
//           message: "Failed to send message. Please try again.",
//           severity: "error"
//         });
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: "" }));
//     }
//   };

//   return (
//     <ContactWrapper>
//       <Container maxWidth="lg">
//         <Typography variant="h2" align="center" gutterBottom>
//           Contact Us
//         </Typography>
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={5}>
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <ContactCard>
//                   <CardContent>
//                     <Box display="flex" alignItems="center" mb={2}>
//                       <FaMapMarkerAlt size={24} color="green" />
//                       <Typography variant="h6" ml={2}>Address</Typography>
//                     </Box>
//                     <Typography variant="body1" color="textSecondary">
//                       123 Business Street, Suite 100
//                       <br />
//                       New York, NY 10001
//                     </Typography>
//                   </CardContent>
//                 </ContactCard>
//               </Grid>
//               <Grid item xs={12}>
//                 <ContactCard>
//                   <CardContent>
//                     <Box display="flex" alignItems="center" mb={2}>
//                       <FaPhone size={24} color="green" />
//                       <Typography variant="h6" ml={2}>Phone</Typography>
//                     </Box>
//                     <Typography variant="body1" color="textSecondary">
//                       +1 (555) 123-4567
//                     </Typography>
//                   </CardContent>
//                 </ContactCard>
//               </Grid>
//               <Grid item xs={12}>
//                 <ContactCard>
//                   <CardContent>
//                     <Box display="flex" alignItems="center" mb={2}>
//                       <FaEnvelope size={24} color="green" />
//                       <Typography variant="h6" ml={2}>Email</Typography>
//                     </Box>
//                     <Typography variant="body1" color="textSecondary">
//                       contact@company.com
//                     </Typography>
//                   </CardContent>
//                 </ContactCard>
//               </Grid>
//             </Grid>
//           </Grid>
          
//           <Grid item xs={12} md={7}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h5" gutterBottom>
//                   Send us a message
//                 </Typography>
//                 <form onSubmit={handleSubmit}>
//                   <TextField fullWidth label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} error={!!errors.fullName} helperText={errors.fullName} margin="normal" />
//                   <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} margin="normal" />
//                   <TextField fullWidth label="Phone (Optional)" name="phone" value={formData.phone} onChange={handleChange} margin="normal" />
//                   <TextField fullWidth label="Message" name="message" value={formData.message} onChange={handleChange} error={!!errors.message} helperText={errors.message} margin="normal" multiline rows={4} />
//                   <Box mt={2}>
//                     <Button type="submit" variant="contained" style={{ backgroundColor: "green", color: "white" }} disabled={loading}>
//                       {loading ? <CircularProgress size={24} /> : "Send Message"}
//                     </Button>
//                   </Box>
//                 </form>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </ContactWrapper>
//   );
// };

// export default ContactUs;



import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Snackbar,
  Alert,
  CircularProgress,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { styled } from "@mui/system";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: "linear-gradient(to right, #2E7D32, hsl(142, 71.8%, 86.1%))",
  width: "100%",
  minHeight: "100%",
  alignItems: "center",
  marginTop: "10%"
}));

const ContactCard = styled(Card)({
  height: "100%",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)"
  }
});

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setSnackbar({
          open: true,
          message: "Message sent successfully!",
          severity: "success"
        });
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      } catch (error) {
        setSnackbar({
          open: true,
          message: "Failed to send message. Please try again.",
          severity: "error"
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <ContactWrapper>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          {/* Contact Info Section */}
          <Grid item xs={12} md={5}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ContactCard>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <FaMapMarkerAlt size={24} color="green" />
                      <Typography variant="h6" ml={2}>Address</Typography>
                    </Box>
                    <Typography variant="body1" color="textSecondary">
                      123 Business Street, Suite 100
                      <br />
                      New York, NY 10001
                    </Typography>
                  </CardContent>
                </ContactCard>
              </Grid>
              <Grid item xs={12}>
                <ContactCard>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <FaPhone size={24} color="green" />
                      <Typography variant="h6" ml={2}>Phone</Typography>
                    </Box>
                    <Typography variant="body1" color="textSecondary">
                      +1 (555) 123-4567
                    </Typography>
                  </CardContent>
                </ContactCard>
              </Grid>
              <Grid item xs={12}>
                <ContactCard>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <FaEnvelope size={24} color="green" />
                      <Typography variant="h6" ml={2}>Email</Typography>
                    </Box>
                    <Typography variant="body1" color="textSecondary">
                      contact@company.com
                    </Typography>
                  </CardContent>
                </ContactCard>
              </Grid>
            </Grid>

            {/* Social Media Section */}
            <Box display="flex" justifyContent="center" alignItems="center" mt={2} pb={2}>
              <FaLinkedin size={50} style={{ color: "white", padding: "3px", borderRadius: "5px", margin: "0 8px" }} />
              <FaTwitter size={50} style={{ color: "white", padding: "3px", borderRadius: "5px", margin: "0 8px" }} />
              <FaInstagram size={50} style={{ color: "white",padding: "3px", borderRadius: "5px", margin: "0 8px" }} />
            </Box>
          </Grid>

          {/* Contact Form Section */}
          <Grid item xs={12} md={7}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Send us a message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth label="Full Name" name="fullName"
                    value={formData.fullName} onChange={handleChange}
                    error={!!errors.fullName} helperText={errors.fullName}
                    margin="normal"
                  />
                  <TextField
                    fullWidth label="Email" name="email"
                    value={formData.email} onChange={handleChange}
                    error={!!errors.email} helperText={errors.email}
                    margin="normal"
                  />
                  <TextField
                    fullWidth label="Phone (Optional)" name="phone"
                    value={formData.phone} onChange={handleChange}
                    margin="normal"
                  />
                  <TextField
                    fullWidth label="Message" name="message"
                    value={formData.message} onChange={handleChange}
                    error={!!errors.message} helperText={errors.message}
                    margin="normal" multiline rows={4}
                  />
                  <Box mt={2}>
                    <Button
                      type="submit" variant="contained"
                      style={{ backgroundColor: "green", color: "white" }}
                      disabled={loading}
                    >
                      {loading ? <CircularProgress size={24} /> : "Send Message"}
                    </Button>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ContactWrapper>
  );
};

export default ContactUs;
