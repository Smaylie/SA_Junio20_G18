const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: '67.207.80.187',
    user: 'sa123',
    database: 'SA',
    password: '1234'
});

const port = process.env.PORT || 3620;
const app = express();

app.set("json spaces", 2);
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post("/", (req, res) => {
    let input = req.body;
    let sql =  `INSERT INTO Genero (nombre, descripcion) VALUES (?,?);`;
    connection.query(sql, [input.nombre, input.descripcion], (err, result) => {
        if(err) {
            res.json({
                Error: err.message
            });
        }
        res.json({
            Id: result.insertId
        });
    });
});

app.listen(port, (err) => {
    if (err) console.log("Error sarting the server"), process.exit(1);
    
    console.log(`Server listening at http://localhost:${port}/`);
});