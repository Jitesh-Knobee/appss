const mongoose = require("mongoose");
let { Schema, model } = mongoose;
const educationScheama = new Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: Number,
        require: true
    }
})

module.exports = model("collageList", educationScheama, "collageList");