const express = require('express')
const router = express.Router();
const auth = require('../Authenticaton/auth');
const MessageController = require("../Controllers/message")

router.post('/post-message-chat',auth,MessageController.sendMessage);
router.get('/get-message-chat/:convId',auth,MessageController.getMessage)
module.exports = router;