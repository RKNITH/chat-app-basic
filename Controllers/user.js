const UserModel = require('../Models/user');
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
    try {
        let { name, mobileNumber, password, profilePic } = req.body;
        const isExist = await UserModel.findOne({ mobileNumber });
        // watch the video for the full code 
        // 
        // 
        // 
        // 
        // 
        // 
        //     

        res.status(200).json({
            message: "User Registered Successfully",
            newUser,
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Server Error" })
    }
}


const cookieOptions = {
    httpOnly: true,
    secure: false, // Set to true in production
    sameSite: 'Lax'

};


exports.login = async (req, res) => {
    try {
        const { mobileNumber, password } = req.body;
        const userExist = await UserModel.findOne({ mobileNumber });

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

exports.searchMember = async (req, res) => {
    try {
        let { queryParam } = req.query;
        const users = await UserModel.find({
            $and: [
                // watch the video for the full code 
                // 
                // 
                // 
                // 
                // 
                // 
                //     
            ]
        })

        return res.status(201).json(users);

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Server Error" })
    }
}

exports.logout = async (req, res) => {
    res.clearCookie('token', cookieOptions).json({ message: 'Logged out successfully' });
}