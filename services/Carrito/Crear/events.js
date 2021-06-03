const express = require("express");

function createRouter(db) {
  const router = express.Router();

  let NewDetalleCarrito = (
    carrito,
    libro,
    cantidad
  ) => {
    db.query(
      "INSERT INTO DetalleCarrito (carrito, libro, cantidad) VALUES (?)",
      [[carrito, libro, cantidad]],
      (error1, results1) => {}
    );
  };

  //------> CREAR CARRITO

  router.post("/carrito/crear", (req, res, next) => {
    let input = req.body;

    if (input.Cliente != "") {
      try {
        db.query(
          "INSERT INTO Carrito (cliente, total, estado, etapa) VALUES (?,?,0,0)",
          [input.Cliente,input.Total,input.Estado,input.Etapa],
          (error, results) => {
            if (error) {
              res.status(500).json({
                Mensaje: "Error de consulta",
              });
            } else {
              for (i = 0; i < input.Productos.length; i++) {
                NewDetalleCarrito(
                    results.insertId,
                    input.Productos[i].idproducto,
                    String(input.Productos[i].cantidad)
                );
              }
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
  });

  return router;
}

module.exports = createRouter;
