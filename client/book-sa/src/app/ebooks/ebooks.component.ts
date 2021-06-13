import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.component.html',
  styleUrls: ['./ebooks.component.css']
})
export class EbooksComponent implements OnInit {

  constructor(private servicio: ServiciosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuario();
    
  }

  obtenerLibros() {
    this.servicio.getLibros()
      .subscribe((res) => {
        console.log(res);
        this.arrLibros = res;
      });
  }

  obtenerUsuario() {
    this.usuario = this.servicio.getLog();
    console.log(this.usuario);
    console.log(this.idEditorial);
    this.idEditorial = this.usuario.ide;
    this.libro.editorial = this.usuario.ide;
    console.log(this.libro);
    this.obtenerLibros();
  }

  actualizarLibro(nombre: any, autor: any, precio: any, cantidad: any, idlibro) {
    this.updateBook.nombre = (<HTMLInputElement>document.getElementById(nombre)).value;
    this.updateBook.autor = (<HTMLInputElement>document.getElementById(autor)).value;
    this.updateBook.precio = (<HTMLInputElement>document.getElementById(precio)).value;
    this.updateBook.cantidad = (<HTMLInputElement>document.getElementById(cantidad)).value;

    console.log( this.updateBook );
    console.log(idlibro);

    this.servicio.updateLibros(idlibro, this.updateBook)
      .subscribe((res) => {
        alert('libro actualizado con exito! 📘✅');
        this.obtenerLibros();
      }, (err) => {
        console.error(err);
        alert('libro actualizado con exito! 📘✅');
        this.obtenerLibros();
      })
  }

  eliminarLibro(idLibro) {
    this.servicio.deleteLibros(idLibro)
      .subscribe((res) => {
        this.obtenerLibros();
        alert('libro eliminado con exito! 📘❌');
      }, (err) => {
        console.error(err);
        this.obtenerLibros();
        alert('libro eliminado con exito! 📘❌');
      })
  }

  crearLibro() {
    const strImg = this.libro.imagen;
    const foto = strImg.split("\\",4);
    this.libro.imagen = foto[2];
    this.servicio.uploadImage(this.imagen.avatar)
      .subscribe(() => console.log('ok1'));
    this.servicio.postLibro(this.libro)
      .subscribe((res) => {
        alert('libro creado con exito! 📙');
        this.obtenerLibros();
      }, (err) => {
        console.error(err);
        alert('libro creado con exito! 📙');
        this.obtenerLibros();
      })
  }

  onFileChanged(event) {
    this.imagen.avatar = event.target.files[0]
  }

  imagen: any = {};
  libro: any = {
    nombre: '',
    autor: '',
    precio: 0,
    cantidad: 0,
    estado: 1,
    imagen: '',
    editorial: 0,
  }
  idEditorial: number = 5;
  updateBook: any = {
    nombre: '',
    autor: '',
    precio: '',
    cantidad: 0
  }

  usuario: any;
  arrLibros: any = [];

}
