var express = require('express');
var router = express.Router();

const secure = require('../middlewares/secure.mid')
const authController = require('../controllers/auth.controller');

router.post('/register',authController.register)
router.post('/login',authController.authenticate)
router.post('/logout',secure.isAuthenticated,authController.logout)
//router.post('/edit',authController.edit)

//router.get('/getProfile/:id', auth.getProfile);

//router.put('/editProfile/:id', auth.editProfile);


module.exports = router;
