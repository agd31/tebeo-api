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

// module.exports.searchComic=(req,res,next) => {
//   const {tags,family,finished, rating}=req.body
//   console.log(family)
  
// if(!tags || !family || !finished || !rating) { 

// Comic.find({$or: [
//   { $and: [{tags:{$all:tags}}] },
//   { $or: [{family:family}] },
//   { $or: [{finished:finished}]}
// ]})
//   .sort({ title: 1 })
//   .then(comics => res.status(200).json(comics))
//   .catch(next)
// }else{
//   Comic.find({$and: [
//     { $and: [{tags:{$all:tags}}] },
//     { $or: [{family:family}] },
//     { $or: [{finished:finished}]}
//   ]})
//     .sort({ title: 1 })
//     .then(comics => res.status(200).json(comics))
//     .catch(next)
// }
// }


//finished

// module.exports.searchComic=(req,res,next) => {
//   const {tags,family}=req.body
  
// if(!tags || !family ) { 

// Comic.find({$or: [
//   { $and: [{tags:{$all:tags}}] },
//   { $or: [{family:family}] }
// ]})
//   .sort({ title: 1 })
//   .then(comics => res.status(200).json(comics))
//   .catch(next)
// }else{
//   Comic.find({$and: [
//     { $and: [{tags:{$all:tags}}] },
//     { $or: [{family:family}] }
//   ]})
//     .sort({ title: 1 })
//     .then(comics => res.status(200).json(comics))
//     .catch(next)
// }
// }

module.exports.searchComic=(req,res,next) => {
const {tags,family,finished, rating, title}=req.body
const criteria = {};

// if (req.body.tags) {
//   { $and: [{tags:{$all:tags}}]}
// }
if (tags) { criteria.tags = {$all:tags} }
if (family) { criteria.family = {$in:family} }

Comic.find(criteria)
.sort({ title: 1 })
    .then(comics => res.status(200).json(comics))
    .catch(next)

}



// module.exports.search = ((req, res, next) => {
//   const comic = req.comic
//   const criteria = {};
//   if (req.body.search) {
//     const exp =  new RegExp(req.body.search, 'i');
//     criteria.$or = [ { title: exp } ]
// }

// .then(comic =>  {
//   res.render('search', { 
//     title, 
//     tags
//     search: req.body })
// })