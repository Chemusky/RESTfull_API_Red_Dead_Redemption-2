const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charactersSchema = new Schema({
  name: {
    type: String,
    unique: [true, "Este campo es único y no se puede repetir"],
    required: [true, "El Nombre es obligatorio"],
  },
  birthday: {
    type: Number,
    required: [true, "La Fecha de Nacimiento es obligatoria"],
  },
  dateOfDeath: {
    type: Number,
    required: [true, "La Fecha de Defunción es obligatoria"],
  },
  faction: {
    type: String,
    required: [
      true,
      "La facción a la que petenece dicho personaje es obligatoria",
    ],
  },
  description: {
    type: String,
    required: [true, "Se debe introducir una breve descripción del personaje"],
  },
});

const charactersModel = mongoose.model(
  "Personajes",
  charactersSchema,
  "Personajes"
);

module.exports = charactersModel;
