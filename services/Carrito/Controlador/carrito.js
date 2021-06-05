const mysql = require("mysql");
const dbConfig = require("../Config/database");

var conn = mysql.createConnection({
    host: dbConfig.hrPool.host,
    user: dbConfig.hrPool.user,
    password: dbConfig.hrPool.password,
    database: dbConfig.hrPool.database
});

function insertar (req, res, next) {
    let input = req.body;

    if (input.Cliente != "") {
        try {
            conn.query(
                "INSERT INTO Carrito (cliente, libro, etapa) VALUES (?,?,?)",
                [input.Cliente, input.Libro, input.Etapa],
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

    if (input.Cliente != "") {
        try {
            conn.query(
                "UPDATE Carrito SET etapa = ? WHERE idr = ?",
                [input.Etapa, input.Id],
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


