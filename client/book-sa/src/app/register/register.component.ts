import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private servicio: ServiciosService, private router: Router) { }

  ngOnInit(): void {
    this.selectedUsuario = '1';
  }
  
  public selectedUsuario: any;

  newUser: any = {
    nombre: '',
    apellidos: '',
    correo: '', 
    password: '',
    estado: '1',
    tipo: '1'
  }

  newEditorial: any = {
    nombre: '',
    correo: '',
    password: '',
    direccion: '',
    estado: 2,
  }

  postNew() {

    if(this.selectedUsuario == '1'){
      //crear nuevo usuario
      this.servicio.postUsuario(this.newUser)
        .subscribe((res) => {
          console.log(res);
          alert('usuario creado con exito! 📘');
          this.router.navigateByUrl('/login');
        }, (err) => {
          console.error(err);
          alert('error! 💩');
        });
    } else {
      //crear nuevo editorial
      this.servicio.postEditorial(this.newEditorial)
        .subscribe((res) => {
          console.log(res);
          alert('editorial creado con exito! 📚');
          this.router.navigateByUrl('/login');
        }, (err) => {
          console.error(err);
          alert('error! 💩');
        })
    }
  }

}
