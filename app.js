require('dotenv').config();
const express = require('express');
const { main } = require("./config/db.js")
const app = express();
const path = require('path');
const cors = require("cors")

app.use(cors());

 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/img/flag', express.static(path.join(__dirname, 'img', 'Flag')));
app.use('/img/userPost', express.static(path.join(__dirname, 'img', 'UserPost')));

// database connected =>
main();


// Use routes => 
app.use(require("./routes/storyRoutes.js"))
app.use(require("./routes/notificationRoutes.js"));
app.use(require("./routes/advanceSearchRoutes.js"));
app.use(require("./routes/workDetailRoutes.js"));
app.use(require("./routes/educationDetailRoutes.js"));

// collage list => 
app.use(require('./routes/collageListsRoutes.js'));
app.use(require('./routes/addressRoutes.js'));
app.use('/user', require('./routes/userRoutes'));
app.use('/post', require('./routes/postRoutes'));



app.listen(process.env.PORT || "8080", () => {
    console.log("server connected -> ", process.env.PORT)
})