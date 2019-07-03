const express =require('express');
const router = express.Router();

const secure = require('../middlewares/secure.mid')
const userController = require('../controllers/user.controller')

router.get('/', secure.isAuthenticated, userController.getUser)
router.put('/fav', secure.isAuthenticated, userController.addFav)
router.put('/wish', secure.isAuthenticated, userController.addWish)
/router.put('/owned', secure.isAuthenticated, userController.addHave)

module.exports =router;