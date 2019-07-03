require("dotenv").config()
var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');

var passport = require('passport');

require('./configs/db.config');
require('./configs/passport.config');
const session = require('./configs/session.config');
const cors = require('./configs/cors.config');

const comicRouter = require('./routes/comic.route');
const authRouter = require('./routes/auth.route');
const userRouter =require('./routes/user.route')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors)
app.use(session)
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.session = req.user;
  next();
})

//app.use('/comics/:comicId', comicRouter);
//app.use('/comics', comicRouter);
app.use('/', authRouter);
app.use('/comics', comicRouter);
app.use('/user', userRouter)


app.use((req, res, next) => {
  next(createError(404))
})

app.use((error, req, res, next) => {
  console.error(error);  
  res.status(error.status || 500);
  const data = {};

  if (error instanceof mongoose.Error.ValidationError) {
    res.status(400);
    data.errors = {}
    Object.keys(error.errors)
      .forEach(field => data.errors[field] = error.errors[field].message)
  } else if (error instanceof mongoose.Error.CastError) {
    res.status(404);
    error.message = 'Resource not found';
  }

  data.message = error.message
  res.json(data);
})

module.exports = app;
