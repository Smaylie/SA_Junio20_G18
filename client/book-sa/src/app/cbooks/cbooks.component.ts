import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cbooks',
  templateUrl: './cbooks.component.html',
  styleUrls: ['./cbooks.component.css']
})
export class CbooksComponent implements OnInit {

  constructor(private servicio: ServiciosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    this.usuario = this.servicio.getLog();
    this.idCarrito.cliente = this.usuario.idc;
    this.obtenerCarrito();
  }

  calcularTotal() {
    if(this.arrLibros.length != 0) {
      this.arrLibros.forEach(element => {
        this.totalCarrito += parseFloat(element.precio_libro);
      });
    }

    this.totalCarrito = this.totalCarrito.toFixed(2);
  }

  obtenerCarrito() {
    console.log(this.idCarrito.cliente);
    this.servicio.getSCarrito(this.idCarrito.cliente)
      .subscribe((res) => {
        this.carro = res;
        this.arrLibros = this.carro.results;
        this.calcularTotal();
      }, (err)  => {
        console.error(err);
      })
  }

  eliminarDeCarrito(idCarrito: number) {
    console.log(idCarrito);
    this.idEliminar.idr = idCarrito;
    this.servicio.deleteSCarrito(this.idEliminar)
      .subscribe((res)  => {
        this.obtenerCarrito();
        this.totalCarrito = 0;
        alert('se elimino correctamente! 🛒❌');
      }, (err)  => {
        console.error(err);
      })
  }

  carro: any;
  totalCarrito: any = 0;
  usuario: any;
  arrLibros: any = [];
  idCarrito: any = {
    cliente: 0
  }
  idEliminar: any = {
    etapa: 0,
    idr: 0
  }

}
