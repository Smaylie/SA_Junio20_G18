import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedPago: any = 1;

  cliente: any = {
    nombres: "Ricardo Antonio",
    apellidos: "Alvarado Ramirez",
    correo: "rick@gmail.com",
    direccion: "dirección de prueba"
  }
}
