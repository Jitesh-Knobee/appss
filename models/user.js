const { Schema, model } = require("mongoose")

const userScheama = new Schema(
    {
        // Name of the User => 

        name: {
            firstName: {
                type: String,
                maxlength: 255
            },
            lastName: {
                type: String,
                maxlength: 100
            },
        },

        // Gender of the User =>

        gender: String,

        dob: String,

        age: Number,

        marital_status: String,

        // Contact of the User =>

        contact: {

            countryCode: {
                type: String,
            },

            mobile: {
                type: Number,
                default: 10
            },
            email: String
        },


        // Varification of User =>

        OTP: {
            type: Number,
            maxlength: 4 // Example maximum length
        },

        isVarified: {

            is_varifyEmail: Boolean,

            is_varifyMobile: Boolean,

        },


        // address of the user =>

        address: {

            pincode: {
                type: Number,
                maxlength: 255 // Example maximum length
            },

            city_id: {
                type: String,
                maxlength: 255
            },

            state_id: {
                type: String,
                maxlength: 255
            },

            country_id: {
                type: String,
                maxlength: 255
            },

        },

        // Co-ordinates (location point) of user =>

        co_ordinates: {

            lat_home: Number,

            long_home: Number,

        },

        // user status =>

        Status: {

            userStatus: {
                type: String,
                maxlength: 255
            },

            is_alive: {
                type: Boolean,
            },

            last_active_date: {
                type: String,
                maxlength: 255 // Example maximum length
            },

            death_aniversary: {
                type: String,
                maxlength: 255 // Example maximum length
            },

        },

        // Extra things about the user =>

        about: {
            type: String,
            maxlength: 255 // Example maximum length
        },


        Photo: String,

        cover_img: String,

        ipaddress: String,

        FirebaseToken: {
            type: String,
            maxlength: 500 // Example maximum length
        },

        // hive =>
        hives: {

            family_hive_id: {
                type: String,
                maxlength: 255  // Example maximum length
            },
        },


        // visibility =>

        visibility: {

            Visible_to_public: {
                type: Number,
                default: 1
            },
            Visible_to_mates: {
                type: Number,
                default: 1
            },
            Visible_to_hives: {
                type: Number,
                default: 1
            },

        },

        // community details of user =>

        community: {

            communityName: {
                type: String,
                maxlength: 255
            },

            IsCommunity: {
                type: Boolean,
            }
        },

        // Knobee ID and Password for User  =>

        ourKnobee: {

            knobeeID: {
                type: String,
                maxlength: 100
            },

            password: {
                type: String,
                maxlength: 255
            },

            referCode: {
                type: String,
                maxlength: 255
            },

            referStatus: {
                type: String,
                maxlength: 255
            },

            ReferPoints: Number

        },

        createdAt: {
            type: Date,
            default: Date.now 
        },

        updateAt: {
            type: Date,
        },

    }
)




module.exports = model("UserNewSchema", userScheama, "UserNewSchema")