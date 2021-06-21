import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private servicio: ServiciosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerLibros();
    this.obtenerUsuario();
    //console.log(this.usuario);
  }

  obtenerLibros() {
    this.servicio.getLibros()
      .subscribe((res) => {
        console.log(res);
        this.arrLibros = res;
        this.arrLibros.forEach(element => {
          if(element.imagen.includes(9000)) {
            this.arrLibrosImagen.push(element);
          } else {
            this.arrLibrosPdf.push(element);
          }
        });
      })
  }

  obtenerUsuario() {
    this.usuario = this.servicio.getLog();
  }

  aniadirCarrito(idLibro: number) {
    console.log(idLibro);
    this.nuevoCarrito.cliente = this.usuario.idc;
    this.nuevoCarrito.libro = idLibro;
    this.servicio.postCarrito(this.nuevoCarrito)
      .subscribe((res) => {
        alert('agregado al carrito! 🛒');
      }, (err) => {
        alert('error al agregar! ❌');
      })
  }

  arrLibros: any = [];
  arrLibrosImagen: any = [];
  arrLibrosPdf: any = [];
  usuario: any;
  nuevoCarrito: any = {
    cliente: 0,
    libro: 0
  };

}
