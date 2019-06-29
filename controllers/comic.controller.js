const Comic = require('../models/comic.model')
const User = require('../models/user.model')
const createError = require('http-errors');




module.exports.list = (req, res, next) => {
  Comic.find()
    .sort({ title: 1 })
    .then(comic => res.json(comic))
    .catch(next)
}


module.exports.showComic = (req, res, next) => {
  Comic.findById(req.params.id)
    .then(comic => res.json(comic))
    .catch(next)
}

//family tags busqueda