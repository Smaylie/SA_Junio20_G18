const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const events = require("./events");

//Conexión a la base de datos
var connection = mysql.createConnection({
  //Propiedades
  host: "67.207.80.187",
  user: "sa123",
  password: "1234",
  database: "SA",
});

connection.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Conexión exitosa");
});

const app = express().use(cors()).use(bodyParser()).use(events(connection));

app.get("/", (req, res) => {});

app.listen("3011", () => {
  console.log("Servidor iniciado en puerto 3011");
});
