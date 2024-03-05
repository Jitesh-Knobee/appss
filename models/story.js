const { Schema, model } = require("mongoose")



// Story Schema =>
const storySchema = new Schema(
    {
        user_Id: String,
        storyType: {
            type: Number
        },
        massage: {
            type: String
        },
        fileName: {
            type: String
        },
        timeStamp: {
            type: Date
        }
    }
)

// models
module.exports = model("story", storySchema, "story")