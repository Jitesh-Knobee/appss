const mongoose = require("mongoose")
const { Schema, model } = mongoose;

// Scheama Post image =>
const post_imagesSheama = new Schema(
    {
        post_id: {
            type: String,
            required: true
        },
        chat_id: {
            type: String,
        },
        share_count: {
            type: Number,
            default: 0
        },
        views: {
            type: Number,
            default: 0
        },
        filename: {
            type: String
        },
        filemime: {
            type: String,
        },
        filesize: {
            type: Number,
        },
        comment_id: {
            type: Number,
            default: null
        },
    created: {
        type: Date,
        required: true
    },
      order: {
            type: Number,
            default: null
        },
    }
)

// models post images =>

module.exports = model("postFiles", post_imagesSheama);
