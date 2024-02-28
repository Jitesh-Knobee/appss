

const userScheama = {

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

    marital_status: {
        type: String,
        maxlength: 255 // Example maximum length
    },

    // Contact of the User =>

    contact: {

        CountryID: {
            type: String,
            maxlength: 100 // Example maximum length
        },

        mobile: {
            type: Number,
            maxlength: 10
        },
        email: {
            type: Number,
            maxlength: 10
        }
    },


    // Varification of User =>

    OTP: {
        type: Number,
        maxlength: 4 // Example maximum length
    },

    isVarified: {

        is_varifyEmail: {
            type: Number,
            maxlength: 1 // Example maximum length
        },

        is_varifyMobile: {
            type: Number,
            maxlength: 1 // Example maximum length
        },

    },


    // address of the user =>

    address: {

        pincode: {
            type: String,
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

        lat_home: {
            type: String,
            maxlength: 255 // Example maximum length
        },

        long_home: {
            type: String,
            maxlength: 255 // Example maximum length
        },

    },

    // user status =>

    Status: {

        userStatus: {
            type: String,
            maxlength: 255
        },

        is_alive: {
            type: String,
            maxlength: 255 // Example maximum length
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


    Photo: {
        type: String,
        maxlength: 255 // Example maximum length
    },

    cover_img: {
        type: String,
        maxlength: 255 // Example maximum length
    },

    ipaddress: {
        type: String,
        maxlength: 255 // Example maximum length
    },

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

    },

    // community details of user =>

    community: {

        communityName: {
            type: String,
            maxlength: 255
        },

        IsCommunity: {
            type: String,
            maxlength: 2
        }
    },

    // Knobee ID and Password for User

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

        ReferPoints: {
            type: String,
            maxlength: 255 // Example maximum length
        },

    },



    createdAt: {
        type: Date,
        default: Date.now
    },

    updateAt: {
        type: String,
        maxlength: 255 // Example maximum length
    },

}