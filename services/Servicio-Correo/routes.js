const express = require ('express')
const routes = express.Router()
const nodemailer = require('nodemailer');

routes.post('/', async(req,res)=>{

    let correo = {
        nombre: req.body.nombre,
        autor: req.body.autor,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        estado: req.body.estado,
        imagen: req.body.imagen,
        editorial: req.body.editorial
      }
      
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'soavacas0621@gmail.com', // generated ethereal user
          pass: 'sdaojxysapjpugkz',
        },
      });

    

      let info = await transporter.sendMail({
        from: '"Facturación" <soavacas0621@gmail.com>', // sender address
        to: req.body.correo, // list of receivers
        subject: req.body.asunto, // Subject line
        text: req.body.cuerpo, // plain text body
        html: "<b>"+req.body.cuerpo+"</b>"+"<br>"+"<a href='"+req.body.link+"'>"+' Descargar Factura '+"</a>", // html body
      });

      console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      

    console.log('Hola');
    
})

module.exports = routes