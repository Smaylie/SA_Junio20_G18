import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.component.html',
  styleUrls: ['./ebooks.component.css']
})
export class EbooksComponent implements OnInit {

  constructor(private servicio: ServiciosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuario();
    this.obtenerGeneros();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id_genero',
      textField: 'nombre_genero',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.bitacora.fecha = formatDate(new Date(), 'yyyy/MM/dd', 'en');
  }

  obtenerLibros() {
    this.servicio.getLibros()
      .subscribe((res) => {
        this.arrLibros = res;
        this.bitacora.accion = 'obtener libros',
        this.crearBitacora(this.bitacora);
      });
  }

  obtenerUsuario() {
    this.usuario = this.servicio.getLog();
    this.idEditorial = this.usuario.ide;
    this.libro.editorial = this.usuario.ide;
    this.bitacora.editorial = this.usuario.ide;
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

      this.bitacora.accion = 'actualizar libro: ' + idlibro,
      this.crearBitacora(this.bitacora);
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
    
    this.bitacora.accion = 'eliminar libro: ' + idLibro,
    this.crearBitacora(this.bitacora);
  }

  crearLibro() {
    const strImg = this.libro.imagen;
    const foto = strImg.split("\\",4);
    this.libro.imagen = foto[2];
    this.libro.generos = this.selectedItems;
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
      this.bitacora.accion = 'crear libro: ' + this.libro.nombre,
      this.crearBitacora(this.bitacora);
  }

  onFileChanged(event) {
    this.imagen.avatar = event.target.files[0]
  }

  obtenerGeneros() {
    this.servicio.getGeneros()
      .subscribe((res) => {
        this.arrGeneros = res;
        this.dropdownList = this.arrGeneros;
      }, (err) => {
        console.error(err);
      });
  }

  onItemSelect(item: any) {
    console.log(this.selectedItems);
  }
  
  onSelectAll(items: any) {
    console.log(items);
  }

  crearBitacora(nuevaBitacora) {
    this.servicio.postBitacora(nuevaBitacora)
      .subscribe((res) => {
        console.log('bit ok');
      }, (err) => {
        console.error(err);
      })
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
    generos: [],
  }
  idEditorial: number = 5;
  updateBook: any = {
    nombre: '',
    autor: '',
    precio: '',
    cantidad: 0
  }
  arrGeneros: any = [];
  usuario: any;
  arrLibros: any = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  fecha: any; 
  bitacora: any = {
    editorial: 0,
    accion: '',
    fecha: '',
  };
}
