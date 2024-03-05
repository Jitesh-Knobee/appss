const { Schema, model } = require("mongoose")



// Story Schema =>
const storySchema = new Schema(
    {
        user_Id: String,
        storyType: Number,
        massage: String,
        timeStamp: Date
    }
)

// models
module.exports = model("story", storySchema, "story")