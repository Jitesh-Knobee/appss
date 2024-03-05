const { Schema, model } = require("mongoose")


// Schema of storyFileSchema =>
const storyFilesSchema = new Schema(
    {
        storyId: {
            type: String,
            required: true
        },
        fileName: String,
        fileMime: String,
        fileSize: Number,
        created: {
            type: Date,
            required: true
        },
    }
)


// model =>
module.exports = model("storyFiles", storyFilesSchema, "storyFiles")

 
//     let dummy = [
//     {
//         "user_Id": "user123",
//         "storyType": 1,
//         "massage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         "fileName": "image1.jpg",
//         "timeStamp": "2024-03-04T12:00:00Z"
//     },
//     {
//         "user_Id": "user456",
//         "storyType": 2,
//         "massage": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         "fileName": "video1.mp4",
//         "timeStamp": "2024-03-04T13:30:00Z"
//     },
// ]