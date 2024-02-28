require('dotenv').config();
const express = require('express')
const { main } = require("./config/db.js")
const app = express();
const path = require('path');


// const DataModel = require("./models/main.js")

// DataModel.findOne({ _id: "65cdb2889ca5208bdd7ac1ea" }).then((result) => {
//     console.log(result, "<< === data fetched  from users")

// }).catch((error) => {
//     console.log(error, "<<===== data not fetched from users")
// });




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/img/flag', express.static(path.join(__dirname, 'img', 'Flag')));
app.use('/img/userPost', express.static(path.join(__dirname, 'img', 'UserPost')));

// database connected =>
main();


// Use routes => 

app.use(require("./routes/advanceSearchRoutes.js"));

app.use(require("./routes/workDetailRoutes.js"));
app.use(require("./routes/educationDetailRoutes.js"));

app.use('/collageInfo', require('./routes/collageRoutes.js'));
app.use('/countryInfo', require('./routes/countryRoutes.js'));


app.use('/user', require('./routes/userRoutes'));
app.use('/post', require('./routes/postRoutes'));



app.listen(process.env.PORT || "8080", () => {
    console.log("server connected -> ", process.env.PORT)
})