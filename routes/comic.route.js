var express = require('express');
var router = express.Router();

const secure = require('../middlewares/secure.mid')
const comicController = require('../controllers/comic.controller')

router.post('/',secure.isAuthenticated,comicController.create)

module.exports = router;