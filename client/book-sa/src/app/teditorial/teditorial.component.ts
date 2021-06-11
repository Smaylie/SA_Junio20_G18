import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-teditorial',
  templateUrl: './teditorial.component.html',
  styleUrls: ['./teditorial.component.css']
})
export class TeditorialComponent implements OnInit {

  constructor(private servicio: ServiciosService) { }

  ngOnInit(): void {
    this.getEditoriales();
  }
  // estado editoriales: 0 - eliminada, 1 - creada, 2 - pendiente aceptar
  arrEditoriales: any = [];

  deleteEditorial: any = {
    id: 0,
  }

  getEditoriales() {
    this.servicio.getEditoriales()
      .subscribe((res) => {
        this.arrEditoriales = res;
      })
  }

  eliminarEditorial(idEditorial: any){
    this.deleteEditorial.id = idEditorial;
    
    this.servicio.deleteEditorial(this.deleteEditorial)
      .subscribe((res) => {
        alert('editorial eliminado! 🥺');
        this.getEditoriales();
      }, (err) => {
        alert('ocurrio un error! 😖');
      })
  }

  aceptEditorial(idEditorial: any){
    this.deleteEditorial.id = idEditorial;
    
    this.servicio.aceptarEditorial(this.deleteEditorial)
      .subscribe((res) => {
        alert('editorial aceptada! 📖');
        this.getEditoriales();
      }, (err) => {
        alert('ocurrio un error! 😖');
      })
  }

}
