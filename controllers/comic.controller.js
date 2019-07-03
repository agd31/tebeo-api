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

module.exports.searchComic=(req,res,next) => {
  const {tags}=req.body
  console.log(tags)
  Comic.find({tags:{$all:tags}})
  .sort({ title: 1 })
  .then(comics => res.status(200).json(comics))
  .catch(next)
}
//family tags finished busqueda