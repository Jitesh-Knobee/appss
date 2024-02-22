const { Schema, model } = require("mongoose")

// Scheama =>
const workDetailsScheama = new Schema(
    {
        user_id: {
            type: String,
            required: true
        },
        companyDetails: {
            jobType: {
                type: String,
                required: true
            },
            companyName: {
                type: String,
                required: true
            },
            designation: {
                type: String,
                required: true
            },m
        },
        location: {
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            },
        }
    }
)

// model => 
module.exports = model("workDetail", workDetailsScheama)
