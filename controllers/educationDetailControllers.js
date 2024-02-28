const Education = require("../models/educationDetails.js");
const UserCollection = require("../models/main.js");


// Create Users Education Details =>
 
exports.educationDetailControllers = async (req, res) => {
    try {
        ({ _id: req.body.user_id } = await UserCollection.findOne())
        let response = await Education.create(req.body)
        res.json(
            {
                status: 200,
                massage: "Education details submitted successfully",
                response: response 
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                status: 500,
                massage: "Education details not submitted",
                response: error
            }
        )
    }
}

// Update Users Education Details => 

exports.updateEducationDetailControllers = async (req, res) => {
    try {
        let { _id, courseName, schoolOrCollageName, location: { city, state, country }, courseDuration: { startDate, endDate } } = await req.body;
        // Update data =>
        let updatedEducationData = {
            courseName: courseName,
            schoolOrCollageName: schoolOrCollageName,
            location: {
                city: city,
                state: state,
                country: country
            },
            courseDuration: {
                startDate: startDate,
                endDate: endDate
            }
        }
        // query =>
        let updateEducationDetails = await Education.findByIdAndUpdate(_id, updatedEducationData, { new: true })
        res.json({
            massage: "Education details updated successfully",
            response: updateEducationDetails
        })
    } catch (error) {
        res.json({
            massage: "server error",
            error: error
        })
    }
}


// Delete Users Education Details => 
exports.deleteEducationDetailControllers = async (req, res) => {
    try {
        let { _id } = req.body;
        let response = await Education.findByIdAndDelete(_id);
        res.json(
            {
                status: 200,
                massage: "Education deleted successfully",
                response: response,
            }
        )
    } catch (error) {
        res.status(500).json({
            status: 500,
            massage: "server error",
            error: error
        })
    }
}


