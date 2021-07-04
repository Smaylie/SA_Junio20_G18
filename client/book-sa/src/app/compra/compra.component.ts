import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor(private servicio: ServiciosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuario();
    this.fecha = formatDate(new Date(), 'yyyy/MM/dd', 'en');
    this.selectedGrupo = "18";
  }

  obtenerUsuario() {
    this.usuario = this.servicio.getLog();
    this.idCarrito.cliente = this.usuario.idc;
    this.obtenerCarrito();
  }

  obtenerCarrito() {
    console.log(this.idCarrito.cliente);
    this.servicio.getSCarrito(this.idCarrito.cliente)
      .subscribe((res) => {
        this.carro = res;
        this.arrLibros = this.carro.results;
        console.log(this.arrLibros);
      }, (err) => {
        console.error(err);
      })
  }

  eliminarDeCarrito() {
    let compra = {
      id_usuario: this.usuario.idc,
      fecha: this.fecha
    }

    if (this.selectedGrupo == '18') {
      this.servicio.postOrdenes(compra)
        .subscribe((res) => console.log('ok'));
      this.arrLibros.forEach(element => {
        this.idEliminar.idr = element.id_carrito;
        this.idEliminar.idl = element.id_libro;
        this.servicio.deleteSCarrito(this.idEliminar)
          .subscribe((res) => {
            console.log(res);
          }, (err) => {
            console.error(err);
          });
      });

      this.servicio.postCorreo({ correo: this.usuario.correo, asunto: this.usuario.nombres + " Gracias por su compra", cuerpo: "Se ha enviado un correo con el siguiente link de la factura", link: "www.google.com" })
        .subscribe((res) => console.log("correo enviado"));
      alert('compra realizada con exito! 🤑💸');
      this.router.navigateByUrl('/landing-page');
    } else {
      let orden = {
        userId: 1,
        products: [
          {
            codigo: 1,
            incart: "2",
            id: 1
          }
        ]
      }
      this.servicio.postOrdenG17(orden)
        .subscribe((res) => console.log(res));
    }
  }

  carro: any;
  totalCarrito: any = 0;
  usuario: any;
  arrLibros: any = [];
  idCarrito: any = {
    cliente: 0
  }
  idEliminar: any = {
    etapa: 2,
    idr: 0,
    idl: 0,
  }
  compraEntrega: any = {
    nombre: '',
    direccion: ''
  }
  compraTC: any = {
    tarjeta: '',
    fecha: '',
    cvv: '',
    direccion: ''
  }
  selectedPago: any = 1;
  fecha: any = '';
  cliente: any = {
    nombres: "Ricardo Antonio",
    apellidos: "Alvarado Ramirez",
    correo: "rick@gmail.com",
    direccion: "dirección de prueba"
  }
  selectedGrupo: any;
}
