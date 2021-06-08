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
        let sqlID =  
        `SELECT C.libro as 'id_libro', L.nombre as 'nombre_libro', L.autor as 'autor_libro', L.precio as 'precio_libro', L.cantidad as 'cantidad_libro', L.imagen as 'imagen_libro', L.estado as 'estado_libro', 
        E.ide as 'id_editorial', E.nombre as 'nombre_editorial',
        C.genero as 'id_genero', G.nombre as 'nombre_genero', G.descripcion as 'descripcion_genero'
        FROM Clasificacion C, Libro L, Genero G, Editorial E
        WHERE C.libro = L.idl
        AND C.genero = G.idg
        AND L.editorial = E.ide
        AND C.libro = ?;`;

        conn.query(sqlID, [id], (err, result) => {
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
        let sql =  
        `SELECT C.libro as 'id_libro', L.nombre as 'nombre_libro', L.autor as 'autor_libro', L.precio as 'precio_libro', L.cantidad as 'cantidad_libro', L.imagen as 'imagen_libro', L.estado as 'estado_libro', 
        E.ide as 'id_editorial', E.nombre as 'nombre_editorial',
        C.genero as 'id_genero', G.nombre as 'nombre_genero', G.descripcion as 'descripcion_genero'
        FROM Clasificacion C, Libro L, Genero G, Editorial E
        WHERE C.libro = L.idl
        AND C.genero = G.idg
        AND L.editorial = E.ide;`;
        
        conn.query(sql, (err, result) => {
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