const express = require('express');
const router = express.Router();

const secure = require('../middlewares/secure.mid')
const comicController = require('../controllers/comic.controller')

router.get('/',secure.isAuthenticated,comicController.list) //hecho
router.get('/americano',secure.isAuthenticated,comicController.showComicAmericano)
router.get('/europeo',secure.isAuthenticated,comicController.showComicEuropeo)
router.get('/manga',secure.isAuthenticated,comicController.showComicManga)
router.get('/:id',secure.isAuthenticated,comicController.showComic)//hecho
router.post('/search',secure.isAuthenticated,comicController.searchComic)





module.exports = router;