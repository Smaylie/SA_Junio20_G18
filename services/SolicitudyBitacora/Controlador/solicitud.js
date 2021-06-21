const mysql = require("mysql");
const dbConfig = require("../Config/database");

var conn = mysql.createConnection({
    host: dbConfig.hrPool.host,
    user: dbConfig.hrPool.user,
    password: dbConfig.hrPool.password,
    database: dbConfig.hrPool.database
});

function crear(req, res) {
    let input = req.body;
    let imagen = 'http://localhost:9000/uploads/'+input.imagen;

    if (input.nombre != "") {
        try {
            conn.query(
                "INSERT INTO Solicitud (nombre, autor, precio, cantidad, estado, fecha, imagen) VALUES (?,?,0,0,2,?,?)",
                [input.nombre, input.autor, input.fecha, imagen],
                (error) => {
                    if (error) {
                        res.status(500).json({
                            Mensaje: "Error en la consulta, verifique los campos de entrada",
                        });
                    } else {
                        res.status(200).json({
                            Mensaje: "ok",
                        });
                    }
                }
            );
        } catch (error) {
            res.status(500).json({
                Mensaje: "Error catch",
            });
        }
    } else {
        res.status(422).json({
            Mensaje: "Faltan campos obligatorios en el JSON"
        });
    }
}

module.exports.crear = crear;

function aceptar(req, res) {
    let input = req.body;

    if (input.idl != "") {
        try {
            conn.query(
                "UPDATE Libro SET estado = 1 WHERE idl = ?",
                [input.idl],
                (error) => {
                    if (error) {
                        res.status(500).json({
                            Mensaje: "Error en la consulta, verifique los campos de entrada",
                        });
                    } else {
                        res.status(200).json({
                            Mensaje: "ok",
                        });
                    }
                }
            );
        } catch (error) {
            res.status(500).json({
                Mensaje: "Error catch",
            });
        }
    } else {
        res.status(422).json({
            Mensaje: "Faltan campos obligatorios en el JSON"
        });
    }
}

module.exports.aceptar = aceptar;

function leer(req, res) {

    try {
        conn.query(
            "SELECT nombre AS nombre_libro, autor AS autor_libro FROM Libro WHERE estado = 2",
            (error, results) => {
                if (error) {
                    res.status(500).json({
                        Mensaje: "Error en la consulta",
                    });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    } catch (error) {
        res.status(500).json({
            Mensaje: "Error catch",
        });
    }
}

module.exports.leer = leer;