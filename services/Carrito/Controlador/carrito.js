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

    if (input.cliente != "") {
        try {
            conn.query(
                "INSERT INTO Carrito (cliente, libro, etapa) VALUES (?,?,?)",
                [input.cliente, input.libro, input.etapa],
                (error, results) => {
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

    if (input.idr != "") {
        try {
            conn.query(
                "UPDATE Carrito SET etapa = ? WHERE idr = ?",
                [input.etapa, input.idr],
                (error, results) => {
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

module.exports.actualizar = actualizar;

function leer(req, res) {
    let input = req.body;

    if (input.cliente != "") {
        try {
            conn.query(
                "SELECT idr AS id_carrito,cliente AS id_cliente_carrito,etapa AS etapa_libro_encarrito,idl AS id_libro,nombre AS nombre_libro,autor AS autor_libro,precio AS precio_libro,cantidad AS cantidad_libro,estado AS estado_libro,imagen AS imagen_libro,editorial AS id_editorial_libro FROM Carrito, Libro WHERE cliente = ? AND libro = idl AND etapa = 1",
                [input.cliente],
                (error, results) => {
                    if (error) {
                        res.status(500).json({
                            Mensaje: "Error en la consulta, verifique los campos de entrada",
                        });
                    } else {
                        res.status(200).json({
                            Carrito: results,
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

module.exports.leer = leer;
