const mongoose = require("mongoose")

// post scheama =>
const postScheama = new mongoose.Schema({
    user_id: {
        type: String
    }
    ,
    hive_id: {
        type: String,
        default: 0
    }
    ,
    share_post_id: {
        type: String,
        default: 0
    }
    ,
    share_count: {
        type: String,
        default: 0
    }
    ,
    views: {
        type: String,
        default: 0
    }
    ,
    post_type: {
        type: String
    }
    ,
    post_content: {
        type: String
    }
    ,
    is_active: {
        type: Boolean,
        default: true
    }
    ,
    is_sponsered: {
        type: Boolean
    }
    ,
    is_hive_visibility: {
          type: String
    }
    ,
    is_mate_visibility: {
          type: String
    }
    ,
    is_public_visibility: {
          type: String
    }
    , is_closed_visibility: {
        type: Boolean
    }
    , totallikes: {
        type: Number,
        default: 0
    }
    , totalcomments: {
        type: Number,
         default: 0
    }
    , is_deleted: {
        type: Boolean,
        default: false
    }
    ,
    get_post_report_tag_user: {
        type: String
    },
    created: {
    type: Date,
    default: Date.now
},
    updated: {
           type: String
    }
})

// model for Posts =>
module.exports = mongoose.model("post", postScheama);