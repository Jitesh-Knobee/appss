const { Schema, model } = require("mongoose")

const userSettingSchema = new Schema(

    {
        userId: {},
        userFontSize: {},
        userFontType: {},
        userLanguage: {},
    }
)


module.exports = model("userSetting", userSettingSchema, "userSetting")