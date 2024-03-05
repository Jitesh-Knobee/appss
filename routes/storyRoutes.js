const { Router } = require("express")
const { storyControllers } = require("../controllers/storyControllers.js")
const router = Router();


const multer = require("multer")

const storage = multer.diskStorage(
    {
        destination: function (req, file, cb) {
            cb(null, 'hello/');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    }
);

console.log(multer,"<<<< ==== the storage object is ")

// Initialize Multer instance
const uploads = multer({ storage: storage });



// get router => 
router.post("/story", uploads.single('image'), storyControllers)

module.exports = router;
