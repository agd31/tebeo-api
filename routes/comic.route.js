const express = require('express');
const router = express.Router();

const secure = require('../middlewares/secure.mid')
const comicController = require('../controllers/comic.controller')

router.get('/',secure.isAuthenticated,comicController.list) //hecho
router.get('/:id',secure.isAuthenticated,comicController.showComic)//hecho
router.post('/search',secure.isAuthenticated,comicController.searchComic)




module.exports = router;