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
  const {tags,family}=req.body
  console.log(family)
  
if(!tags || !family) { 

Comic.find({$or: [
  { $and: [{tags:{$all:tags}}] },
  { $or: [{family:family}] },
]})
  .sort({ title: 1 })
  .then(comics => res.status(200).json(comics))
  .catch(next)
}else{
  Comic.find({$and: [
    { $and: [{tags:{$all:tags}}] },
    { $or: [{family:family}] },
  ]})
    .sort({ title: 1 })
    .then(comics => res.status(200).json(comics))
    .catch(next)
}
}