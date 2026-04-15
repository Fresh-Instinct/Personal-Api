const express = require('express');
const app = express();

const PORT = 3000;

// Root endpoint
app.get('/', (req, res) => {
    res.status(200).json({
        message: "API is running"
    });
});

// Health endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        message: "healthy"
    });
});

// Me endpoint
app.get('/me', (req, res) => {
    res.status(200).json({
        name: "Paul Akpata",
        email: "paulakpata358@gmail.com",
        github: "https://github.com/Fresh-Instinct"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
