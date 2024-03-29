import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor(private servicio: ServiciosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuario();
    
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
      }, (err)  => {
        console.error(err);
      })
  }

  eliminarDeCarrito() {
    this.arrLibros.forEach(element => {
      this.idEliminar.idr = element.id_carrito;
      this.idEliminar.idl = element.id_libro;
      this.servicio.deleteSCarrito(this.idEliminar)
      .subscribe((res)  => {
        console.log(res);
      }, (err)  => {
        console.error(err);
      });
    });
    alert('compra realizada con exito! 🤑💸')
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
  compraTC: any ={
    tarjeta: '',
    fecha: '',
    cvv: '',
    direccion: ''
  }
  selectedPago: any = 1;

  cliente: any = {
    nombres: "Ricardo Antonio",
    apellidos: "Alvarado Ramirez",
    correo: "rick@gmail.com",
    direccion: "dirección de prueba"
  }
}
