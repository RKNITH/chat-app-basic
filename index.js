const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {Server} = require('socket.io')
const http = require("http");
const PORT = 8000;

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:['GET','POST'],
    }
})


const UserRoutes = require('./Routes/user');
const ConversationRoutes = require("./Routes/conversation")
const MessageRoutes = require("./Routes/message")


require('./Database/conn');
app.use(express.json());
app.use(cookieParser())


io.on('connection',(socket)=>{
    console.log("User connected")

    // watch the video for the full code 
// 
// 
// 
// 
// 
// 
//     
})

app.use(cors({
    credentials:true,
    origin:"http://localhost:3000"
}))
app.use('/api/auth',UserRoutes);
app.use('/api/conversation',ConversationRoutes)
app.use('/api/chat',MessageRoutes)

server.listen(PORT,()=>{
    console.log("Backend Project is running on Port",PORT)
})