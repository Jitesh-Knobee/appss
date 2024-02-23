const WorkCollection = require("../models/workDetails.js");
const UserCollection = require("../models/main.js");

exports.workDetailControllers = async (req, res) => {
    try {
        // User collection ID =>
        ({ _id: req.body.user_ID } = await UserCollection.findOne())
        let responseByDB = await WorkCollection.create(req.body);
        res.json(
            {
                status: 201,
                response: {
                    massage: "Work Details submitted Successfully",
                    results: responseByDB
                }
            }
        ) 
    } catch (error) {
        res.status(500).json(
            {
                status: 500,
                massage: "company details already exists",
                error: error
            }
        )
    }
}
