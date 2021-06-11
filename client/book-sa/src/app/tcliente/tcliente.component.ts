import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-tcliente',
  templateUrl: './tcliente.component.html',
  styleUrls: ['./tcliente.component.css']
})
export class TclienteComponent implements OnInit {

  constructor(private servicio: ServiciosService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  arrClientes: any = [];

  deleteCliente: any = {
    id: 0,
  }

  getClientes() {
    this.servicio.getClientes()
      .subscribe((res) => {
        this.arrClientes = res;
      });
  }

  eliminarUsuario(idCliente: any){
    this.deleteCliente.id = idCliente
    this.servicio.deleteClientes(this.deleteCliente)
      .subscribe((res) => {
        alert('cliente eliminado! 🥺');
        this.getClientes();
      }, (err) => {
        alert('ocurrio un error! 😖');
      })
  }

}
