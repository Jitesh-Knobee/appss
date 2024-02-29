const Collage = require("../models/college.js");

// Education =>

exports.educationControllers = async (req, res) => {
    try {
        let { collageName } = req.params;

        if (collageName) {
            let collegeNameSuggesting = await Collage.find({ name: { $regex: new RegExp(`^${collageName}`, 'i') } });
            if (collegeNameSuggesting.length > 0) {
                res.json(
                    {
                        status: 200,
                        CollegeNames: collegeNameSuggesting
                    }
                )
            }
            else {
                res.json(
                    {
                        status: 500,
                        massage: "no results"
                    }
                )
            }
        } else {
            let allCollegeNames = await Collage.find();
            res.json(
                {
                    status: 200,
                    massage: "all the collages",
                    CollegeNames: allCollegeNames,
                }
            )
        }

    } catch (error) {
        console.log("internal server error", error);
    }

}