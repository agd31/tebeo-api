const User = require("../models/user.model");
const createError = require("http-errors");
const Comic = require("../models/comic.model");

module.exports.getUser = (req, res, next) => {
  res.json(req.user);
};

module.exports.addFav = (req, res, next) => {
  const { id } = req.body;
  //console.log(id);
  User.findById(req.user.id)
    .then(user => {
      const exist = user.favs.some(fav => id == fav);
      if (!exist) {
        user.favs.push(id);
      } else {
        user.favs = user.favs.filter(fav => id != fav);
      }
      user
        .save()
        .then(user => res.status(200).json(user))
        .catch(next);
    })
    .catch(next);
};

module.exports.addWish = (req, res, next) => {
  const { id } = req.body;
  User.findById(req.user.id)
    .then(user => {
      const comicExist = user.wish.some(wished => id == wished);
      if (comicExist) {
        user.wish = user.wish.filter(wished => id != wished);
      } else {
        user.wish.push(id);
      }
      user
        .save()
        .then(user => res.status(200).json(user))
        .catch(next);
    })
    .catch(next);
};

module.exports.addHave = (req, res, next) => {
  const { id } = req.body;
  User.findById(req.user.id)
    .then(user => {
      const thereIs = user.have.some(owned => id == owned);
      if (thereIs) {
        user.have = user.have.filter(owned => id != owned);
      } else {
        user.have.push(id);
      }
      user
        .save()
        .then(user => res.status(200).json(user))
        .catch(next);
    })
    .catch(next);
};
