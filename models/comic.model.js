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
        enum: ['Americano', 'Manga', 'Europeo']
    },
    tags:{
        type: [String],
        required: true,
        enum: ['Accion', 'Artbook','Aventura','Belico','Ciencia ficcion','Comedia','Cotidiano','Drama','Espada y brujeria','Fantasia','Historico','Ciberpunk','Humor','Novela grafica','Misterio','Noir','Piratas','Romance','Space Opera','Steampunk','Superheroes','Suspense','Terror','Zombies']
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