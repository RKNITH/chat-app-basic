const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/chatApp").then((response)=>{
    console.log("MongoDb Database Connected SuccessFully");
}).catch(err=>{
    console.log(err)
})