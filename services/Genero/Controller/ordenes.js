const mysql = require("mysql2");
const dbConfig = require("../Config/database");

var conn = mysql.createConnection({
    host: dbConfig.hrPool.host,
    user: dbConfig.hrPool.user,
    password: dbConfig.hrPool.password,
    database: dbConfig.hrPool.database
});


function post(req, res, next) {
    try {
        let nuevaOrden = req.body;

        let insertQuery = `INSERT INTO compra (id_usuario, fecha, etapa, status) VALUES (?, ?, 1, 1)`;

        conn.query(insertQuery, [nuevaOrden.id_usuario, nuevaOrden.fecha], (err, result) => {
            if(err) {
                res.json({
                    Error: err.message
                });
            }
            res.json({
                result: "ok"
            });
        });
    } catch (err) {
        next(err);
    }
}

module.exports.post = post;

function get(req, res, next) {
    try {
        const selectQuery = `SELECT c.id_compra, u.idc, u.nombres, u.correo, c.etapa, c.fecha, c.etapa, c.status FROM compra c, Cliente u WHERE c.id_usuario = u.idc`;

        conn.query(selectQuery, (err, result) => {
            if(err) {
                res.json({
                    Error: err.message
                });
            }
            if(result.length == 1) {
                res.json([result[0]]);
            } else {
                res.json(result);
            }
        });
    } catch (err) {
        next(err);
    }
}

module.exports.get = get;

function put(req, res, next) {
    try {
        let etapa = req.body.etapa;
        let idCompra = parseInt(req.params.id, 10);

        const updateQuery = `UPDATE compra SET etapa = ? where id_compra = ?`;

        conn.query(updateQuery, [etapa, idCompra], (err, result) => {
            if(err) {
                res.json({
                    Error: err.message
                });
            }
            res.json({
                result: "ok",
            });
        });
    } catch(err) {
        next(err);
    }
}

module.exports.put = put;