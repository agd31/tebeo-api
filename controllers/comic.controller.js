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
const {tags,family,finished, rating, title}=req.body
const criteria = {};

//if (title) { criteria.title = title }
if (tags) { criteria.tags = {$all:tags} }
if (family) { criteria.family = {$in:family} }
if (finished) { criteria.finished = finished }
if (rating) { criteria.rating = {$gte: parseInt(rating)} }

Comic.find(criteria)
.sort({ title: 1 })
    .then(comics => res.status(200).json(comics))
    .catch(next)
}
