import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tbitacora',
  templateUrl: './tbitacora.component.html',
  styleUrls: ['./tbitacora.component.css']
})
export class TbitacoraComponent implements OnInit {

  constructor(private servicio: ServiciosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerBitacora();
  }

  obtenerBitacora() {
    this.servicio.getBitacora()
      .subscribe((res) => {
        this.arrBitacora = res;
      })
  }

  arrBitacora: any = [];
}
