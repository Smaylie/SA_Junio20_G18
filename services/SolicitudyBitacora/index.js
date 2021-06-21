const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const router = require('./Services/router');

let port = process.env.PORT || 3015;

const dbConfig = require("./Config/database");
//Conexi�n a la base de datos
var connection = mysql.createConnection({
    host: dbConfig.hrPool.host,
    user: dbConfig.hrPool.user,
    password: dbConfig.hrPool.password,
    database: dbConfig.hrPool.database
});

const storage = multer.diskStorage({
    destination: (req, res, callback) => {
        callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});

const upload = multer({storage: storage});

const app = express().use(cors()).use(bodyParser()).use('/api', router);

app.use("/uploads", express.static("uploads"));

app.post('/pdflibro', upload.single('pdflibro'), (req, res, next) => {
    res.end();
});

app.get("/", (req, res) => { res.end() });

app.listen(port, (err) => {
    if (err) console.log('Ocurrio un error'), process.exit(1);
    connection.connect(function (err) {
        if (err) throw err;
        console.log("Conectada a la BD!");
    });
    console.log('Escuchando en el puerto ' + port);
});
