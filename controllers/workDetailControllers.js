const WorkCollection = require("../models/workDetails.js");
const UserCollection = require("../models/main.js");

// Post => workdetails routes 

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


//Update => workdetails route 

exports.workUpdateControllers = async (req, res) => {
    try {
        // extract update value =>
        let { _id, ...updateWork } = req.body;
        // Update the value =>
        let response = await WorkCollection.updateOne({ _id: _id }, updateWork)
        res.json(
            {
                status: 200,
                massage: "work details updated successfully",
                results: response
            }
        )
    } catch (error) {
        // response to client =>
        res.status(500).json(
            {
                status: 500,
                massage: "work details not updated",
                response: error
            }
        )
    }
}


// Delete => work details route 

exports.workDeleteControllers = async (req, res) => {
    try {
        let { _id } = req.body;

        // Delete from DataBase =>
        let response = await WorkCollection.findByIdAndDelete({ _id });

        // response =>
        res.json({
            status: 200,
            massage: 'work details deleted successfully',
            results: response
        })
    } catch (error) {
        res.json(
            {
                status: 500,
                massage: "work details not deleted, server error",
                error: error
            }
        )
    }
}