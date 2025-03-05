const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
dotenv.config();

const cors = require('cors');
const PostRoutes = require('./routes/Post');

const app = express(); // Define app first

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect MongoDB  
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected');
    })
    .catch((error) => {
        console.log(error);
    });

// Use Routes
app.use('/api/posts', PostRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
