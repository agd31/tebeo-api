const User = require('../models/user.model')
const createError = require('http-errors')
const passport = require('passport')
const Comic = require('../models/comic.model')

module.exports.register = (req,res,next) => {
  const { username,email } = req.body

  User.findOne({ $or: [{ username },{ email }]})
    .then(user => {
      if(user) {
        throw createError(409, 'Email or username already registered')
      } else {
        return new User(req.body).save()
      }
    })
    .then(user => res.status(201).json(user))
    .catch(next)
}

module.exports.authenticate = (req,res,next) => {
  passport.authenticate('auth-local',(error,user,message) => {
    if(error) {
      next(error)
    } else if(!user) {
      next(createError(401,message))
    } else {
      req.login(user,(error) => {
        if(error) {
          next(error)
        } else {
          res.status(201).json(user)
        }
      })
    }
  })(req,res,next)
}

module.exports.logout = (req,res,next) => {
  req.logout()
  res.status(204).json()
}


module.exports.getUser =(req,res,next)=>{
  res.json(req.user)
}

module.exports.addComicToHave =(req,res,next)=>{
  const { id } = req.params

  const user = req.user;
  user.have.push(id);//el push debe ser un conjunto
  user.save()
    .then(user => {
      res.status(201).json(user)
    })
    .catch(next)
}

module.exports.addComicToWish =(req,res,next)=>{
  const { id } = req.params

  const user = req.user;
  user.wish.push(id);//el push debe ser un conjunto, cuando 
  user.save()
    .then(user => {
      res.status(201).json(user)
    })
    .catch(next)
}
module.exports.addComicToFavs =(req,res,next)=>{
  const { id } = req.params

  const user = req.user;
  user.favs.push(id);//el push debe ser un conjunto, set
  user.save()
    .then(user => {
      res.status(201).json(user)
    })
    .catch(next)
}


module.exports.delete = (req, res, next) => {
  Comic.findByIdAndDelete(req.params.id)
    .then(comic => {
      if (!comic) {
        throw createError(404, 'Comic not found')
      } else {
        res.status(204).json();
      }
    })
    .catch(next)
}


module.exports.listFavs = (req, res, next) => {
  Comic.find()
    .sort({ title: 1 })
    .then(comic => res.json(comic))
    .catch(next)
}

// only for testing purpose
module.exports.getUsers = (req,res,next) => {

  User.find()
    .then(users => res.json(users))
    .catch(next)
}