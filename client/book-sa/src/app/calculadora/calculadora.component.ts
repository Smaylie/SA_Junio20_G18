import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.selectedUsuario = 12;
    this.precio = 0;
    this.total = 0;
  }

  calcular() {
    this.total = this.precio + (this.precio * this.selectedUsuario / 100)
  }

  selectedUsuario: number;
  precio: number;
  total: number;
}
