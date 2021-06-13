import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crudbooks',
  templateUrl: './crudbooks.component.html',
  styleUrls: ['./crudbooks.component.css']
})
export class CrudbooksComponent implements OnInit {

  constructor(private servicio: ServiciosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    this.usuario = this.servicio.getLog();
    console.log(this.usuario);
  }

  usuario: any;
}
