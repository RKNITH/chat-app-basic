const express = require('express')
const router = express.Router();
const auth = require('../Authenticaton/auth');
const ConverstionController = require("../Controllers/conversation");

router.post('/add-conversation',auth,ConverstionController.addConversation)
router.get('/get-conversation',auth,ConverstionController.getConversation)

module.exports = router;