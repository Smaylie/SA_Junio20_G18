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

    if (input.Correo != "") {
        try {
            conn.query(
                "INSERT INTO Editorial (nombre, correo, password, direccion, estado) VALUES (?,?,?,?,?)",
                [input.Nombre, input.Correo, input.Password, input.Direccion, input.Estado],
                (error, results) => {
                    if (error) {
                        res.status(500).json({
                            Mensaje: "Error de consulta",
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

    if (input.Id != "") {
        try {
            conn.query(
                "UPDATE Editorial SET nombre = ?, correo = ?, password = ?, direccion = ? WHERE ide = ?",
                [input.Nombre, input.Correo, input.Password, input.Direccion, input.Id],
                (error, results) => {
                    if (error) {
                        res.status(500).json({
                            Mensaje: "Error de consulta",
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

    if (input.Id != "") {
        try {
            conn.query(
                "UPDATE Editorial SET estado = ? WHERE ide = ?",
                [input.Estado, input.Id],
                (error, results) => {
                    if (error) {
                        res.status(500).json({
                            Mensaje: "Error de consulta",
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
            "SELECT * FROM Editorial",
            (error, results) => {
                if (error) {
                    res.status(500).json({
                        Mensaje: "Error de consulta",
                    });
                } else {
                    res.status(200).json({
                        Editoriales: results,
                    });
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