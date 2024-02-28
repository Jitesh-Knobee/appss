const { Schema, model } = require("mongoose");


// adwanced search scheama to search about user =>

const advanceSearchSchema = new Schema(
    {
        user_id: {
            type: {},
            required: true
        },

        gender: String,
        maritalStatus: String,

        ageRange: {
            startAgeRange: Number,
            endAgeRange: Number
        },

        location: String,
        qaulification: String,
        institutions: String,
        companyName: String,
        keywords: String
    }
)

module.exports = model("advanceSearch", advanceSearchSchema, "advanceSearch")