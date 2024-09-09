const charactersModel = require("../models/charactersModel");

const getAllCharacters = async (req, res) => {
  try {
    const characters = await charactersModel.find();
    res.status(200).json({
      status: "Se han encontrado todos los personajes con éxito",
      data: characters,
      error: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error al encontrar todos los personajes",
      data: null,
      error: error.message,
    });
  }
};

const addCharacter = async (req, res) => {
  try {
    const { name, birthday, dateOfDeath, faction, description } = req.body;
    const newCharacter = new charactersModel({
      name,
      birthday,
      dateOfDeath,
      faction,
      description,
    });

    await newCharacter.save();

    res.status(201).json({
      status: "Se ha creado el nuevo personaje correctamente",
      newCharacter,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error al crear el nuevo personaje",
      data: null,
      error: error.message,
    });
  }
};

module.exports = { addCharacter, getAllCharacters };
