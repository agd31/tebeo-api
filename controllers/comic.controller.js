const Comic = require('../models/comic.model')

module.exports.create = (req,res,next) => {
req.body.userID = req.user.id
const comic = new Comic (req.body)


comic.save()
  .then(comic => {
    res.status(201).json(comic)
  })
  .catch(next)
}