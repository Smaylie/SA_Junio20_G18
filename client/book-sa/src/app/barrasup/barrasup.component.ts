import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barrasup',
  templateUrl: './barrasup.component.html',
  styleUrls: ['./barrasup.component.css']
})
export class BarrasupComponent implements OnInit {

  constructor(private servicio: ServiciosService, private router: Router) { }

  ngOnInit(): void {
    this.verificar = this.servicio.getLoged();
    if(this.verificar){
      this.obtenerUsuario();
    }
  }

  obtenerUsuario() {
    this.usuario = this.servicio.getLog();
  }

  verificarLogin() {
    this.servicio.getLoged()
  }

  usuario: any;
  verificar: any;

}
