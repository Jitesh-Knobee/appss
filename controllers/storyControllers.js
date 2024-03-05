const StoryCollections = require("../models/story.js")
const multer = require("multer")
 
// get route for story =>

exports.storyControllers = async (req, res, next) => {
    try {
        // let [{ user_Id, storyType, massage, fileName, timeStamp }] = req.body;
        // let response = await StoryCollections.create(req.body);
        // res.status(200).json(
        //     {
        //         status: 200,
        //         massage: 'data saved successfully',
        //         results: response
        //     }
        // )
    } catch (error) {
        res.send(500).json(
            {
                status: 500,
                massage: "server error",
                error: error
            }
        )
    }
}



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