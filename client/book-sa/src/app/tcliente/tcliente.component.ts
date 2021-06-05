import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tcliente',
  templateUrl: './tcliente.component.html',
  styleUrls: ['./tcliente.component.css']
})
export class TclienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arrClientes: any = [
    {
      idc: 1,
      nombres: 'Ricardo Antonio',
      apellidos: 'Alvarado Ramirez',
      correo: 'rick@gmail.com',
      password: '666',
      telefono: '55554444',
      estado: 1,
      tipo: 1
    },
    {
      idc: 2,
      nombres: 'Ricardo Antonio',
      apellidos: 'Alvarado Ramirez',
      correo: 'rick@gmail.com',
      password: '666',
      telefono: '55554444',
      estado: 1,
      tipo: 1
    },
    {
      idc: 3,
      nombres: 'Ricardo Antonio',
      apellidos: 'Alvarado Ramirez',
      correo: 'rick@gmail.com',
      password: '666',
      telefono: '55554444',
      estado: 1,
      tipo: 1
    },
    {
      idc: 4,
      nombres: 'Ricardo Antonio',
      apellidos: 'Alvarado Ramirez',
      correo: 'rick@gmail.com',
      password: '666',
      telefono: '55554444',
      estado: 0,
      tipo: 1
    },
    {
      idc: 5,
      nombres: 'Ricardo Antonio',
      apellidos: 'Alvarado Ramirez',
      correo: 'rick@gmail.com',
      password: '666',
      telefono: '55554444',
      estado: 1,
      tipo: 1
    },
    {
      idc: 6,
      nombres: 'Ricardo Antonio',
      apellidos: 'Alvarado Ramirez',
      correo: 'rick@gmail.com',
      password: '666',
      telefono: '55554444',
      estado: 1,
      tipo: 2
    },
  ];

  eliminarUsuario(idCliente: any){
    console.log(idCliente);
  }

}
