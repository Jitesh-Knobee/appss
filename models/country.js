const mongoose = require("mongoose")

let { model, Schema } = mongoose;

// Scheam =>
let countryScheama = new Schema(
    {
        id: {
            type: Number,
            require: true
        },
        countrySortName: {
            type: String,
            require: true
        },
        countryName: {
            type: String,
            require: true
        },
        countryCode: {
            type: Number,
            require: true
        },
        pattern: {
            type: String,
            require: true
        },
    }
)

// models =>
module.exports = model("countryList", countryScheama)

