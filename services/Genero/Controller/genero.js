const mysql = require("mysql2");
const dbConfig = require("../Config/database");

var conn = mysql.createConnection({
    host: dbConfig.hrPool.host,
    user: dbConfig.hrPool.user,
    password: dbConfig.hrPool.password,
    database: dbConfig.hrPool.database
});

function create (req, res) {
    let input = req.body;
    let sql =  `INSERT INTO Genero (nombre, descripcion) VALUES (?,?);`;

    conn.query(sql, [input.nombre, input.descripcion], (err, result) => {
        if(err) {
            res.json({
                Error: err.message
            });
        }
        res.json({
            Result: result,
            Id: result.insertId
        });
    });
}
module.exports.create = create;

function read (req, res) {
    let id = parseInt(req.params.id, 10);

    if(id) {
        conn.query(`SELECT idg as 'id_genero', nombre as 'nombre_genero', descripcion as 'descripcion_genero' FROM Genero WHERE idg = ?;`, [id], (err, result) => {
            if(err) {
                res.json({
                    Error: err.message
                });
            }
            if(result.length == 1) {
                res.json(result[0]);
            } else {
                res.json(result);
            }
            
        });
    } else {
        conn.query(`SELECT idg as 'id_genero', nombre as 'nombre_genero', descripcion as 'descripcion_genero' FROM Genero;`, (err, result) => {
            if(err) {
                res.json({
                    Error: err.message
                });
            }
            if(result.length == 1) {
                res.json(result[0]);
            } else {
                res.json(result);
            }
        });
    }
}
module.exports.read = read;