const express = require ('express')
const routes = express.Router()

routes.get('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Libro', (err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
routes.post('/',(req,res)=>{
    let nuevoLibro = {
        nombre: req.body.nombre,
        autor: req.body.autor,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        estado: req.body.estado,
        imagen: req.body.imagen,
        editorial: req.body.editorial
      }
    let generos = req.body.generos;
    console.log(generos);
    nuevoLibro.imagen = nuevoLibro.imagen;
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        
        conn.query('INSERT INTo Libro set ?',[nuevoLibro], (err,rows)=>{
            if(err) {
                res.status(500).json({Mensaje: "error"});
            } else {
                console.log(rows.insertId);
                generos.forEach(element => {
                    conn.query('INSERT INTO Clasificacion (libro, genero) VALUES (?,?)', 
                    [rows.insertId, element.id_genero], 
                    (error, results) => {
                        if (error) {
                            console.error(error);
                        } else {
                            console.log('ok genero');
                        }
                    }
                    )
                });
                res.status(200).json({
                    Mensaje: "ok",
                });
            }
        })
    })
})
routes.delete('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        
        conn.query('UPDATE Libro SET estado = 0 WHERE idl= ?',[parseInt(req.params.id, 10)], (err,rows)=>{
            if(err) return res.send(err)

            res.send('El libro ha sido Eliminado')
        })
    })
})
routes.put('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        
        conn.query('UPDATE Libro SET ? WHERE idl= ?',[req.body,parseInt(req.params.id, 10)], (err,rows)=>{
            if(err) return res.send(err)

            res.send('El libro ha sido Actualizado')
        })
    })
})

routes.get('/libro/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        
        conn.query('SELECT l.idl,l.nombre,l.autor,l.precio,l.cantidad,l.estado,l.imagen,e.nombre editorial FROM Libro l, Editorial e WHERE idl= ? AND l.editorial=e.ide',[req.params.id], (err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.get('/genero/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        
        conn.query('SELECT g.idg,g.nombre,g.descripcion FROM Clasificacion c, Genero g WHERE c.libro= ? AND c.genero=g.nombre',[req.params.id], (err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})


module.exports = routes
