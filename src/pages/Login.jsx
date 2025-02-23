import React ,{useState}from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import {
  AccountCircle,
  Lock,
  Facebook,
  Twitter,
  Google,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const onSubmit = async () => {
    console.log(data);
    axios
      .post("auth/login", data)
      .then((e) => {
        localStorage.setItem("authToken", e.data.token);
        toast("User login Successfully");
        navigate("/");
      })
      .catch((err) => {
        toast("Some thing went wrong");
      });
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: 380,
          height: 450,
          backgroundColor: "black",
          padding: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          opacity: 0.8,
          borderRadius: 2,
          color: "white",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <AccountCircle sx={{ fontSize: 110, color: "green" }} />
        </Box>
        <TextField
          fullWidth
          variant="outlined"
          name="email"
          onChange={(e) => handleChange(e)}
          placeholder="Username"
          margin="normal"
          InputProps={{
            startAdornment: <AccountCircle sx={{ mr: 1, color: "green" }} />,
          }}
          sx={{ backgroundColor: "white", borderRadius: 1 }}
        />
        <TextField
          fullWidth
          variant="outlined"
          name="password"
          onChange={(e) => handleChange(e)}
          type="password"
          placeholder="Password"
          margin="normal"
          InputProps={{
            startAdornment: <Lock sx={{ mr: 1, color: "green" }} />,
          }}
          sx={{ backgroundColor: "white", borderRadius: 1 }}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 1, backgroundColor: "green", color: "white" }}
          onClick={onSubmit}
        >
          LOGIN
        </Button>
        <Box display="flex" justifyContent="space-between" mt={1}>
          <FormControlLabel
            control={<Checkbox sx={{ color: "green" }} />}
            label={<Typography sx={{ color: "white" }}>Remember Me</Typography>}
          />
          <Typography
            component={Link}
            to="#"
            sx={{ color: "green", textDecoration: "none" }}
          >
            Forgot Password?
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" mt={3}>
          <IconButton sx={{ color: "green" }}>
            <Facebook />
          </IconButton>
          <IconButton sx={{ color: "green" }}>
            <Twitter />
          </IconButton>
          <IconButton sx={{ color: "green" }}>
            <Google />
          </IconButton>
        </Box>
        <Typography textAlign="center" mt={2}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "green" }}>
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
