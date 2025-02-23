

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Card, CardMedia, CardContent, Button, Rating, Box, TextField, Dialog, List, ListItem, ListItemText } from "@mui/material";

const tailorData = [
    { id: 1, title: "Custom Suit", price: "$199", image: "https://img.freepik.com/free-photo/portrait-beautiful-woman-sewing-machine_1163-2036.jpg", description: "Tailored to perfection with high-quality fabric." },
    { id: 2, title: "Handmade Watch", price: "$120", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNb0GyoFgqS1JaJ4SM4toESzcaYhCjTazVv-e1xvVStuHgqi9_Gs8z4NczoiJhCeirC7E&usqp=CAU", description: "Elegant handmade watch with premium leather strap." },
    { id: 3, title: "Elegant Blazer", price: "$250", image: "https://thumbs.dreamstime.com/b/fashion-student-using-sewing-machine-college-49207529.jpg", description: "Classy and comfortable blazer for every occasion." },
    { id: 4, title: "Premium Shirt", price: "$99", image: "https://i0.wp.com/www.assembleandearn.com/wp-content/uploads/2015/03/mens-tailoring.jpg?fit=600%2C400&ssl=1", description: "High-quality fabric shirt with a modern fit." },
    { id: 5, title: "Luxury Suiting Fabric", price: "$299", image: "https://img.freepik.com/free-photo/tailor-designer-working-team_1098-21531.jpg?t=st=1740294148~exp=1740297748~hmac=e3b5480db8d384863d4ae2b899213a81425cce1b97a17218a7301fac48ef4b91&w=1060" },
    { id: 6, title: "Handcrafted Leather Belt", price: "$80", image: "https://img.freepik.com/free-photo/vertical-portrait-mature-attractive-talented-hispanic-clothes-designer-preparing-blue-dress-sewing-removing-mistakes-mannequin-getting-ready-fashion-show_176420-11854.jpg?ga=GA1.1.1874300921.1738933906&semt=ais_hybrid" },
    { id: 7, title: "Designer Buttons Set", price: "$20", image: "https://img.freepik.com/premium-photo/dressmaker-tailor-creative-concept-portrait-fashion-designer-with-sewing-machine-white-surface_230311-17377.jpg?ga=GA1.1.1874300921.1738933906&semt=ais_hybrid" },
    { id: 8, title: "Premium Thread Set", price: "$30", image: "https://img.freepik.com/premium-photo/young-dressmaker-woman-sews-clothes-sewing-machine_341052-1374.jpg?ga=GA1.1.1874300921.1738933906&semt=ais_hybrid" },
]

const botReplies = [
    "Hello! How can I help you?",
    "I am just a frontend chat bot 😅",
    "Try asking something else!",
    "Have a great day! 🚀"
];

const TailorDetails = () => {
    const { id } = useParams();
    const tailor = tailorData.find((t) => t.id === parseInt(id));
    const [isBooked, setIsBooked] = useState(false);
    const [rating, setRating] = useState(4.5);
    const [chatOpen, setChatOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    if (!tailor) {
        return <Typography variant="h5" textAlign="center">Tailor not found!</Typography>;
    }

    const handleBooking = () => {
        setIsBooked(true);
        alert("Your booking is confirmed!");
    };

    const handleChatOpen = () => {
        setChatOpen(true);
    };

    const handleChatClose = () => {
        setChatOpen(false);
    };

    const sendMessage = () => {
        if (message.trim()) {
            const newMessages = [...messages, { text: message, sender: "user" }];
            setMessages(newMessages);
            setMessage("");

            setTimeout(() => {
                const botReply = botReplies[Math.floor(Math.random() * botReplies.length)];
                setMessages([...newMessages, { text: botReply, sender: "bot" }]);
            }, 1000);
        }
    };

    return (
        <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            <Card sx={{ maxWidth: 500, padding: 2, boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    sx={{ height: 300, width: "100%", objectFit: "cover" }}
                    image={tailor.image}
                    alt={tailor.title}
                />
                <CardContent>
                    <Typography variant="h4" textAlign="center">{tailor.title}</Typography>
                    <Typography variant="h6" color="textSecondary" textAlign="center">{tailor.price}</Typography>
                    <Typography variant="body1" marginTop={2} textAlign="center">{tailor.description}</Typography>

                    <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                        <Typography variant="body1" mr={1}>Rating:</Typography>
                        <Rating 
                            value={rating} 
                            precision={0.5} 
                            onChange={(event, newValue) => {
                                if (newValue !== null) {
                                    setRating(newValue);
                                }
                            }} 
                        />
                    </Box>

                    <Typography
                        variant="body1"
                        marginTop={2}
                        textAlign="center"
                        color={isBooked ? "error" : "success"}
                    >
                        {isBooked ? "Already Booked" : "Available for Booking"}
                    </Typography>

                    <Box display="flex" justifyContent="space-between" mt={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleBooking}
                            disabled={isBooked}
                            sx={{ flex: 1, mr: 1 }}
                        >
                            {isBooked ? "Booked" : "Book Now"}
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleChatOpen}
                            sx={{ flex: 1 }}
                        >
                            Live Chat
                        </Button>
                    </Box>
                </CardContent>
            </Card>

            {/* Chat Box Dialog */}
            <Dialog open={chatOpen} onClose={handleChatClose}>
                <Box sx={{ width: 300, p: 2 }}>
                    <Typography variant="h6" textAlign="center">Live Chat</Typography>
                    <List sx={{ maxHeight: 200, overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
                        {messages.map((msg, index) => (
                            <ListItem key={index} sx={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
                                <ListItemText
                                    primary={msg.text}
                                    sx={{
                                        background: msg.sender === "user" ? "#2196F3" : "#E0E0E0",
                                        color: msg.sender === "user" ? "white" : "black",
                                        borderRadius: "10px",
                                        padding: "5px 10px",
                                        display: "inline-block",
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                    <TextField
                        fullWidth
                        label="Type your message..."
                        variant="outlined"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        sx={{ mt: 1 }}
                    />
                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }} onClick={sendMessage}>
                        Send
                    </Button>
                </Box>
            </Dialog>
        </Container>
    );
};

export default TailorDetails;

