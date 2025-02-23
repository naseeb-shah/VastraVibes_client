import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BookingSuccess = () => {
    const navigate = useNavigate();

    return (
        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <Typography variant="h4" color="success" textAlign="center">Your Booking is Successful! 🎉</Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => navigate("/")}>
                Go to Home
            </Button>
        </Container>
    );
};

export default BookingSuccess;
