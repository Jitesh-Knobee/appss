const { connect } = require("mongoose");
const { config } = require("dotenv");
config();

// DataBase =>
exports.main = async () => {
    try {
        await connect(process.env.mongoURI)
        console.log("database connected")
    } catch (error) {
        console.log("database not connected")
    }
}