const StoryCollections = require("../models/story.js")
const StoryFileCollections = require("../models/storyFiles.js")
const UserCollections = require("../models/main.js");
const path = require("path")


// get route for story =>
exports.storyControllers = async (req, res) => {
    try {
        let { user_Id, storyType, timeStamp } = req.body;

        let response;

        switch (storyType) {
            case 1:
                response = await StoryCollections.create(req.body);
                break;
            case 2:
                response = await StoryCollections.create(
                    {
                        user_Id: user_Id,
                        storyType, storyType,
                        massage: "",
                        timeStamp: timeStamp
                    }
                )
                // Upload Files Data =>
                let { _id } = response;

                let filesData = req.files.map(({ filename, mimetype, size }) => {
                    return {
                        storyId: _id,
                        fileName: filename,
                        fileMime: mimetype,
                        fileSize: size,
                        created: Date.now()
                    }
                })

                await StoryFileCollections.insertMany(filesData)
                break;
            default:
                res.json(
                    {
                        status: 500,
                        massage: "No Text/File Found"
                    }
                )

        }
        res.json(
            {
                status: 200,
                massage: "Story saved successfully",
                results: response
            }
        )
    }
    catch (error) {
        res.status(500).json(
            {
                status: 500,
                massage: "server error",
                error: error
            }
        )
    }
}
