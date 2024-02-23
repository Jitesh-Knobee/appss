require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const http = require('http').createServer(app);
const path = require('path'); // Import the path module
// const IPP = process.env.IPP;
// const PORT = process.env.PORT;

// access token =>  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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/img/flag', express.static(path.join(__dirname, 'img', 'Flag')));
app.use('/img/userPost', express.static(path.join(__dirname, 'img', 'UserPost')));


// Define MongoDB connection URI 
const mongoURI = process.env.mongoURI;

// Connect to MongoDB
mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));



// Use routes => 
app.use('/collageInfo', require('./routes/collageRoutes.js'))
app.use('/countryInfo', require('./routes/countryRoutes.js'));
app.use('/user', require('./routes/userRoutes'));
app.use('/post', require('./routes/postRoutes'));

// post routes =>
app.use(require("./routes/educationDetailRoutes.js"))
app.use(require("./routes/workDetailRoutes.js"))

const server = http.listen("8080", () => {
    try {
        const host = server.address().address;
        const port = server.address().port;
        // console.log(`Server is running at http://${host}:${port}`);
        console.log("server is running on => 8080")
    } catch (error) {
        console.log("server disconnected!")
    }
});

