import { Component, OnInit, Injectable } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-esolicitud',
  templateUrl: './esolicitud.component.html',
  styleUrls: ['./esolicitud.component.css']
})
export class EsolicitudComponent implements OnInit {

  constructor(private servicio: ServiciosService, private router: Router) { }

  ngOnInit(): void {
    this.getSolicitudes();
    this.obtenerUsuario();
    this.bitacora.fecha = formatDate(new Date(), 'yyyy/MM/dd', 'en');
  }

  obtenerUsuario() {
    this.usuario = this.servicio.getLog();
    this.libro.editorial = this.usuario.ide;
    this.bitacora = this.usuario.ide;
  }

  getSolicitudes() {
    this.servicio.getSolicitud()
      .subscribe((res) => {
        this.arrSolicitud = res;
      })
  }

  aceptarSolicitud(solicitud) {
    this.libro.nombre = solicitud.nombre;
    this.libro.autor = solicitud.autor;
    this.libro.imagen = solicitud.imagen;

    this.servicio.postLibro(this.libro)
      .subscribe((res) => {
        this.crearBitacora();
        alert('libro aceptado con exito! 📙');
        this.router.navigateByUrl('/administrar-tienda', { skipLocationChange: true });
        this.servicio.updateSolicitud({ids: solicitud.ids})
          .subscribe((res) => console.log('ok'));
      }, (err) => {
        console.error(err);
        alert('libro aceptado con exito! 📙');
        this.router.navigateByUrl('/administrar-tienda', { skipLocationChange: true });
        this.servicio.updateSolicitud({ids: solicitud.ids})
          .subscribe((res) => console.log('ok'));
      })
  }

  crearBitacora() {
    this.bitacora.accion = "Se acepto una solicitud";
    this.servicio.postBitacora(this.bitacora)
      .subscribe((res) => {
        console.log('bit ok');
      }, (err) => {
        console.error(err);
      })
  }

  arrSolicitud: any = [];
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
  usuario: any;
  bitacora: any = {
    editorial: 0,
    accion: '',
    fecha: '',
  };
  /*
  autor: "Darren Shan"
  cantidad: 0
  estado: 1
  fecha: "6/20/2021"
  ids: 1
  imagen: "http://localhost:3015/uploads/etcdf.pdf"
  nombre: "EL TENEBROSO CIRQUE DU FREAK"
  precio: "0"
  */
}
