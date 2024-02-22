const mongoose = require('mongoose');

// Define a Mongoose schema for the data
const dataSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Create a Mongoose model based on the schema
const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;
