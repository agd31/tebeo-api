const mongoose = require("mongoose");

const comicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true
    },
    family: {
      type: String,
      required: true,
      enum: ["Americano", "Manga", "Europeo"]
    },
    tags: {
      type: [String],
      required: true,
      enum: [
        "accion",
        "artbook",
        "aventura",
        "belico",
        "ciencia ficcion",
        "cotidiano",
        "drama",
        "espada y brujeria",
        "fantasia",
        "historico",
        "ciberpunk",
        "humor",
        "novela grafica",
        "misterio",
        "noir",
        "piratas",
        "romance",
        "space opera",
        "steampunk",
        "superheroes",
        "suspense",
        "terror",
        "zombies"
      ]
    },
    description: { type: String },
    imageURL: { type: String },
    finished: { type: Boolean },
    buyURL: { type: String },
    rating: {
      type: Number,
      default: 0
    },
    amateur: false
  },
  { timestamps: true }
);

const Comic = mongoose.model("Comic", comicSchema);

module.exports = Comic;
