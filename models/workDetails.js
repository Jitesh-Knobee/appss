const { Schema, model } = require("mongoose")

// Scheama =>
const workDetailsScheama = new Schema(
    {
        user_ID: {
            type: {},
            required: true
        },
        companyDetails: {
            jobType: {
                type: String,
                required: true
            },
            companyName: {
                type: String,
                required: true,
                unique: true
            },
            designation: {
                type: String,
                required: true
            },
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
        workDuration: {
            startDate: {
                type: String,
                required: true,
                unique: true
            },
            endDate: {
                type: String,
                required: true,
                unique: true
            },
        }
    }
)

// If do not want to add same duration for work =>
// workDetailsScheama.index({ 'workDuration.startDate': 1, 'workDuration.endDate': 1 }, { unique: true, sparse: true });


// model => 
module.exports = model("UserWorkDetail", workDetailsScheama, "userWorkDetails");
