const Education = require("../models/educationDetails.js")
exports.educationDetailControllers = async (req, res) => {
    try {
        let { courseType, collageName, location: { city, state, country }, duration: { startDate, endDate } } = await req.body;
        // insert Data into database =>
        let response = await Education.create(
            {
                courseName: courseType,
                schoolOrCollageName: collageName,
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
        )
        // response to  client =>
        res.json(
            {
                status: 200,
                massage: "Education details submitted successfully",
                response: response
            }
        )
    } catch (error) {
        res.json(
            {
                status: 500,
                massage: "Education details not submitted",
                response: error
            }
        )
    }
}

