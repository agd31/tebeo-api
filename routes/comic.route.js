var express = require('express');
var router = express.Router();

const secure = require('../middlewares/secure.mid')
const comicController = require('../controllers/comic.controller')

router.get('/comics',secure.isAuthenticated,comicController.list) //hecho
router.get('/comics/:id',secure.isAuthenticated,comicController.showComic)//hecho




module.exports = router;