var express = require('express');
var router = express.Router();

const secure = require('../middlewares/secure.mid')
const authController = require('../controllers/auth.controller');

router.post('/register',authController.register)
router.post('/login',authController.authenticate)
router.post('/logout',secure.isAuthenticated,authController.logout)
//router.put('/addWish',authController.addaddWish) //revisar
//router.put('/addFav',authController.addFav)
// router.put('/addHave',authController.addHave)
// router.delete('/deleteComicToWish/:id',authController.deleteComicToWish) 
// router.delete('/deleteComicToFavs/:id',authController.deleteComicToFavs) 
// router.delete('/deleteComicToHave/:id',authController.deleteComicToHave) 
//router.get('/favs',secure.isAuthenticated,authController.listFavs)
//router.get('/comics/have',secure.isAuthenticated,comicController.listHave)
// router.get('/comics/wish',secure.isAuthenticated,comicController.listWish)

module.exports = router;
