const mongoose = require("mongoose");

//   Scheama  cities =>

const cityScheama = new mongoose.Schema(
    {
        _id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
        },
        state_id: {
            type: Number,
            required: true
        }
    }
);

//   models  cities =>
module.exports = mongoose.model("cityList", cityScheama, "cityLists");