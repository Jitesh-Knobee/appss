const mongoose = require("mongoose");

//   Scheama  cities =>
const cityScheama = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        state_id: {
            type: String,
            required: true
        }
    }
);

//   models  cities =>
module.exports = mongoose.model("cityList", cityScheama);