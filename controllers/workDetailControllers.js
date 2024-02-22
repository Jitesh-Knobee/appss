exports.workDetailControllers = async (req, res) => {
    try {

    } catch (error) {
        res.json(
            {
                status:500,
                massage:"server error"
            }
        )
        console.log(error, "server error")
    }
}


