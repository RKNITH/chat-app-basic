const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Conversation"
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    message: {
        type:String,
        required:true
    }

},{timestamps:true});

module.exports = mongoose.model("Message",MessageSchema)