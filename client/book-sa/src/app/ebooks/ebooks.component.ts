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
    this.obtenerGrupo17();
    this.obtenerGrupo19();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id_genero',
      textField: 'nombre_genero',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.selectedGroup = '18';
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
    this.libro.generos = this.selectedItems;
    if(this.selectedGroup == '18') {
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
    } else if(this.selectedGroup == '17') {
      let libro17 = {
        id: 0,
        categoria: "",
        imagen: this.libro.imagen,
        images: "",
        nombre: this.libro.nombre,
        precio_cliente: this.libro.precio,
        proveedor: 2,
        stock: 0,
        valor_unitario: this.libro.precio + ""
      }
      console.log(libro17);
      this.servicio.postLibroG17(libro17)
        .subscribe((res) => {
          console.log(res);
          this.obtenerGrupo17();
        }, (err) => {
          console.error(err);
        })
    } else if(this.selectedGroup == '19') {

    }
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

  obtenerGrupo17() {
    this.servicio.getLibrosG17()
      .subscribe((res) => {
        this.obj17 = res;
        this.arrLibro17 = this.obj17.products;
      })
  }

  obtenerGrupo19() {
    this.servicio.getLibrosG19()
      .subscribe((res) => {
        this.arrLibro19 = res;
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
    fecha: '2021/07/03',
  };
  arrLibro17: any = [];
  obj17: any;
  arrLibro19: any = [];
  selectedGroup: any;
}
