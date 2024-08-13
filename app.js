const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 9000;

// importación de la ruta para desarrollar los controladores
const charactersRouter = require("./routes/characterRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Inicio de la conexión a Mongo DB
require("dotenv").config();
const url_mongo = process.env.DATABASE_URL_DEV;
mongoose.connect(url_mongo);

const db = mongoose.connection;
db.on("error", (error) => {
  console.log(`Error en la conexión a la Base de datos: ${error}`);
});

db.on("connected", () => {
  console.log(`La conexión a mongo se ha realizado con éxito`);
});

db.on("disconnected", () => {
  console.log(`Se perdió la conexión a la Base de datos`);
});

app.use("/characters", charactersRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
