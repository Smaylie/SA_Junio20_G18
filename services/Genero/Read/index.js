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

const port = process.env.PORT || 3610;
const app = express();

app.set("json spaces", 2);
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/api/:id?", (req, res) => {
    let id = parseInt(req.params.id, 10);

    if(id) {
        connection.query(`SELECT * FROM Genero WHERE idg = ?;`, [id], (err, result) => {
            if(err) {
                res.json({
                    Error: err.message
                });
            }
            res.json(result);
        });
    } else {
        connection.query(`SELECT * FROM Genero;`, (err, result) => {
            if(err) {
                res.json({
                    Error: err.message
                });
            }
            res.json(result);
        });
    }
});

app.listen(port, (err) => {
    if (err) console.log("Error sarting the server"), process.exit(1);
    
    console.log(`Server listening at http://localhost:${port}/`);
});