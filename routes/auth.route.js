var express = require('express');
var router = express.Router();

const secure = require('../middleware/secure.mid')
const authController = require('../controllers/auth.controller');

router.post('/register',authController.register)
router.post('/authenticate',authController.authenticate)
router.post('/logout',secure.isAuthenticated,authController.logout)

//router.get('/getProfile/:id', auth.getProfile);

//router.put('/editProfile/:id', auth.editProfile);


module.exports = router;
