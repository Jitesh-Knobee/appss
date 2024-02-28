const { Schema, model } = require("mongoose")


// Notification Scheam =>
const notificationSchema = new Schema(
    {
        user_id: {
            type: String,
            required: true
        },
        second_user_id: {
            type: String,
            required: true
        },
        post_id: {
            type: String,
            required: true
        },
        comment_id: {
            type: String,
            required: true
        },

        title: String,

        description: String,

        reDirection: String,
        
        is_read: {
            type: Boolean,
            required: true
        },
        is_hide: {
            type: Boolean,
            required: true
        },
        created: {
            type: Date,
            required: true
        }
        ,
        updated: Date,
    }
)



module.exports = model("notification", notificationSchema,)