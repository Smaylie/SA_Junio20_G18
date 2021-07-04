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
    this.selectedGroup = '18';
  }
  
  public selectedUsuario: any;
  selectedGroup: any;
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
      if(this.selectedGroup == '18') {
        this.servicio.postUsuario(this.newUser)
        .subscribe((res) => {
          console.log(res);
          alert('usuario creado con exito! 📘');
          this.router.navigateByUrl('/login');
        }, (err) => {
          console.error(err);
          alert('error! 💩');
        });
      } else if(this.selectedGroup == '17') {
        let user17 = {
          nombre: this.newUser.nombre,
          apellido: this.newUser.apellidos,
          celular: '123',
          email: this.newUser.correo,
          foto: '',
          password: this.newUser.password,
          tipo_usuario: 0
        }
        this.servicio.postClienteG17(user17)
          .subscribe((res) => {
            console.log(res);
            alert('usuario creado con exito! 📘');
            this.router.navigateByUrl('/login');
          })
      } else if(this.selectedGroup == '19') {
        let user19 = {
          primerNombre: this.newUser.nombre,
          primerApellido: this.newUser.apellidos,
          rol: 'CLIENTE',
          username: this.newUser.correo,
          password: this.newUser.password,
          telefono: '1234',
          direccion: 'direccion 1'
        }
        this.servicio.postClienteG19(user19)
          .subscribe((res) => {
            console.log(res);
            alert('usuario creado con exito! 📘');
            this.router.navigateByUrl('/login');
          })
      }
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
