const mongoose = require("mongoose")

const { Schema, model } = mongoose;

const educationDetailScheama = new Schema(
    {
        user_id: {
            type: {},
            required: true
        },
        courseName: {
            type: String,
            required: true
        },
        schoolOrCollageName: {
            type: String,
            required: true
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
        },
        courseDuration: {
            startDate: {
                type: String,
                required: true
            },
            endDate: {
                type: String,
                required: true
            },
        },
    }
)

// models for education details =>

module.exports = model("userEducationDetail", educationDetailScheama, "userEducationDetails");