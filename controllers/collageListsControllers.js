const Collage = require("../models/collegeLists.js");

//  college List => 

exports.collageListControllers = async (req, res) => {
    try {

        let { collageName } = req.params;

        if (collageName) {
            let collegeNameSuggesting = await Collage.find({ name: { $regex: new RegExp(`^${collageName}`, 'i') } });
            if (collegeNameSuggesting.length > 0) {
                res.json(
                    {
                        status: 200,
                        massage: "collage names related to matched keywords",
                        results: collegeNameSuggesting
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
        }
        else {
            let allCollegeNames = await Collage.find();
            res.json(
                {
                    status: 200,
                    massage: "List of all collage Names.",
                    results: allCollegeNames,
                }
            )
        }

    } catch (error) {

        res.json(
            {
                status: 500,
                massage: "server error",
                error: error
            }
        )

    }

}