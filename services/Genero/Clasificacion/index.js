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

const port = process.env.PORT || 3630;
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
        let sqlID =  `SELECT C.libro as 'idLibro', L.nombre as 'nombreLibro', C.genero as 'idGenero', G.nombre as 'nombreGenero'
        FROM Clasificacion C, Libro L, Genero G
        WHERE C.libro = L.idl
        AND C.Genero = G.idg
        AND C.libro = ?;`;

        connection.query(sqlID, [id], (err, result) => {
            if(err) {
                res.json({
                    Error: err.message
                });
            }
            res.json({
                result
            });
        });
    } else {
        let sql =  `SELECT C.libro as 'idLibro', L.nombre as 'nombreLibro', C.genero as 'idGenero', G.nombre as 'nombreGenero'
        FROM Clasificacion C, Libro L, Genero G
        WHERE C.libro = L.idl
        AND C.Genero = G.idg;`;
        
        connection.query(sql, (err, result) => {
            if(err) {
                res.json({
                    Error: err.message
                });
            }
            res.json({
                result
            });
        });
    }
});

app.listen(port, (err) => {
    if (err) console.log("Error sarting the server"), process.exit(1);
    
    console.log(`Server listening at http://localhost:${port}/`);
});