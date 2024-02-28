const notificationCOllections = require("../models/notification.js")



// Notification Controllers  =>
exports.notificationControllers = async (req, res) => {
    try {

        let { _id: second_user_id } = req.body;
        let responseNotifications = await notificationCOllections.find({ second_user_id, is_read: { $eq: false } })
        
        responseNotifications ? res.json(
            {
                status: 200,
                massage: "Total notification of length",
                results: responseNotifications.length
            }
        ) : res.json(
            {
                status: 200,
                massage: "No any unread notification found"
            }
        )

    } catch (error) {
        res.json(
            {
                status: 500,
                massage: "server error",
                error: error
            }
        )
    }
}