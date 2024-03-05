const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');
const multer = require('multer');
const USER_BASE_URL = process.env.USER_BASE_URL;
const secretKey = process.env.SECRET_KEY;


// collections => 
const DataModel = require('../models/main');
const PostModel = require('../models/post');
const PostFiles = require('../models/postfiles');



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'img', 'UserPost'));
    },
    filename: (req, file, cb) => {
        // Generate a unique file name to prevent name conflicts
        cb(null, file.fieldname + '-Knobee-' + Math.floor(1000000 + Math.random() * 9000000) + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });



router.post('/savePost', upload.array('filesdata', 30), async (req, res) => {
    try {
        const { userID, post_type, post_content, is_hive_visibility, is_mate_visibility, is_public_visibility, token } = req.body;
        const user = await DataModel.findOne({ FirebaseToken: token });

        if (!user) {
            return res.status(401).json({ code: 401, message: 'Unauthorized: Invalid token' });
        }

        let savePost;

        switch (post_type) {
            case '1':
                savePost = await PostModel.create({
                    user_id: userID,
                    post_type: post_type,
                    post_content: post_content,
                    is_hive_visibility: is_hive_visibility,
                    is_mate_visibility: is_mate_visibility,
                    is_public_visibility: is_public_visibility,
                });
                break;

            case '2':
                if (!req.files || req.files.length === 0) {
                    return res.status(400).json({ code: 400, message: 'No files uploaded' });
                }

                let order = 1;
                savePost = await PostModel.create({
                    user_id: userID,
                    post_type: post_type,
                    post_content: post_content,
                    is_hive_visibility: is_hive_visibility,
                    is_mate_visibility: is_mate_visibility,
                    is_public_visibility: is_public_visibility,
                });


                const fileData = req.files.map(file => ({
                    post_id: savePost._id,
                    filename: file.originalname,
                    filemime: file.mimetype,
                    filesize: file.size,
                    created: new Date(),
                    order: order++,
                }));

                await PostFiles.insertMany(fileData);
                break;
            default:
                return res.status(400).json({ code: 400, message: 'Invalid Post Type' });
        }


        res.status(200).json(
            {
                code: 200,
                message: 'Saved successfully',
                results: savePost
            }
        );

    } catch (error) {
        console.error(error);
        res.status(500).json(
            {
                code: 500,
                message: 'Internal Server Error',
                error: error
            }
        );
    }
});



module.exports = router;