const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mobileNumber:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        default:"https://img.freepik.com/premium-vector/photograph-cartoon-vector_970209-9543.jpg?ga=GA1.1.1408379961.1714224392&semt=ais_hybrid"
    }
},{timestamps:true});

module.exports = mongoose.model("User",UserSchema)