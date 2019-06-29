const Comic = require("../models/comic.model.js")
require("../configs/db.config")

const comicDb =require("../comics.json")

const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tebeo-api'

mongoose.connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true })
  .then(() => Comic.create(comicDb))
.catch(error => console.error('Not connected', error))

