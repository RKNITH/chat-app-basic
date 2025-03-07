const MessageModal = require('../Models/message');

exports.sendMessage = async (req, res) => {
    try {
        // watch the video for the full code 
        // 
        // 
        // 
        // 
        // 
        // 
        //     
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Server Error" })
    }
}

exports.getMessage = async (req, res) => {
    try {
        let { convId } = req.params;
        // watch the video for the full code 
        // 
        // 
        // 
        // 
        // 
        // 
        //     
        res.status(200).json({ messages: "Fetched Message Successfully", message })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Server Error" })
    }
}