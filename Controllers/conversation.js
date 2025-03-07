const ConversationModal = require("../Models/conversation");


exports.addConversation = async (req, res) => {
    try {
        let senderId = req.user._id;
        // watch the video for the full code 
        // 
        // 
        // 
        // 
        // 
        // 
        //     
        res.status(200).json({
            message: "Added Successfully",
            conversation: newConversation
        })

    } catch (err) {
        z
        console.log(err)
        res.status(500).json({ error: "Server Error" })
    }
}

exports.getConversation = async (req, res) => {
    try {
        let loggedinId = req.user._id;
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