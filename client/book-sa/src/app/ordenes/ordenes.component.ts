import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  constructor(private servicio: ServiciosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerOrdenes();
  }

  obtenerOrdenes() {
    this.servicio.getOrdenes()
      .subscribe((res) => {
        this.arrOrdenes = res;
        console.log(this.arrOrdenes);
      });
  }

  aceptarOrden(idOrden, etapa) {
    let orden = {
      etapa: etapa + 1
    }
    this.servicio.putOrdenes(idOrden, orden)
      .subscribe((res) => {
        alert("Se cambio de etapa");
        this.obtenerOrdenes();
      });
  }

  cancelarOrden(idOrden, etapa) {
    let orden = {
      etapa: 0
    }
    this.servicio.putOrdenes(idOrden, orden)
      .subscribe((res) => {
        alert("Se cancelo la orden");
        this.obtenerOrdenes();
      });
  }

  arrOrdenes: any;

}
