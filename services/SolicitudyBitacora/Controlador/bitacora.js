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

    if (input.accion != "") {
        try {
            conn.query(
                "INSERT INTO Bitacora (editorial, accion, fecha) VALUES (?,?,?)",
                [input.editorial, input.accion, input.fecha],
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

function leerXeditorial(req, res) {
    let input = req.body;

    try {
        conn.query(
            "SELECT idb AS id_bitacora, nombre AS nombre_editorial, accion AS accion_editorial, fecha AS fecha_registro FROM Bitacora, Editorial WHERE editorial = ide AND ide = ?",
            [input.ide],
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

module.exports.leerXeditorial = leerXeditorial;

function leerXadmin(req, res) {

    try {
        conn.query(
            "SELECT idb AS id_bitacora, nombre AS nombre_editorial, accion AS accion_editorial, fecha AS fecha_registro FROM Bitacora, Editorial WHERE editorial = ide",
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

module.exports.leerXadmin = leerXadmin;