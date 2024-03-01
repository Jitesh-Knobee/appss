const mongoose = require("mongoose");

// Collage Lists Schema => 

let { Schema, model } = mongoose;
const collageListsSchema = new Schema(
    {
        _id: {
            type: Number,
            require: true
        },
        name: {
            type: String,
            require: true
        },
        type: {
            type: Number,
            require: true
        }
    }
)

module.exports = model("collageList", collageListsSchema, "collageLists");