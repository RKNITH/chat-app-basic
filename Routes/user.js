const express = require('express')
const router = express.Router();
const UserController = require('../Controllers/user');
const auth = require('../Authenticaton/auth');

router.post('/register',UserController.register);
router.post('/login',UserController.login)
router.get('/searchedMember',auth,UserController.searchMember)
router.post('/logout',auth,UserController.logout)
module.exports = router;