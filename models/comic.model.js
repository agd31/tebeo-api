const mongoose = require('mongoose')


const comicSchema = new mongoose.Schema({
    title:{
        type: String,
        unique:true,
        required:true
      },
    family:{
        type: [String],
        required: true,
        enum: ['Americano', 'Manga', 'Europeo'] //Americano, manga, europeo
    },
    tags:{
        type: [String],
        required: true,
        enum: ['sports', 'racing', 'action', 'rpg']
    },
    visits:{
        type:Number
    },
    image:{type:String},
    finished:{type: Boolean},
    adults:{type:Boolean},
    buy:{type:String},
    have:{type: Boolean},
    want:{type: Boolean},
    //date: { type: Date, default: Date.now },
    
 
}, { timestamps: true })


const Comic = mongoose.model('Journey', comicSchema)

module.exports = Comic;