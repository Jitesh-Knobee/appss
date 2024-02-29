
const UserCollections = require("../models/user.js");
const EducationCollections = require("../models/educationDetails.js");
const CompanyCollections = require("../models/workDetails.js"); 


// Post => Advance searches controllers for users =>

exports.advanceSearchControllers = async (req, res) => {
    try {
        let { gender, marital_status, ageRange: { startAgeRange, endAgeRange }, courseName, schoolOrCollageName, companyName } = req.body;
        if (gender && marital_status && startAgeRange && endAgeRange) {

            let response = await UserCollections.find(
                {
                    gender: { $regex: new RegExp(gender, 'i') },
                    marital_status: { $regex: new RegExp(marital_status, 'i') },
                    age: { $gte: startAgeRange, $lte: endAgeRange }
                }
            );

            response.map(({ _id, ...remainedData }) => {
                let id = _id.toString();
                let educationResponse = EducationCollections.findOne({ user_id: id, courseName, schoolOrCollageName })
                if (educationResponse) {

                    let companyResponse = CompanyCollections.findOne({ user_id: id, companyDetails: { companyName } })

                    companyResponse ? res.json(
                        {
                            status: 200,
                            massage: "User Found Successfully",
                            userDetails: {
                                userData: remainedData,
                                userEducationDetails: educationResponse,
                                userWorkDetails: companyResponse
                            }
                        }
                    ) :
                        res.json(
                            {
                                status: 200,
                                massage: "Work details not matched, User Not Found"
                            }
                        )

                }
                else {
                    res.json(
                        {
                            status: 200,
                            massage: "Education details not matched, User Not Found"
                        }
                    )
                }
            })

        }
        else {
            res.json(
                {
                    status: 200,
                    massage: "Provide Enough Data To Search User Details"
                }
            )
        }

    } catch (error) {
        res.json(
            {
                status: 500,
                massage: "Internal server error",
                error: error
            }
        )
    }
}



// // dummy User searched data =>
// {
//     "user_id": "123456",
//     "gender": "Male",
//     "maritalStatus": "Single",
//     "ageRange": {
//         "startAgeRange": 9,
//         "endAgeRange": 18
//     },
//     "location": "New York",
//     "courseName": "Bachelor's Degree",
//     "schoolOrCollageName": "University of XYZ",
//     "companyName": "ABC Corporation",
//     "keywords": "JavaScript, Node.js, MongoDB"
// }