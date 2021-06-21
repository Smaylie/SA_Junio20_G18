import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esolicitud',
  templateUrl: './esolicitud.component.html',
  styleUrls: ['./esolicitud.component.css']
})
export class EsolicitudComponent implements OnInit {

  constructor(private servicio: ServiciosService, private router: Router) { }

  ngOnInit(): void {
    this.getSolicitudes();
  }

  getSolicitudes() {
    this.servicio.getSolicitud()
      .subscribe((res) => {
        this.arrSolicitud = res;
      })
  }

  arrSolicitud: any = [];
  

}
