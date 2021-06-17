const mysql = require("mysql");
const dbConfig = require("../Config/database");

var conn = mysql.createConnection({
    host: dbConfig.hrPool.host,
    user: dbConfig.hrPool.user,
    password: dbConfig.hrPool.password,
    database: dbConfig.hrPool.database
});

function insertar(req, res) {
    let input = req.body;

    if (input.nombre != "") {
        try {
            conn.query(
                "INSERT INTO Solicitud (nombre, autor, fecha, estado, pdf) VALUES (?,?,?,?,?)",
                [input.nombre, input.autor, input.fecha, input.estado, input.pdf],
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

module.exports.insertar = insertar;

function eliminar(req, res) {
    let input = req.body;

    if (input.ids != "") {
        try {
            conn.query(
                "UPDATE Solicitud SET estado = 0 WHERE ids = ?",
                [input.ids],
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

module.exports.eliminar = eliminar;

function leer(req, res) {

    try {
        conn.query(
            "SELECT nombre AS nombre_libro, autor AS autor_libro, fecha AS primera_publicacion, pdf AS pdf_libro FROM Solicitud WHERE estado > 0",
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