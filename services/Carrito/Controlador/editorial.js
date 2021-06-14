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

    if (input.correo != "") {
        try {
            conn.query(
                "INSERT INTO Editorial (nombre, correo, password, direccion, estado) VALUES (?,?,?,?,?)",
                [input.nombre, input.correo, input.password, input.direccion, input.estado],
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

function actualizar(req, res) {
    let input = req.body;
    console.log(input);
    if (input.id != "") {
        try {
            conn.query(
                "UPDATE Editorial SET Estado = 1 WHERE ide = ?",
                [input.id],
                (error) => {
                    if (error) {
                        console.log(error);
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

module.exports.actualizar = actualizar;

function eliminar(req, res) {
    let input = req.body;

    if (input.ide != "") {
        try {
            conn.query(
                "UPDATE Editorial SET estado = ? WHERE ide = ?",
                [input.estado, input.ide],
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
            "SELECT * FROM Editorial WHERE estado > 0",
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