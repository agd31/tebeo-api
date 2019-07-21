const express = require('express');
const router = express.Router();

const secure = require('../middlewares/secure.mid')
const comicController = require('../controllers/comic.controller')

router.get('/',comicController.list) //hecho
router.get('/americano',comicController.showComicAmericano)
router.get('/europeo',comicController.showComicEuropeo)
router.get('/manga',comicController.showComicManga)
router.get('/:id',comicController.showComic)//hecho
router.post('/search',comicController.searchComic)





module.exports = router;