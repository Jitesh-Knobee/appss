const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema(
    {
        Firstname: {
            type: String,
            maxlength: 255 // Maximum length similar to VARCHAR(255)
        },
        Middlename: { type: String, maxlength: 100 },// Example maximum length

        Lastname: {
            type: String,
            maxlength: 100 // Example maximum length
        },
        OTP: {
            type: Number,
            maxlength: 4 // Example maximum length
        },
        Gender: {
            type: String,
            maxlength: 15 // Example maximum length
        },
        Dob: {
            type: String,
            maxlength: 15 // Example maximum length
        },
        CountryID: {
            type: String,
            maxlength: 100 // Example maximum length
        },
        Mobile: {
            type: String,
            maxlength: 100 // Example maximum length
        },
        is_varifyMobile: {
            type: Number,
            maxlength: 1 // Example maximum length
        },
        Email: {
            type: String,
            maxlength: 100 // Example maximum length
        },
        is_varifyEmail: {
            type: Number,
            maxlength: 1 // Example maximum length
        },
        KnobeeID: {
            type: String,
            maxlength: 100 // Example maximum length
        },
        Password: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        ReferCode: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        Photo: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        ReferStatus: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        UserStaus: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        updateAt: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        userAddress: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        about: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        age: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        city_id: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        country_id: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        cover_img: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        death_aniversary: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        
        family_hive_id: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        ipaddress: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        is_alive: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        last_active_date: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        lat_home: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        lat_office: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        long_home: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        long_office: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        marital_status: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        pincode: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        state_id: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        ReferPoints: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        is_community: {
            type: String,
            maxlength: 2 // Example maximum length
        },
        Community_name: {
            type: String,
            maxlength: 255 // Example maximum length
        },
        FirebaseToken: {
            type: String,
            maxlength: 500 // Example maximum length
        },
        Visible_to_public: {
            type: String,
            default: 1
        },
        Visible_to_mates: {
            type: String,
            default: 1
        },
        Visible_to_hives: {
            type: String,
            default: 1
        },
    });

// Create a Mongoose model based on the schema
const DataModel = mongoose.model('Users', dataSchema, 'Users');

module.exports = DataModel;