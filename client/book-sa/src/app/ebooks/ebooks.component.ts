import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.component.html',
  styleUrls: ['./ebooks.component.css']
})
export class EbooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  actualizarLibro(nombre: any, autor: any, precio: any, cantidad: any) {
    this.updateBook.nombre = (<HTMLInputElement>document.getElementById(nombre)).value;
    this.updateBook.autor = (<HTMLInputElement>document.getElementById(autor)).value;
    this.updateBook.precio = (<HTMLInputElement>document.getElementById(precio)).value;
    this.updateBook.cantidad = (<HTMLInputElement>document.getElementById(cantidad)).value;

    console.log( this.updateBook );
  }

  idEditorial: number = 5;
  updateBook: any = {
    nombre: '',
    autor: '',
    precio: '',
    cantidad: 0
  }

  arrLibros: any = [
    {
      idl: 1,
      nombre: 'hola',
      editorial: 5,
      autor: 'juan benito',
      precio: '25.30',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 2,
      nombre: 'hola',
      editorial: 5,
      autor: 'juan benito',
      precio: '25.30',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 3,
      nombre: 'hola',
      editorial: 4,
      autor: 'juan benito',
      precio: '25.30',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 4,
      nombre: 'hola',
      editorial: 5,
      autor: 'juan benito',
      precio: '25.30',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 5,
      nombre: 'hola',
      editorial: 5,
      autor: 'juan benito',
      precio: '25.30',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 6,
      nombre: 'hola',
      editorial: 5,
      autor: 'juan benito',
      precio: '25.30',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 7,
      nombre: 'hola',
      editorial: 5,
      autor: 'juan benito',
      precio: '25.30',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 8,
      nombre: 'hola',
      editorial: 5,
      autor: 'juan benito',
      precio: '25.30',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 9,
      nombre: 'hola',
      editorial: 5,
      autor: 'juan benito',
      precio: '25.30',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 10,
      nombre: 'hola',
      editorial: 3,
      autor: 'juan benito',
      precio: '25.30',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
  ]

}
