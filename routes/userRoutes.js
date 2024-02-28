const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const DataModel = require('../models/main');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { sendOtp, sendInternationalOtp } = require('../services/otpService');
const path = require('path');
const multer = require('multer');
const crypto = require('crypto');
const USER_BASE_URL = process.env.USER_BASE_URL;
const secretKey = process.env.SECRET_KEY;

 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'img', 'UserProfile')); // Use the 'img/UserProfile' directory for saving files
    },
    filename: (req, file, cb) => {
        // Generate a unique file name to prevent name conflicts
        cb(null, file.fieldname + '-Knobee-' + Math.floor(1000000 + Math.random() * 9000000) + path.extname(file.originalname));
    }
});


const upload = multer({ storage: storage });

// Endpoint to check user and send OTP if not found
router.post('/checkUserOtp', async (req, res) => {
    try {
        const { Mobile: mobile, CountryID: countrycode } = req.body;
        if (countrycode == null || countrycode === "") {
            res.status(400).json({ code: 400, message: "CountryID is required" });
            return;
        }
        const user = await DataModel.findOne({ Mobile: mobile, CountryID: countrycode });

        if (user) {
            res.status(200).json({ code: 200, exists: 1 });
        } else {
            const rndno = Math.floor(1000 + Math.random() * 9000);
            let otpResponse;
            const message = `Dear KNOBEE user, ${rndno} is the One Time Password to login to your application. Please Enter the OTP to verify your mobile number. Team KNOBEE.`;
            /* if (countrycode == 91) {
                 otpResponse = await sendOtp(mobile, message);
             } else {
                 otpResponse = await sendInternationalOtp(countrycode, mobile, message);
             }*/
            res.status(200).json({ code: 200, otp: rndno, exists: 0 });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ code: 500 });
    }
});


router.post('/checkKnobeeId', async (req, res) => {
    try {
        const { KnobeeID: code } = req.body;
        const user = await DataModel.findOne({ KnobeeID: code });
        if (user) {
            res.status(200).json({ code: 200, exists: 1 });
        } else {
            res.status(200).json({ code: 200, exists: 0 });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ code: 500 });
    }
});
router.post('/saveUser', upload.single('photo'), async (req, res) => {
    try {
        const { countrycode, mobile, fullname, gender, dob, refercode, email, knbid, password, isCommunity, Community_name } = req.body;
        const [firstname, middlename, lastname] = fullname.split(' ');
        const randomInt = crypto.randomInt(1000, 100000);
        // Hash the user's password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Determine the photo URL
        let photoUrl = '';
        if (req.file) {
            photoUrl = req.file.filename;
        }

        // Create a new user document
        const newUser = new DataModel({
            Firstname: firstname,
            Middlename: middlename,
            Lastname: lastname,
            Gender: gender,
            Dob: dob,
            CountryID: countrycode,
            Mobile: mobile,
            is_varifyMobile: 1,
            Email: email,
            is_varifyEmail: 0,
            KnobeeID: knbid,
            Password: hashedPassword,
            ReferCode: refercode,
            Photo: photoUrl,
            createdAt: Date.now(),
            ReferStatus: '',
            UserStaus: 'Self',
            userAddress: '', 
            about: '',
            age: '',
            city_id: '',
            country_id: '',
            cover_img: '',
            death_aniversary: '',
            FirebaseToken: randomInt,
            ipaddress: '',
            is_alive: 1,
            last_active_date: Date.now(),
            lat_home: '',
            lat_office: '',
            long_home: '',
            long_office: '',
            marital_status: '',
            pincode: '',
            state_id: '',
            ReferPoints: '',
            is_community: '',
            Community_name: '',
            family_hive_id: '',
            updateAt: ''
        });

        // Save the new user document
        const savedUser = await newUser.save();
        const responseData = savedUser.toObject();
        delete responseData.Password;
        delete responseData.FirebaseToken;
        res.status(200).json({ code: 200, message: 'User created successfully', data: responseData, token: randomInt });
    } catch (error) {
        console.error(error);
        res.status(500).json({ code: 500, message: 'Internal Server Error' });
    }
});


router.post('/signin', async (req, res) => {
    const { UsrID, password } = req.body;
    const randomInt = crypto.randomInt(1000, 100000);
    try {
        // Attempt to find the user with either Mobile or KnobeeID
        const user = await DataModel.findOne({
            $or: [{ Mobile: UsrID }, { KnobeeID: UsrID }]
        });

        // If no user is found, or password does not match, send an error response
        if (!user || !(await bcrypt.compare(password, user.Password))) {
            return res.status(401).json({ code: 401, message: 'Invalid credentials' });
        }

        // Update last_active_date and WebToken in the database
        user.last_active_date = new Date();
        user.FirebaseToken = randomInt; // If you decide to store tokens in DB, which is optional and depends on use case

        // Save the updates to the user
        await user.save();

        // Prepare and send the response
        const responseData = {
            ...user.toObject(),
        };
        delete responseData.Password; // Ensure password is not sent back
        delete responseData.FirebaseToken;
        res.status(200).json({
            code: 200,
            message: 'Sign in successful',
            data: responseData,
            token: randomInt
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ code: 500, message: 'Internal Server Error' });
    }
});



module.exports = router;
