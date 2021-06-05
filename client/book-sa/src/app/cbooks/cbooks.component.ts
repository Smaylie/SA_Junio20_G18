import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cbooks',
  templateUrl: './cbooks.component.html',
  styleUrls: ['./cbooks.component.css']
})
export class CbooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.calcularTotal();
  }

  calcularTotal() {
    this.arrLibros.forEach(element => {
      this.totalCarrito += parseFloat(element.precio);
    });

    this.totalCarrito = this.totalCarrito.toFixed(2);
  }

  totalCarrito: any = 0;

  arrLibros: any = [
    {
      idl: 1,
      nombre: 'hola',
      autor: 'juan benito',
      precio: '25.40',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 1,
      nombre: 'hola',
      autor: 'juan benito',
      precio: '25.40',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 1,
      nombre: 'hola',
      autor: 'juan benito',
      precio: '25.40',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 1,
      nombre: 'hola',
      autor: 'juan benito',
      precio: '25.40',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 1,
      nombre: 'hola',
      autor: 'juan benito',
      precio: '25.40',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 1,
      nombre: 'hola',
      autor: 'juan benito',
      precio: '25.40',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 1,
      nombre: 'hola',
      autor: 'juan benito',
      precio: '25.40',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 1,
      nombre: 'hola',
      autor: 'juan benito',
      precio: '25.40',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 1,
      nombre: 'hola',
      autor: 'juan benito',
      precio: '25.40',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 1,
      nombre: 'hola',
      autor: 'juan benito',
      precio: '25.40',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
    {
      idl: 1,
      nombre: 'hola',
      autor: 'juan benito',
      precio: '25.40',
      cantidad: 34,
      estado: 1,
      imagen: 'https://danielbadosa.com/wp-content/uploads/2020/05/00.-c%C3%B3mo-dise%C3%B1ar-la-portada-de-tu-libro-ejemplo-Portada-El-Abandono-1-643x1024.jpg'
    },
  ]

}
