import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  constructor(private servicio: ServiciosService, private router: Router) { }

  ngOnInit(): void {
  }

  crearSolicitud() {
    let strImg = this.libro.imagen;
    let foto = strImg.split("\\",4);
    this.libro.imagen = foto[2];
    this.servicio.uploadPdf(this.imagen.avatar)
      .subscribe(() => console.log('ok pdf'));
    this.servicio.postSolicitud(this.libro)
      .subscribe((res) => {
        alert('Solicitud creada con exito! 📙');
      }, (err) => {
        alert('ocurrio un error!')
      })
  }

  onFileChanged(event) {
    this.imagen.avatar = event.target.files[0]
  }

  imagen: any = {};
  libro: any = {
    nombre: '',
    autor: '',
    fecha: '',
    imagen: '',
  }

}
