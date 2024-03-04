const FLAG_BASE_URL = process.env.FLAG_BASE_URL;

const city = require("../models/city.js");
// Models => 

const City = require("../models/city.js");
const Country = require("../models/country.js");
const State = require("../models/state.js");

// Country Routers =>

exports.countryControllers = async (req, res) => {
    try {
        const countries = await Country.find({}, { _id: 0 });
        const countryData = countries.map((country) => {
            const doc = country.toObject();
            const flagUrl = doc.countrySortName ? `${FLAG_BASE_URL}${doc.countrySortName.toLowerCase()}.jpg` : '';
            return { ...doc, flagUrl };
        });
        res.status(200).json({ status: 200, data: countryData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ code: 500 });
    }
}

// Cities Routers =>   

// const fs = require("fs")
// const cityPath = "./cities.json"
// fs.readFile(cityPath, "utf-8", (err, results) => {
//     if (err) {
//         console.log(err, " <<< ==== the error")
//     }
//     else {
//         let parseResult = JSON.parse(results);
//         let dataResults = parseResult.map(({ id, state_id, ...rest }) => {

//             return (
//                 {
//                     _id: parseInt(id),
//                     ...rest,
//                     state_id: parseInt(state_id)
//                 }
//             )
//         })
//         City.insertMany(dataResults).then((res) => {
//             console.log("data inserted into database")
//         }).catch((err) => {
//             console.log(err, "data not inserted")
//         })
//     }
// })



exports.citiesControllers = async (req, res) => {
    try {
        let cityName = req.params.cityName;
        if (cityName) {
            let cityData = await City.find({ name: { $regex: new RegExp(`^${cityName}`, 'i') } });
            if (cityData) {
                res.json({
                    status: 200,
                    massage: "city name is being suggest!",
                    results: cityData
                })

            } else {
                res.json({
                    error: "city does not exists."
                })
            }
        }
        else {
            let cityData = await City.find();
            res.status(200).json({
                status: 200,
                massage: "all the cities name!",
                results: cityData
            })
        }

    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })
    }
}

// get state and country basis of city => 

exports.getStateAndCountry = async (req, res) => {
    try {
        let cityInfo = req.params.city?.trim();
        // city Searched =>
        let [{ state_id }] = await City.find({ name: { $regex: new RegExp(`^${cityInfo}`, 'i') } });
        // State searched =>
        let [{ id: stateId, name, country_id }] = await State.find({ id: state_id })
        // country Searched =>
        let [{ id: countryId, countrySortName, countryName, countryCode }] = await Country.find({ id: country_id })
        // send responsed =>
        res.json(
            {
                status: 200,
                cityFrom: {
                    stateInformation: {
                        id: stateId,
                        name: name,
                        country_id: country_id
                    },
                    countryInformation: {
                        id: countryId,
                        countrySortName: countrySortName,
                        countryName: countryName,
                        countryCode: countryCode
                    }
                }
            }
        )
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            error: "Server error"
        });
    }
}