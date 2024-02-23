require('dotenv').config();
const express = require('express');
const { main } = require("./config/db.js")
const app = express();
const path = require('path');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/img/flag', express.static(path.join(__dirname, 'img', 'Flag')));
app.use('/img/userPost', express.static(path.join(__dirname, 'img', 'UserPost')));

// database connected =>
main();

// Use routes => 
app.use('/collageInfo', require('./routes/collageRoutes.js'))
app.use('/countryInfo', require('./routes/countryRoutes.js'));
app.use('/user', require('./routes/userRoutes'));
app.use('/post', require('./routes/postRoutes'));
app.use(require("./routes/educationDetailRoutes.js"))
app.use(require("./routes/workDetailRoutes.js"))
 


app.listen(process.env.PORT || "8080", () => {
    console.log("server connected -> ", process.env.PORT)
})