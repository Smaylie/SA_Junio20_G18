const mysql = require("mysql2");
const dbConfig = require("../Config/database");

var conn = mysql.createConnection({
    host: dbConfig.hrPool.host,
    user: dbConfig.hrPool.user,
    password: dbConfig.hrPool.password,
    database: dbConfig.hrPool.database
});

function read (req, res) {
    let id = parseInt(req.params.id, 10);

    if(id) {
        let sqlID =  `SELECT C.libro as 'idLibro', L.nombre as 'nombreLibro', C.genero as 'idGenero', G.nombre as 'nombreGenero'
        FROM Clasificacion C, Libro L, Genero G
        WHERE C.libro = L.idl
        AND C.Genero = G.idg
        AND C.libro = ?;`;

        conn.query(sqlID, [id], (err, result) => {
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
        
        conn.query(sql, (err, result) => {
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
}
module.exports.read = read;