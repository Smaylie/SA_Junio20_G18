const express = require("express");

function createRouter(db) {
  const router = express.Router();

  //------> ELIMINAR CARRITO

  router.post("/carrito/eliminar", (req, res, next) => {
    let input = req.body;

    if (input.Id != "") {
      try {
        db.query(
          "UPDATE Carrito SET estado = 1 WHERE idr = ?",
          [input.Id],
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
  });

  return router;
}

module.exports = createRouter;
