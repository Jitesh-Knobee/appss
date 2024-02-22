const mongoose = require("mongoose");

let { Schema, model } = mongoose;

// State Scheama =>

let StateScheama = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    country_id: {
        type: Number,
        required: true
    },
})

module.exports = model("state", StateScheama);