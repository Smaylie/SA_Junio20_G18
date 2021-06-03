import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teditorial',
  templateUrl: './teditorial.component.html',
  styleUrls: ['./teditorial.component.css']
})
export class TeditorialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // estado editoriales: 0 - eliminada, 1 - creada, 2 - pendiente aceptar
  arrEditoriales: any = [
    {
      nombre: 'Editorial 1',
      ide: 1,
      correo: 'editoria1@gmail.com',
      direccion: 'direccion 1',
      estado: 1
    },
    {
      nombre: 'Editorial 2',
      ide: 2,
      correo: 'editoria1@gmail.com',
      direccion: 'direccion 1',
      estado: 0
    },
    {
      nombre: 'Editorial 3',
      ide: 3,
      correo: 'editoria1@gmail.com',
      direccion: 'direccion 1',
      estado: 1
    },
    {
      nombre: 'Editorial 4',
      ide: 4,
      correo: 'editoria1@gmail.com',
      direccion: 'direccion 1',
      estado: 2
    },
    {
      nombre: 'Editorial 5',
      ide: 5,
      correo: 'editoria1@gmail.com',
      direccion: 'direccion 1',
      estado: 1
    },
    {
      nombre: 'Editorial 6',
      ide: 6,
      correo: 'editoria1@gmail.com',
      direccion: 'direccion 1',
      estado: 1
    },
  ];

  eliminarEditorial(idEditorial: any){
    console.log(idEditorial);
  }

  aceptarEditorial(idEditorial: any){
    console.log(idEditorial);
  }

}
