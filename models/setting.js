const { Schema, model } = require("mongoose")

const settingSchema = new Schema(
    {
        chatServerlanguage: {},
        chatServerIP: {},
        oldDatabaseName: {},
        oldDatabaseVersion: {},
        oldServerPlatform: {},
        oldServerAndFrameworkVersion: {},
        defaultSound: {}
    }
)


module.exports = model("setting", settingSchema)