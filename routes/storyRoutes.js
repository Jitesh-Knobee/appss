const { Router } = require("express")
const { storyControllers } = require("../controllers/storyControllers.js")
const router = Router();
const path = require("path")

const multer = require("multer")

const storage = multer.diskStorage(
    {
        destination: function (req, file, cb) {
            cb(null, path.join(process.cwd(), 'img', 'UserStory'));
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    }
);

const uploads = multer({ storage: storage });

// post router => 
router.post("/story", uploads.array('Image&videos'), storyControllers)

module.exports = router;
