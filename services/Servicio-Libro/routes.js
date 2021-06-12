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
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        
        conn.query('INSERT INTo Libro set ?',[req.body], (err,rows)=>{
            if(err) return res.send(err)

            res.send('El libro ha sido registrado')
        })
    })
})
routes.delete('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        
        conn.query('DELETE FROM Libro WHERE idl= ?',[req.params.id], (err,rows)=>{
            if(err) return res.send(err)

            res.send('El libro ha sido Eliminado')
        })
    })
})
routes.put('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        
        conn.query('UPDATE Libro SET ? WHERE idl= ?',[req.body,req.params.id], (err,rows)=>{
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