import React, { useState } from "react";
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/axios"
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
const navigate=useNavigate()

  const [loading,setlLoading]=useState(false)
  const [data,setData]=useState({})


  const handleChange=(e)=>{
    setData((pre)=>({...pre,[e.target.name]:e.target.value}))

  }


  const onSubmit=async()=>{
    console.log(data)
    axios.post("auth/create-user",data).then((e)=>{
      toast('User Create Successfully');
      navigate("/login")
    }).catch((err)=>{
      toast('Some thing went wrong');
    })
  }

  return (
    <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>
        {/* <Button onClick={notify}>Notify !</Button> */}
      <Box sx={{ width: 380, height: 500, backgroundColor: "black", padding: 3, display: "flex", flexDirection: "column", justifyContent: "flex-start", opacity: 0.8, borderRadius: 2, color: "white" }}>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <AccountCircle sx={{ fontSize: 110, color: "green" }} />
        </Box>
        <TextField onChange={(e)=>handleChange(e)} fullWidth name="name" variant="outlined" placeholder="Full Name" margin="normal" InputProps={{ startAdornment: <AccountCircle sx={{ mr: 1, color: "green" }} /> }} sx={{ backgroundColor: "white", borderRadius: 1 }} />
        <TextField  onChange={(e)=>handleChange(e)} fullWidth variant="outlined" name="email" placeholder="Email" margin="normal" InputProps={{ startAdornment: <AccountCircle sx={{ mr: 1, color: "green" }} /> }} sx={{ backgroundColor: "white", borderRadius: 1 }} />
        <TextField fullWidth variant="outlined" onChange={(e)=>handleChange(e)} name="password" type="password" placeholder="Password" margin="normal" InputProps={{ startAdornment: <Lock sx={{ mr: 1, color: "green" }} /> }} sx={{ backgroundColor: "white", borderRadius: 1 }} />
        <Button fullWidth variant="contained" sx={{ mt: 2, mb: 1, backgroundColor: "green", color: "white" }} onClick={onSubmit}>SIGN UP</Button>
        <Typography textAlign="center" mt={2}>
          Already have an account? <Link to="/login" style={{ color: "green" }}>Login</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;
