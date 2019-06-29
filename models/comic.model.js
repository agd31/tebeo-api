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
        "Accion",
        "Artbook",
        "Aventura",
        "Belico",
        "Ciencia ficcion",
        "Cotidiano",
        "Drama",
        "Espada y brujeria",
        "Fantasia",
        "Historico",
        "Ciberpunk",
        "Humor",
        "Novela grafica",
        "Misterio",
        "Noir",
        "Piratas",
        "Romance",
        "Space Opera",
        "Steampunk",
        "Superheroes",
        "Suspense",
        "Terror",
        "Zombies"
      ]
    },
    description: { type: String },
    imageURL: { type: String },
    finished: { type: Boolean },
    buyURL: { type: String },
    rating: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Comic = mongoose.model("Comic", comicSchema);

module.exports = Comic;
