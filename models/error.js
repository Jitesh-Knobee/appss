const { Schema, model } = require("mongoose")


const errorSchema = new Schema(
    {
        errorId: {},
        errorMassage: {}
    }
)

module.exports = model("error", errorSchema);